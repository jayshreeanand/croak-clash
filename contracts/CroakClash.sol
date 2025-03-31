// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "./CroakToken.sol";
import "./FrogNFT.sol";

contract CroakClash is Ownable, Pausable, ReentrancyGuard {
    // Contract references
    CroakToken public croakToken;
    FrogNFT public frogNFT;
    
    // Game state
    uint256 private _nextBattleId = 1;
    mapping(uint256 => Battle) public battles;
    mapping(address => PlayerStats) public playerStats;
    
    // Constants
    uint256 public constant BATTLE_COOLDOWN = 1 hours;
    uint256 public constant EXPERIENCE_PER_BATTLE = 10;
    uint256 public constant CROAK_REWARD = 100;
    
    // Structs
    struct Battle {
        uint256 id;
        address player1;
        address player2;
        uint256 frog1Id;
        uint256 frog2Id;
        address winner;
        uint256 timestamp;
        bool isComplete;
    }
    
    struct PlayerStats {
        uint256 battlesWon;
        uint256 battlesLost;
        uint256 totalExperience;
        uint256 lastBattleTime;
    }
    
    // Resource types
    enum ResourceType { LilyPads, Flies, Water }
    
    // Resource struct
    struct Resource {
        uint256 amount;
        uint256 lastUpdate;
        uint256 regenerationRate;
    }
    
    // Faction struct
    struct Faction {
        string name;
        uint256 totalPower;
        uint256 memberCount;
        mapping(ResourceType => Resource) resources;
    }
    
    // State variables
    mapping(string => Faction) public factions;
    uint256 public battleCount;
    
    // Events
    event BattleCreated(uint256 indexed battleId, address indexed player1, address indexed player2);
    event BattleCompleted(uint256 indexed battleId, address indexed winner);
    event FrogTrained(uint256 indexed frogId, uint256 newLevel);
    event ResourceClaimed(string indexed faction, ResourceType resourceType, uint256 amount);
    event FactionJoined(string indexed faction, address indexed player);
    
    constructor(
        address initialOwner,
        address _croakToken,
        address _frogNFT
    ) Ownable(initialOwner) {
        croakToken = CroakToken(_croakToken);
        frogNFT = FrogNFT(_frogNFT);
        
        // Initialize factions
        _initializeFaction("Efrogs");
        _initializeFaction("Efroglets");
        _initializeFaction("Rogue Frogs");
    }
    
    // Initialize a faction
    function _initializeFaction(string memory name) internal {
        Faction storage faction = factions[name];
        faction.name = name;
        faction.totalPower = 0;
        faction.memberCount = 0;
        
        // Initialize resources
        faction.resources[ResourceType.LilyPads] = Resource(1000, block.timestamp, 10);
        faction.resources[ResourceType.Flies] = Resource(1000, block.timestamp, 10);
        faction.resources[ResourceType.Water] = Resource(1000, block.timestamp, 10);
    }
    
    // Join a faction
    function joinFaction(string memory factionName, uint256 frogId) external {
        require(frogNFT.ownerOf(frogId) == msg.sender, "Not the frog owner");
        require(croakToken.getStakedBalance(msg.sender) >= CROAK_REWARD, "Insufficient stake");
        
        FrogNFT.FrogAttributes memory attributes = frogNFT.getFrogAttributes(frogId);
        require(keccak256(bytes(attributes.faction)) == keccak256(bytes(factionName)), "Frog faction mismatch");
        
        Faction storage faction = factions[factionName];
        faction.memberCount++;
        faction.totalPower += _calculateFrogPower(attributes);
        
        emit FactionJoined(factionName, msg.sender);
    }
    
    // Start a battle
    function startBattle(uint256 attackerId, uint256 defenderId) external whenNotPaused {
        require(frogNFT.ownerOf(attackerId) == msg.sender, "Not the attacker owner");
        require(_canBattle(attackerId), "Attacker on cooldown");
        
        FrogNFT.FrogAttributes memory attacker = frogNFT.getFrogAttributes(attackerId);
        FrogNFT.FrogAttributes memory defender = frogNFT.getFrogAttributes(defenderId);
        
        require(keccak256(bytes(attacker.faction)) != keccak256(bytes(defender.faction)), "Same faction");
        
        uint256 battleId = battleCount++;
        battles[battleId] = Battle({
            id: battleId,
            player1: msg.sender,
            player2: msg.sender,
            frog1Id: attackerId,
            frog2Id: defenderId,
            winner: address(0),
            timestamp: block.timestamp,
            isComplete: false
        });
        
        emit BattleCreated(battleId, msg.sender, msg.sender);
        
        // Simulate battle
        _simulateBattle(battleId);
    }
    
    // Simulate a battle
    function _simulateBattle(uint256 battleId) internal {
        Battle storage battle = battles[battleId];
        FrogNFT.FrogAttributes memory attacker = frogNFT.getFrogAttributes(battle.frog1Id);
        FrogNFT.FrogAttributes memory defender = frogNFT.getFrogAttributes(battle.frog2Id);
        
        uint256 attackerPower = _calculateFrogPower(attacker);
        uint256 defenderPower = _calculateFrogPower(defender);
        
        // Add randomness factor
        uint256 randomFactor = uint256(keccak256(abi.encodePacked(block.timestamp, battleId))) % 100;
        
        if (attackerPower + randomFactor > defenderPower) {
            battle.winner = msg.sender;
            frogNFT.addExperience(battle.frog1Id, EXPERIENCE_PER_BATTLE);
        } else {
            battle.winner = msg.sender;
            frogNFT.addExperience(battle.frog2Id, EXPERIENCE_PER_BATTLE);
        }
        
        battle.isComplete = true;
        emit BattleCompleted(battleId, msg.sender);
    }
    
    // Calculate frog power
    function _calculateFrogPower(FrogNFT.FrogAttributes memory attributes) internal pure returns (uint256) {
        return (attributes.strength * 2 + attributes.agility + attributes.intelligence) * attributes.level;
    }
    
    // Check if a frog can battle
    function _canBattle(uint256 frogId) internal view returns (bool) {
        for (uint256 i = 0; i < battleCount; i++) {
            Battle memory battle = battles[i];
            if (battle.frog1Id == frogId && !battle.isComplete) {
                return false;
            }
            if (battle.timestamp + BATTLE_COOLDOWN > block.timestamp) {
                return false;
            }
        }
        return true;
    }
    
    // Claim resources
    function claimResources(string memory factionName, ResourceType resourceType) external {
        Faction storage faction = factions[factionName];
        require(faction.memberCount > 0, "Faction has no members");
        
        Resource storage resource = faction.resources[resourceType];
        uint256 timePassed = block.timestamp - resource.lastUpdate;
        uint256 newResources = timePassed * resource.regenerationRate;
        
        resource.amount += newResources;
        resource.lastUpdate = block.timestamp;
        
        emit ResourceClaimed(factionName, resourceType, newResources);
    }
    
    // Get faction resources
    function getFactionResources(string memory factionName) external view returns (
        uint256 lilyPads,
        uint256 flies,
        uint256 water
    ) {
        Faction storage faction = factions[factionName];
        lilyPads = faction.resources[ResourceType.LilyPads].amount;
        flies = faction.resources[ResourceType.Flies].amount;
        water = faction.resources[ResourceType.Water].amount;
    }
    
    // Pause game operations
    function pause() external onlyOwner {
        _pause();
    }
    
    // Unpause game operations
    function unpause() external onlyOwner {
        _unpause();
    }
    
    // Battle functions
    function createBattle(uint256 frogId, address opponent, uint256 opponentFrogId) 
        external 
        whenNotPaused 
        nonReentrant 
        returns (uint256) 
    {
        require(frogNFT.ownerOf(frogId) == msg.sender, "Not frog owner");
        require(frogNFT.ownerOf(opponentFrogId) == opponent, "Invalid opponent frog");
        require(
            block.timestamp >= playerStats[msg.sender].lastBattleTime + BATTLE_COOLDOWN,
            "Battle cooldown active"
        );
        
        uint256 battleId = _nextBattleId++;
        
        battles[battleId] = Battle({
            id: battleId,
            player1: msg.sender,
            player2: opponent,
            frog1Id: frogId,
            frog2Id: opponentFrogId,
            winner: address(0),
            timestamp: block.timestamp,
            isComplete: false
        });
        
        playerStats[msg.sender].lastBattleTime = block.timestamp;
        
        emit BattleCreated(battleId, msg.sender, opponent);
        return battleId;
    }
    
    function completeBattle(uint256 battleId) external whenNotPaused nonReentrant {
        Battle storage battle = battles[battleId];
        require(!battle.isComplete, "Battle already completed");
        require(
            msg.sender == battle.player1 || msg.sender == battle.player2,
            "Not battle participant"
        );
        
        // Simulate battle outcome (can be expanded with more complex logic)
        uint256 randomNumber = uint256(keccak256(abi.encodePacked(
            block.timestamp,
            block.prevrandao,
            msg.sender
        ))) % 100;
        
        address winner;
        uint256 winnerFrogId;
        address loser;
        
        if (randomNumber < 50) {
            winner = battle.player1;
            winnerFrogId = battle.frog1Id;
            loser = battle.player2;
        } else {
            winner = battle.player2;
            winnerFrogId = battle.frog2Id;
            loser = battle.player1;
        }
        
        battle.winner = winner;
        battle.isComplete = true;
        
        // Update stats
        playerStats[winner].battlesWon++;
        playerStats[loser].battlesLost++;
        playerStats[winner].totalExperience += EXPERIENCE_PER_BATTLE;
        
        // Reward winner
        croakToken.transfer(winner, CROAK_REWARD);
        
        emit BattleCompleted(battleId, winner);
    }
    
    // View functions
    function getBattle(uint256 battleId) external view returns (Battle memory) {
        return battles[battleId];
    }
    
    function getPlayerStats(address player) external view returns (PlayerStats memory) {
        return playerStats[player];
    }
} 