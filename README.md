# 🐸 Croak Clash

A blockchain-based battle game where frog warriors compete for supremacy in the digital swamp. Built on the Linea blockchain.

## 🌟 Features

### 🎮 Game Mechanics

- **Frog Warriors**: Mint and train unique frog warriors with different attributes
- **Faction System**: Join one of three factions:
  - **Efrogs**: Elite warriors with balanced stats
  - **Efroglets**: Swift and agile fighters
  - **Rogue Frogs**: Powerful but unpredictable warriors
- **Battle System**: Engage in strategic battles with other players
- **Evolution Lab**: Upgrade your frog warriors with special abilities
- **Resource Management**: Collect and manage lily pads, flies, and water resources

### 💎 Blockchain Integration

- **Croak Token**: Native ERC-20 token for in-game transactions
- **FrogNFT**: Unique ERC-721 tokens representing frog warriors
- **Smart Contracts**: Secure and transparent game logic on Linea blockchain
- **MetaMask Integration**: Seamless wallet connection for transactions

### 🏆 Competitive Features

- **Leaderboard System**: Track top players and factions
- **Battle Logs**: Real-time battle history and achievements
- **Resource Territories**: Control strategic locations in the swamp
- **Tournaments**: Participate in special events and competitions

## 🏗️ Architecture

### Smart Contracts

- **CroakToken.sol**: ERC-20 token for in-game economy
- **FrogNFT.sol**: ERC-721 contract for frog warrior NFTs
- **CroakClash.sol**: Main game contract handling battles and rewards

### Frontend Stack

- **Next.js**: React framework for the web application
- **TailwindCSS**: Utility-first CSS framework
- **Wagmi**: React hooks for Ethereum
- **Framer Motion**: Smooth animations and transitions

### Backend Services

- **Linea Blockchain**: Layer 2 solution for fast and cost-effective transactions
- **IPFS**: Decentralized storage for NFT metadata
- **The Graph**: Indexed blockchain data for efficient queries

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MetaMask wallet
- Linea network configured in MetaMask

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/croak-clash.git
cd croak-clash
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:

```
NEXT_PUBLIC_LINEA_RPC_URL=your_linea_rpc_url
NEXT_PUBLIC_CROAK_TOKEN_ADDRESS=your_token_address
NEXT_PUBLIC_FROG_NFT_ADDRESS=your_nft_address
NEXT_PUBLIC_CROAK_CLASH_ADDRESS=your_game_address
```

4. Start the development server:

```bash
npm run dev
```

### Smart Contract Deployment

1. Compile contracts:

```bash
npm run compile
```

2. Deploy to Linea testnet:

```bash
npm run deploy:linea-testnet
```

3. Deploy to Linea mainnet:

```bash
npm run deploy:linea
```

4. Verify contracts:

```bash
npm run verify:linea
```

## 🎯 Game Features in Detail

### Frog Warrior Attributes

- **Strength**: Determines attack power
- **Agility**: Affects dodge chance and speed
- **Intelligence**: Influences special ability effectiveness
- **Experience**: Gained through battles and training
- **Level**: Increases with experience, unlocks new abilities

### Battle System

- Turn-based combat with strategic elements
- Special abilities unique to each frog type
- Resource management during battles
- Reward system based on performance

### Evolution System

- Upgrade paths for different playstyles
- Special mutations and abilities
- Resource requirements for evolution
- Unique visual changes for evolved forms

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Linea blockchain team for their excellent L2 solution
- OpenZeppelin for their secure smart contract templates
- The Ethereum community for their continuous support

## 📞 Support

For support, join our [Discord](https://discord.gg/croak-clash) or open an issue in the repository.

---

Made with 🐸 by the Croak Clash Team
