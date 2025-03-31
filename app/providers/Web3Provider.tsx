"use client";

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { WagmiConfig } from 'wagmi';
import { lineaTestnet } from 'wagmi/chains';

const chains = [lineaTestnet];
const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || '';

const wagmiConfig = defaultWagmiConfig({ chains, projectId });
createWeb3Modal({ wagmiConfig, projectId, chains });

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
} 