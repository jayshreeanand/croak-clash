// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "./CroakToken.sol";
import "./FrogNFT.sol";

contract CroakClash is Ownable, Pausable {
    // Contract addresses
    CroakToken public croakToken;
    FrogNFT public frogNFT;
    
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
    
    // Battle struct
    struct Battle {
        uint256 attackerId;
        uint256 defenderId;
        uint256 timestamp;
        bool isActive;
        uint256 winner;
    }
    
    // State variables
    mapping(string => Faction) public factions;
    mapping(uint256 => Battle) public battles;
    uint256 public battleCount;
    
    // Constants
    uint256 public constant BATTLE_COOLDOWN = 1 hours;
    uint256 public constant MIN_STAKE_AMOUNT = 100 * 10**18; // 100 CROAK
    uint256 public constant EXPERIENCE_REWARD = 10;
    
    // Events
    event BattleStarted(uint256 indexed battleId, uint256 indexed attackerId, uint256 indexed defenderId);
    event BattleEnded(uint256 indexed battleId, uint256 indexed winnerId);
    event ResourceClaimed(string indexed faction, ResourceType resourceType, uint256 amount);
    event FactionJoined(string indexed faction, address indexed player);
    
    constructor(address _croakToken, address _frogNFT) Ownable(msg.sender) {
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
        require(croakToken.getStakedBalance(msg.sender) >= MIN_STAKE_AMOUNT, "Insufficient stake");
        
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
            attackerId: attackerId,
            defenderId: defenderId,
            timestamp: block.timestamp,
            isActive: true,
            winner: 0
        });
        
        emit BattleStarted(battleId, attackerId, defenderId);
        
        // Simulate battle
        _simulateBattle(battleId);
    }
    
    // Simulate a battle
    function _simulateBattle(uint256 battleId) internal {
        Battle storage battle = battles[battleId];
        FrogNFT.FrogAttributes memory attacker = frogNFT.getFrogAttributes(battle.attackerId);
        FrogNFT.FrogAttributes memory defender = frogNFT.getFrogAttributes(battle.defenderId);
        
        uint256 attackerPower = _calculateFrogPower(attacker);
        uint256 defenderPower = _calculateFrogPower(defender);
        
        // Add randomness factor
        uint256 randomFactor = uint256(keccak256(abi.encodePacked(block.timestamp, battleId))) % 100;
        
        if (attackerPower + randomFactor > defenderPower) {
            battle.winner = battle.attackerId;
            frogNFT.addExperience(battle.attackerId, EXPERIENCE_REWARD);
        } else {
            battle.winner = battle.defenderId;
            frogNFT.addExperience(battle.defenderId, EXPERIENCE_REWARD);
        }
        
        battle.isActive = false;
        emit BattleEnded(battleId, battle.winner);
    }
    
    // Calculate frog power
    function _calculateFrogPower(FrogNFT.FrogAttributes memory attributes) internal pure returns (uint256) {
        return (attributes.strength * 2 + attributes.agility + attributes.intelligence) * attributes.level;
    }
    
    // Check if a frog can battle
    function _canBattle(uint256 frogId) internal view returns (bool) {
        for (uint256 i = 0; i < battleCount; i++) {
            Battle memory battle = battles[i];
            if (battle.attackerId == frogId && battle.isActive) {
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
} 