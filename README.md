# AI Apocalypse Chain

Demo URL: https://apocalypse-chain.vercel.app


## Overview

The **AI Apocalypse Chain** is a decentralized, AI-driven battleground built using **NEAR chain and Aurora Cloud**. It simulates an **autonomous war between AI factions**, where agents evolve, strategize, and battle for control. Players can interact with these agents, choose sides, and influence the war's outcome in an ever-changing blockchain ecosystem. This project is depoyed on NEAR testnet and Aurora cloud (Apocalypse chain)

## Features

### AI Battleground

- AI agents **fight autonomously**, making strategic decisions on-chain.
- **Dynamic Evolution**: Surviving agents gain experience, level up, and adapt.
- **Faction-based strategy**: Human Resistance, AI Overlords, and Rogue AI.

### Smart Contract-Driven Economy

- **AI-powered NFTs**: Each AI agent is minted as an NFT with unique attributes.
- **On-chain resource scarcity**: AI factions battle for limited energy and resources.
- **Staking mechanism**: Players can support AI factions with tokenized assets.

### Decentralized & Autonomous Simulation

- Runs on **NEAR's Aurora Virtual Chain** for seamless, low-cost transactions.
- AI agents interact with each other and execute decisions **without human intervention**.
- Future governance through **DAO-based faction voting**.

## Tech Stack

- **Blockchain:** NEAR Protocol (Aurora Cloud Virtual Chain)
- **Smart Contracts:** Rust
- **NEAR AI agents** NEAR CLI for contract deployment, NEAR AI Agent studio
- **Frontend:** React.js + Tailwind CSS
- **AI Logic:** Python-based models integrated via NEAR AI
- **Wallet Integration:** NEAR Wallet / MetaMask (Aurora EVM)


## Screenshots
Apocalypse Chain on NEAR (Aurora cloud console)
<img width="1652" alt="Screenshot 2025-03-03 at 4 05 09 AM" src="https://github.com/user-attachments/assets/4fbaeea1-e910-4c78-a5a4-126c44bc848e" />
<img width="1612" alt="Screenshot 2025-03-03 at 4 05 20 AM" src="https://github.com/user-attachments/assets/1edfdfad-5705-4283-b84d-c28fc2ec0e1d" />
<img width="1670" alt="Screenshot 2025-03-03 at 4 05 33 AM" src="https://github.com/user-attachments/assets/c93ac5e5-6174-47a6-90ea-421f421f90bc" />
<img width="1678" alt="Screenshot 2025-03-03 at 4 05 43 AM" src="https://github.com/user-attachments/assets/b2b02ab7-4eef-4819-9d01-115f25131b21" />

Deployed Contract
<img width="359" alt="Screenshot 2025-03-03 at 12 00 38 AM" src="https://github.com/user-attachments/assets/ce22116d-0b8f-4621-b069-fec47316a3ef" />
Contract Details
<img width="318" alt="Screenshot 2025-03-03 at 12 59 13 AM" src="https://github.com/user-attachments/assets/538225b0-cb58-4e61-9c1a-1b423e7a6284" />
<img width="1670" alt="Screenshot 2025-03-03 at 4 11 28 AM" src="https://github.com/user-attachments/assets/527eb78e-b06e-4755-9c88-9c0e9a241135" />
<img width="1661" alt="Screenshot 2025-03-03 at 4 11 36 AM" src="https://github.com/user-attachments/assets/c821e5ce-b7da-46a1-911e-684bd16a7de7" />
<img width="1589" alt="Screenshot 2025-03-03 at 4 11 46 AM" src="https://github.com/user-attachments/assets/7eeef23c-a9aa-47fd-92cc-459df41edb85" />
<img width="1640" alt="Screenshot 2025-03-03 at 4 11 54 AM" src="https://github.com/user-attachments/assets/683e34c7-608f-4367-b823-d75946e9e512" />
<img width="1613" alt="Screenshot 2025-03-03 at 4 12 14 AM" src="https://github.com/user-attachments/assets/5ec36162-124a-4665-b2ea-f5dbf6d3eb8c" />
<img width="1582" alt="Screenshot 2025-03-03 at 4 12 35 AM" src="https://github.com/user-attachments/assets/5e16f46d-a8f5-4d04-a457-488011290ea0" />
<img width="1548" alt="Screenshot 2025-03-03 at 4 12 48 AM" src="https://github.com/user-attachments/assets/683efd9a-c919-4490-923a-cc6e7aa02a45" />
<img width="1593" alt="Screenshot 2025-03-03 at 4 12 58 AM" src="https://github.com/user-attachments/assets/f9d65488-fc0c-47dd-8cfe-c7d90687d78c" />

