// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract FrogNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    
    // Game contract address
    address public gameContract;
    
    // Frog attributes
    struct FrogAttributes {
        uint256 strength;
        uint256 agility;
        uint256 intelligence;
        uint256 level;
        uint256 experience;
        string faction; // "Efrogs", "Efroglets", or "Rogue Frogs"
        bool isActive;
    }
    
    // Mapping from token ID to frog attributes
    mapping(uint256 => FrogAttributes) public frogAttributes;
    
    // Events
    event FrogMinted(address indexed owner, uint256 indexed tokenId, string faction);
    event FrogLeveledUp(uint256 indexed tokenId, uint256 newLevel);
    event GameContractSet(address indexed gameContract);
    
    constructor() ERC721("Croak Clash Frogs", "FROG") Ownable(msg.sender) {}
    
    // Set the game contract address
    function setGameContract(address _gameContract) external onlyOwner {
        require(_gameContract != address(0), "Invalid game contract address");
        gameContract = _gameContract;
        emit GameContractSet(_gameContract);
    }
    
    // Mint a new frog
    function mintFrog(
        address owner,
        string memory faction,
        uint256 strength,
        uint256 agility,
        uint256 intelligence
    ) external returns (uint256) {
        require(
            keccak256(bytes(faction)) == keccak256(bytes("Efrogs")) ||
            keccak256(bytes(faction)) == keccak256(bytes("Efroglets")) ||
            keccak256(bytes(faction)) == keccak256(bytes("Rogue Frogs")),
            "Invalid faction"
        );
        
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        
        _mint(owner, newTokenId);
        
        // Set frog attributes
        frogAttributes[newTokenId] = FrogAttributes({
            strength: strength,
            agility: agility,
            intelligence: intelligence,
            level: 1,
            experience: 0,
            faction: faction,
            isActive: true
        });
        
        emit FrogMinted(owner, newTokenId, faction);
        
        return newTokenId;
    }
    
    // Level up a frog
    function levelUp(uint256 tokenId) external {
        require(_exists(tokenId), "Frog does not exist");
        require(frogAttributes[tokenId].isActive, "Frog is not active");
        
        FrogAttributes storage frog = frogAttributes[tokenId];
        frog.level += 1;
        frog.experience = 0; // Reset experience
        
        emit FrogLeveledUp(tokenId, frog.level);
    }
    
    // Add experience to a frog
    function addExperience(uint256 tokenId, uint256 amount) external {
        require(_exists(tokenId), "Frog does not exist");
        require(frogAttributes[tokenId].isActive, "Frog is not active");
        
        FrogAttributes storage frog = frogAttributes[tokenId];
        frog.experience += amount;
        
        // Level up if enough experience
        if (frog.experience >= 100) {
            levelUp(tokenId);
        }
    }
    
    // Get frog attributes
    function getFrogAttributes(uint256 tokenId) external view returns (FrogAttributes memory) {
        require(_exists(tokenId), "Frog does not exist");
        return frogAttributes[tokenId];
    }
    
    // Set frog URI
    function setFrogURI(uint256 tokenId, string memory _tokenURI) external onlyOwner {
        _setTokenURI(tokenId, _tokenURI);
    }
    
    // Override _burn to clean up attributes
    function _burn(uint256 tokenId) internal override {
        super._burn(tokenId);
        delete frogAttributes[tokenId];
    }
} 