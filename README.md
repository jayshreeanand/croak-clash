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


## Screenshots

Home page
<img width="1626" alt="Screenshot 2025-03-31 at 9 52 47 PM" src="https://github.com/user-attachments/assets/ef796d90-2e8b-48d8-9ef5-7c270de5f56a" />

Features

<img width="1600" alt="Screenshot 2025-03-31 at 9 55 03 PM" src="https://github.com/user-attachments/assets/a598f29c-30f7-4e65-bce5-e23fb45b4466" />

<img width="1610" alt="Screenshot 2025-03-31 at 9 52 58 PM" src="https://github.com/user-attachments/assets/8034775a-d882-491b-b5fc-f5966c2befc7" />

Metamask Login

<img width="360" alt="Screenshot 2025-03-31 at 9 53 06 PM" src="https://github.com/user-attachments/assets/57fbbc4d-3656-4597-9bb3-5529d95039de" />

<img width="1600" alt="Screenshot 2025-03-31 at 9 53 23 PM" src="https://github.com/user-attachments/assets/d216341e-3930-4f9a-a6a7-8369452d3398" />

<img width="443" alt="Screenshot 2025-03-31 at 9 53 30 PM" src="https://github.com/user-attachments/assets/a106a013-c139-4f91-a935-d6512e34b363" />

<img width="1586" alt="Screenshot 2025-03-31 at 9 53 41 PM" src="https://github.com/user-attachments/assets/24730088-77f0-4cd8-9a33-9da9b12f358f" />

<img width="1583" alt="Screenshot 2025-03-31 at 9 53 50 PM" src="https://github.com/user-attachments/assets/1e27a149-ab7c-45e2-8928-93a35c808c61" />

<img width="1585" alt="Screenshot 2025-03-31 at 9 54 01 PM" src="https://github.com/user-attachments/assets/b64a4ce9-0326-4f21-8a11-ae471ac3bd07" />

<img width="661" alt="Screenshot 2025-03-31 at 9 54 08 PM" src="https://github.com/user-attachments/assets/f599da33-cde2-4848-b39f-5e16f708ca56" />

<img width="1589" alt="Screenshot 2025-03-31 at 9 54 19 PM" src="https://github.com/user-attachments/assets/20778b32-0ae1-49a2-aa7b-fd0a38455905" />

<img width="1545" alt="Screenshot 2025-03-31 at 9 54 30 PM" src="https://github.com/user-attachments/assets/2b603431-8cba-4a03-a1d4-0143ac2cfd4a" />


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