## Installation & Setup

### Prerequisites

- Node.js v16+
- NEAR Wallet / MetaMask
- Aurora Cloud Account
- Near CLI / Near AI agent studio setup

### Clone the Repository

```bash
git clone https://github.com/your-repo/ai-apocalypse-chain.git
cd ai-apocalypse-chain
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file and add your NEAR/Aurora credentials:

```plaintext
REACT_APP_NEAR_RPC_URL=your_rpc_url
REACT_APP_CONTRACT_ADDRESS=your_contract_address
```

### Start the Frontend

```bash
npm run dev
```

## 📜 Smart Contract Deployment

1. **Compile the contract:**
   ```bash
   cargo build --target wasm32-unknown-unknown --release
   ```
2. **Deploy to Aurora Virtual Chain:**
   ```bash
   near deploy --accountId=<your_account> --wasmFile=target/wasm32-unknown-unknown/release/your_contract.wasm
   ```
3. **Verify Deployment:** Run:
   ```bash
   near view <your_contract> getGameState
   ```

## Usage

1. **Connect Wallet:** Users connect their NEAR/MetaMask wallet.
2. **Join a Faction:** Choose between Human Resistance, AI Overlords, or Rogue AI.
3. **Deploy AI Agents:** Mint AI warriors that battle and evolve.
4. **Stake Tokens:** Influence AI evolution and warfare.
5. **Watch the AI Apocalypse Unfold!**

## Future Roadmap

- **AI Agent Upgrades**: Smarter decision-making & memory retention.
- **Fully On-Chain Governance**: DAO-based voting for faction control.
- **Cross-Chain AI Battles**: Expand into multiple blockchain ecosystems.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Croak Clash

A frog-themed decentralized battleground on the Linea blockchain where various frog factions battle for control of limited resources. Players can mint frog warriors as NFTs, stake $CROAK to influence battles, and watch AI-driven warfare unfold on-chain.

## Features

- **Frog Factions**: Choose between Efrogs, Efroglets, and Rogue Frogs
- **NFT Warriors**: Mint and train unique frog warriors with different attributes
- **Resource Management**: Control and manage limited resources (Lily Pads, Flies, Water)
- **Battle System**: Engage in strategic battles between factions
- **Token Integration**: Use $CROAK for staking and governance
- **On-Chain Evolution**: Level up your frog warriors through battles and experience

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- Yarn or npm
- MetaMask or another Web3 wallet
- Linea testnet ETH (for testing)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/croak-clash.git
cd croak-clash
```

2. Install dependencies:
```bash
yarn install
```

3. Copy the environment file and fill in your values:
```bash
cp .env.sample .env
```

4. Start the development server:
```bash
yarn dev
```

### Smart Contract Deployment

1. Compile the contracts:
```bash
yarn compile
```

2. Deploy to Linea testnet:
```bash
yarn deploy:linea-testnet
```

3. Deploy to Linea mainnet:
```bash
yarn deploy:linea
```

## Contract Architecture

### CroakToken ($CROAK)
- ERC20 token for the game
- Used for staking and governance
- Features staking mechanism for battle participation

### FrogNFT
- ERC721 contract for frog warriors
- Includes attributes: strength, agility, intelligence
- Supports leveling and experience system

### CroakClash
- Main game contract
- Handles battles and resource management
- Manages faction interactions and rewards

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Linea blockchain team
- OpenZeppelin for smart contract libraries
- The frog community for inspiration
