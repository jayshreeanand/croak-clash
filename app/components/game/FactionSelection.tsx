"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAccount } from 'wagmi';
import { useGameContract } from '../../hooks/useGameContract';

interface Faction {
  name: string;
  emoji: string;
  color: string;
  description: string;
  leader: string;
  members: number;
  resources: {
    lilyPads: number;
    flies: number;
    water: number;
  };
}

const FactionSelection = () => {
  const [selectedFaction, setSelectedFaction] = useState<Faction | null>(null);
  const [userFrogs, setUserFrogs] = useState<Array<{ id: number; name: string; faction: string }>>([]);
  const { address } = useAccount();
  const { joinFaction, getFrogAttributes, getFactionResources } = useGameContract();

  useEffect(() => {
    const loadUserFrogs = async () => {
      if (!address) return;
      // Load user's frogs from contract
      // This is a placeholder - implement actual loading logic
      setUserFrogs([
        { id: 1, name: "Ribbit the Mighty", faction: "Efrogs" },
        { id: 2, name: "Leap Master", faction: "Efroglets" }
      ]);
    };
    loadUserFrogs();
  }, [address]);

  const handleJoinFaction = async (factionName: string) => {
    if (!address || !userFrogs.length) return;
    
    const frogId = userFrogs[0].id; // Use first frog for now
    const success = await joinFaction(factionName, frogId);
    
    if (success) {
      setSelectedFaction(null);
      // Refresh faction resources
      const resources = await getFactionResources(factionName);
      if (resources) {
        // Update faction resources in UI
      }
    }
  };

  const factions: Faction[] = [
    {
      name: "Efrogs",
      emoji: "🐸",
      color: "#4CAF50",
      description: "Noble and disciplined frog warriors who value order and tradition. They believe in maintaining the natural balance of the swamp.",
      leader: "King Ribbit III",
      members: 150,
      resources: {
        lilyPads: 45,
        flies: 1200,
        water: 800
      }
    },
    {
      name: "Efroglets",
      emoji: "🐣",
      color: "#2196F3",
      description: "Young and energetic frogs who bring innovation and fresh perspectives. They seek to modernize the swamp's traditions.",
      leader: "Prince Tadpole",
      members: 120,
      resources: {
        lilyPads: 35,
        flies: 900,
        water: 600
      }
    },
    {
      name: "Rogue Frogs",
      emoji: "🦗",
      color: "#FF5722",
      description: "Independent and cunning frogs who follow their own path. They believe in personal freedom and resource sharing.",
      leader: "Swamp Queen",
      members: 100,
      resources: {
        lilyPads: 30,
        flies: 800,
        water: 500
      }
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-green-500 mb-4">Choose Your Faction</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Select a faction to join and begin your journey in the swamp. Each faction has unique strengths and resources.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {factions.map((faction, index) => (
          <motion.div
            key={faction.name}
            className="bg-gray-800 rounded-lg p-6 border border-green-900 hover:border-green-500 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            onClick={() => setSelectedFaction(faction)}
          >
            <div className="text-6xl mb-4">{faction.emoji}</div>
            <h2 className="text-2xl font-bold mb-2" style={{ color: faction.color }}>{faction.name}</h2>
            <p className="text-gray-400 mb-4">{faction.description}</p>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Leader</span>
                <span className="text-white">{faction.leader}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Members</span>
                <span className="text-white">{faction.members}</span>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold mb-2 text-green-400">Resources</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Lily Pads</span>
                  <span className="text-white">{faction.resources.lilyPads}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Flies</span>
                  <span className="text-white">{faction.resources.flies}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Water</span>
                  <span className="text-white">{faction.resources.water}</span>
                </div>
              </div>
            </div>

            <button
              className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handleJoinFaction(faction.name);
              }}
              disabled={!address || !userFrogs.length}
            >
              {!address ? "Connect Wallet" : !userFrogs.length ? "No Frogs Available" : "Join Faction"}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Faction Details Modal */}
      {selectedFaction && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-8 max-w-2xl w-full">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold mb-2" style={{ color: selectedFaction.color }}>
                  {selectedFaction.name}
                </h2>
                <p className="text-gray-400">{selectedFaction.description}</p>
              </div>
              <button
                onClick={() => setSelectedFaction(null)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-400">Leadership</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-gray-400">Leader:</span>
                    <span className="ml-2 text-white">{selectedFaction.leader}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Members:</span>
                    <span className="ml-2 text-white">{selectedFaction.members}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-400">Resources</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-gray-400">Lily Pads:</span>
                    <span className="ml-2 text-white">{selectedFaction.resources.lilyPads}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Flies:</span>
                    <span className="ml-2 text-white">{selectedFaction.resources.flies}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Water:</span>
                    <span className="ml-2 text-white">{selectedFaction.resources.water}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={() => setSelectedFaction(null)}
                className="px-4 py-2 text-gray-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Join {selectedFaction.name}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FactionSelection; 