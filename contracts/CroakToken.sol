// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";

contract CroakToken is ERC20, Ownable, Pausable {
    // Game contract address
    address public gameContract;
    
    // Mapping to track staked tokens
    mapping(address => uint256) public stakedTokens;
    
    // Events
    event TokensStaked(address indexed user, uint256 amount);
    event TokensUnstaked(address indexed user, uint256 amount);
    event GameContractSet(address indexed gameContract);
    
    constructor(address initialOwner) ERC20("Croak Token", "CROAK") Ownable(initialOwner) {
        // Mint initial supply to owner
        _mint(initialOwner, 1000000000 * 10 ** decimals());
    }
    
    // Set the game contract address
    function setGameContract(address _gameContract) external onlyOwner {
        require(_gameContract != address(0), "Invalid game contract address");
        gameContract = _gameContract;
        emit GameContractSet(_gameContract);
    }
    
    // Stake tokens
    function stake(uint256 amount) external whenNotPaused {
        require(amount > 0, "Amount must be greater than 0");
        require(balanceOf(msg.sender) >= amount, "Insufficient balance");
        
        _transfer(msg.sender, address(this), amount);
        stakedTokens[msg.sender] += amount;
        
        emit TokensStaked(msg.sender, amount);
    }
    
    // Unstake tokens
    function unstake(uint256 amount) external whenNotPaused {
        require(amount > 0, "Amount must be greater than 0");
        require(stakedTokens[msg.sender] >= amount, "Insufficient staked balance");
        
        stakedTokens[msg.sender] -= amount;
        _transfer(address(this), msg.sender, amount);
        
        emit TokensUnstaked(msg.sender, amount);
    }
    
    // Get staked balance
    function getStakedBalance(address user) external view returns (uint256) {
        return stakedTokens[user];
    }
    
    // Pause token operations
    function pause() external onlyOwner {
        _pause();
    }
    
    // Unpause token operations
    function unpause() external onlyOwner {
        _unpause();
    }
    
    // Override transfer function to check for paused state
    function transfer(address to, uint256 amount) public override whenNotPaused returns (bool) {
        return super.transfer(to, amount);
    }
    
    // Override transferFrom function to check for paused state
    function transferFrom(address from, address to, uint256 amount) public override whenNotPaused returns (bool) {
        return super.transferFrom(from, to, amount);
    }
} 