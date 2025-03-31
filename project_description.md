# Croak Clash 🐸 - Battle for Supremacy on the Linea Blockchain

## Overview

**Croak Clash** is a blockchain-based battle game where **frog warriors compete for supremacy in the digital swamp**, built on the **Linea blockchain**. Utilizing **ERC-20 and ERC-721 standards**, the game introduces a dynamic play-to-earn ecosystem where players mint, train, and evolve their unique frog warriors to engage in strategic battles, claim territories, and participate in tournaments.

---

## Key Features

### Gameplay Mechanics

1. **Frog Warriors**:

   - Players mint and own unique **Frog Warriors (ERC-721 NFTs)** with various attributes—Strength, Agility, Intelligence, Experience, and Level.
   - Each Frog Warrior belongs to one of three factions, providing unique playstyles:
     - **Efrogs**: Balanced warriors with well-rounded stats.
     - **Efroglets**: Agile fighters focusing on speed and evasion.
     - **Rogue Frogs**: High-power warriors with unpredictable attacks.

2. **Battle System**:

   - Turn-based combat with strategic resource management.
   - Special abilities unique to each frog type and faction.
   - Dynamic combat where players can leverage strengths, cover weaknesses, and optimize resource usage.

3. **Evolution Lab**:

   - Upgrade frogs through evolution to unlock special abilities.
   - Each evolution grants unique visual traits and enhanced combat capabilities.
   - Special mutations available for advanced customization.

4. **Resource Management**:

   - Collect and manage in-game resources like **lily pads, flies, and water**.
   - Resources are required for upgrading, evolving, and training frog warriors.

5. **Competitive Ecosystem**:
   - **Leaderboard System**: Tracks top players and factions.
   - **Battle Logs**: Real-time battle history and achievements.
   - **Resource Territories**: Control strategic locations within the swamp for exclusive rewards.
   - **Tournaments**: Scheduled events with exclusive rewards and recognition.

---

## Blockchain Integration

- **Croak Token (ERC-20)**:

  - Native token used for in-game transactions, trading, and staking.
  - Incentivizes active participation in battles and tournaments.

- **FrogNFT (ERC-721)**:

  - Each frog warrior is represented by a unique, non-fungible token.
  - Metadata stored on **IPFS** for decentralized and secure storage.

- **Smart Contracts**:

  - Deployed on the **Linea blockchain** for fast, scalable, and cost-effective transactions.
  - Contracts include **CroakToken.sol**, **FrogNFT.sol**, and **CroakClash.sol**.
  - Ensures transparent, immutable game logic and secure ownership of assets.

- **MetaMask Integration**:
  - Seamless wallet connection for transactions and asset management.
  - Supports both **Linea Testnet** and **Mainnet**.

---

## Architecture

### Smart Contracts

- **CroakToken.sol** - Handles the in-game economy using **ERC-20 tokens**.
- **FrogNFT.sol** - Manages unique frog warriors as **ERC-721 NFTs**.
- **CroakClash.sol** - Core game logic, handling battles, rewards, and leaderboards.

### Frontend Stack

- **Next.js** - Fast, efficient, and scalable framework for the web interface.
- **TailwindCSS** - Clean and responsive styling for a seamless user experience.
- **Wagmi & Ethers.js** - Simplified interactions with blockchain contracts.
- **Framer Motion** - Enhanced animations and transitions for a polished UI.

### Backend Services

- **Linea Blockchain** - Layer 2 solution for low-cost, high-speed transactions.
- **IPFS** - Decentralized storage for NFT metadata and game assets.
- **The Graph** - Efficient data querying for seamless user experience.

---

## Game Mechanics in Detail

1. **Frog Warrior Attributes**:

   - **Strength**: Determines attack power.
   - **Agility**: Affects dodge chance and speed.
   - **Intelligence**: Influences special ability effectiveness.
   - **Experience**: Gained through battles and training.
   - **Level**: Increases with experience, unlocking new abilities.

2. **Battle System**:

   - Strategic turn-based combat influenced by attributes and abilities.
   - Players utilize special abilities, resources, and faction bonuses to gain an edge.

3. **Evolution System**:
   - Upgrades tied to performance and resource management.
   - Visual changes and stat improvements upon evolution.
   - Encourages players to continuously improve their warriors.
