// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FrogNFT is ERC721URIStorage, Ownable {
    // Game contract address
    address public gameContract;
    
    // Token ID counter
    uint256 private _nextTokenId = 1;
    
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
    
    constructor(address initialOwner) ERC721("Croak Clash Frogs", "FROG") Ownable(initialOwner) {
    }
    
    // Set the game contract address
    function setGameContract(address _gameContract) external onlyOwner {
        require(_gameContract != address(0), "Invalid game contract address");
        gameContract = _gameContract;
        emit GameContractSet(_gameContract);
    }
    
    // Internal level up function
    function _levelUp(uint256 tokenId) internal {
        require(_ownerOf(tokenId) != address(0), "Frog does not exist");
        require(frogAttributes[tokenId].isActive, "Frog is not active");
        
        FrogAttributes storage frog = frogAttributes[tokenId];
        require(frog.level < 10, "Frog already at max level");
        
        frog.level += 1;
        frog.experience = 0; // Reset experience
        
        emit FrogLeveledUp(tokenId, frog.level);
    }
    
    // External level up function
    function levelUp(uint256 tokenId) external {
        _levelUp(tokenId);
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
        
        uint256 newTokenId = _nextTokenId++;
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
        
        // Level up the frog using internal function
        _levelUp(newTokenId);
        
        return newTokenId;
    }
    
    // Add experience to a frog
    function addExperience(uint256 tokenId, uint256 amount) external {
        require(_ownerOf(tokenId) != address(0), "Frog does not exist");
        require(frogAttributes[tokenId].isActive, "Frog is not active");
        
        FrogAttributes storage frog = frogAttributes[tokenId];
        frog.experience += amount;
        
        // Level up if enough experience
        if (frog.experience >= 100) {
            _levelUp(tokenId);
        }
    }
    
    // Get frog attributes
    function getFrogAttributes(uint256 tokenId) external view returns (FrogAttributes memory) {
        require(_ownerOf(tokenId) != address(0), "Frog does not exist");
        return frogAttributes[tokenId];
    }
    
    // Set frog URI
    function setFrogURI(uint256 tokenId, string memory _tokenURI) external onlyOwner {
        _setTokenURI(tokenId, _tokenURI);
    }
    
    // Handle cleanup of frog attributes during burn
    function _update(address to, uint256 tokenId, address auth) internal virtual override returns (address) {
        address from = super._update(to, tokenId, auth);
        
        if (to == address(0)) { // This is a burn
            delete frogAttributes[tokenId];
        }
        
        return from;
    }

    // Override supportsInterface from ERC721URIStorage
    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    // Override tokenURI from ERC721URIStorage
    function tokenURI(uint256 tokenId) public view virtual override(ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }
} 