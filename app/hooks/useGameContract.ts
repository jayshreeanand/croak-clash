"use client";

import { useAccount, usePublicClient, useWalletClient } from 'wagmi';
import { useToast } from '../components/ui/use-toast';

// Contract ABIs
const CROAK_CLASH_ABI = [
  "function joinFaction(string memory factionName, uint256 frogId) external",
  "function startBattle(uint256 attackerId, uint256 defenderId) external",
  "function trainWarrior(uint256 frogId) external",
  "function getFactionResources(string memory factionName) external view returns (uint256 lilyPads, uint256 flies, uint256 water)",
  "function getPlayerStats(address player) external view returns (tuple(uint256 battlesWon, uint256 battlesLost, uint256 totalExperience, uint256 lastBattleTime))"
];

const CROAK_TOKEN_ABI = [
  "function balanceOf(address account) external view returns (uint256)",
  "function approve(address spender, uint256 amount) external returns (bool)",
  "function transfer(address to, uint256 amount) external returns (bool)"
];

const FROG_NFT_ABI = [
  "function ownerOf(uint256 tokenId) external view returns (address)",
  "function getFrogAttributes(uint256 tokenId) external view returns (tuple(string memory name, string memory faction, uint256 level, uint256 strength, uint256 agility, uint256 intelligence))",
  "function addExperience(uint256 tokenId, uint256 amount) external"
];

// Contract addresses (replace with actual addresses)
const CROAK_CLASH_ADDRESS = process.env.NEXT_PUBLIC_CROAK_CLASH_ADDRESS || '';
const CROAK_TOKEN_ADDRESS = process.env.NEXT_PUBLIC_CROAK_TOKEN_ADDRESS || '';
const FROG_NFT_ADDRESS = process.env.NEXT_PUBLIC_FROG_NFT_ADDRESS || '';

export function useGameContract() {
  const { address } = useAccount();
  const publicClient = usePublicClient();
  const { data: walletClient } = useWalletClient();
  const { toast } = useToast();

  const joinFaction = async (factionName: string, frogId: number) => {
    try {
      if (!walletClient || !publicClient) return false;
      const hash = await walletClient.writeContract({
        address: CROAK_CLASH_ADDRESS as `0x${string}`,
        abi: CROAK_CLASH_ABI,
        functionName: 'joinFaction',
        args: [factionName, BigInt(frogId)],
      });
      await publicClient.waitForTransactionReceipt({ hash });
      toast({
        title: "Success",
        description: "Successfully joined faction!",
      });
      return true;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to join faction. Please try again.",
        variant: "destructive",
      });
      return false;
    }
  };

  const startBattle = async (attackerId: number, defenderId: number) => {
    if (!walletClient || !publicClient) {
      console.error('Wallet or public client not available');
      return false;
    }

    try {
      const hash = await walletClient.writeContract({
        address: CROAK_CLASH_ADDRESS as `0x${string}`,
        abi: CROAK_CLASH_ABI,
        functionName: 'startBattle',
        args: [BigInt(attackerId), BigInt(defenderId)],
      });

      // Wait for transaction to be mined
      const receipt = await publicClient.waitForTransactionReceipt({ hash });
      
      if (receipt.status === 'success') {
        console.log('Battle started successfully:', hash);
        return true;
      } else {
        console.error('Battle failed:', receipt);
        return false;
      }
    } catch (error) {
      console.error('Error starting battle:', error);
      return false;
    }
  };

  const trainWarrior = async (frogId: number) => {
    try {
      if (!walletClient || !publicClient) return false;
      const hash = await walletClient.writeContract({
        address: CROAK_CLASH_ADDRESS as `0x${string}`,
        abi: CROAK_CLASH_ABI,
        functionName: 'trainWarrior',
        args: [BigInt(frogId)],
      });
      await publicClient.waitForTransactionReceipt({ hash });
      toast({
        title: "Success",
        description: "Warrior trained successfully!",
      });
      return true;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to train warrior. Please try again.",
        variant: "destructive",
      });
      return false;
    }
  };

  const getFrogAttributes = async (frogId: number) => {
    try {
      if (!publicClient) return null;
      const result = await publicClient.readContract({
        address: FROG_NFT_ADDRESS as `0x${string}`,
        abi: FROG_NFT_ABI,
        functionName: 'getFrogAttributes',
        args: [BigInt(frogId)],
      });
      return result;
    } catch (error) {
      console.error("Failed to get frog attributes:", error);
      return null;
    }
  };

  const getFactionResources = async (factionName: string) => {
    try {
      if (!publicClient) return null;
      const result = await publicClient.readContract({
        address: CROAK_CLASH_ADDRESS as `0x${string}`,
        abi: CROAK_CLASH_ABI,
        functionName: 'getFactionResources',
        args: [factionName],
      });
      return result;
    } catch (error) {
      console.error("Failed to get faction resources:", error);
      return null;
    }
  };

  return {
    joinFaction,
    startBattle,
    trainWarrior,
    getFrogAttributes,
    getFactionResources,
  };
} 