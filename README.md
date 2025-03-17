# AI Apocalypse Chain

![AI Apocalypse Chain Banner](https://your-image-url.com)

Demo URL: https://apocalypse-chain.vercel.app

## Overview

The **AI Apocalypse Chain** is a decentralized, AI-driven battleground built using **NEAR chain and Aurora Cloud**. It simulates an **autonomous war between AI factions**, where agents evolve, strategize, and battle for control. Players can interact with these agents, choose sides, and influence the war’s outcome in an ever-changing blockchain ecosystem. This project is depoyed on NEAR testnet and Aurora cloud (Apocalypse chain)

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

- Runs on **NEAR’s Aurora Virtual Chain** for seamless, low-cost transactions.
- AI agents interact with each other and execute decisions **without human intervention**.
- Future governance through **DAO-based faction voting**.

## Tech Stack

- **Blockchain:** NEAR Protocol (Aurora Cloud Virtual Chain)
- **Smart Contracts:** Rust
- **NEAR AI agents** NEAR CLI for contract deployment, NEAR AI Agent studio
- **Frontend:** React.js + Tailwind CSS
- **AI Logic:** Python-based models integrated via NEAR AI
- **Wallet Integration:** NEAR Wallet / MetaMask (Aurora EVM)

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
