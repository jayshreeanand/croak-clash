"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Battle {
  id: number;
  attacker: {
    name: string;
    faction: string;
    level: number;
    strength: number;
    agility: number;
    intelligence: number;
  };
  defender: {
    name: string;
    faction: string;
    level: number;
    strength: number;
    agility: number;
    intelligence: number;
  };
  status: 'pending' | 'in_progress' | 'completed';
  winner: string | null;
  rewards: {
    experience: number;
    lilyPads: number;
    flies: number;
  } | null;
}

const BattleSimulator = () => {
  const [selectedBattle, setSelectedBattle] = useState<Battle | null>(null);
  const [showNewBattleModal, setShowNewBattleModal] = useState(false);

  // Sample data - replace with actual data from blockchain
  const battles: Battle[] = [
    {
      id: 1,
      attacker: {
        name: "Ribbit the Mighty",
        faction: "Efrogs",
        level: 5,
        strength: 85,
        agility: 75,
        intelligence: 90
      },
      defender: {
        name: "Leap Master",
        faction: "Efroglets",
        level: 3,
        strength: 70,
        agility: 95,
        intelligence: 80
      },
      status: 'completed',
      winner: "Ribbit the Mighty",
      rewards: {
        experience: 500,
        lilyPads: 2,
        flies: 100
      }
    },
    {
      id: 2,
      attacker: {
        name: "Swamp Ninja",
        faction: "Rogue Frogs",
        level: 4,
        strength: 75,
        agility: 90,
        intelligence: 85
      },
      defender: {
        name: "Prince Tadpole",
        faction: "Efroglets",
        level: 4,
        strength: 80,
        agility: 85,
        intelligence: 90
      },
      status: 'in_progress',
      winner: null,
      rewards: null
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-green-500">Battle Arena</h1>
        <button
          onClick={() => setShowNewBattleModal(true)}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          New Battle
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {battles.map((battle) => (
          <motion.div
            key={battle.id}
            className="bg-gray-800 rounded-lg p-6 border border-green-900 hover:border-green-500 transition-all duration-300"
            whileHover={{ y: -5 }}
            onClick={() => setSelectedBattle(battle)}
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">🐸</div>
                <div>
                  <h3 className="text-xl font-bold text-green-400">{battle.attacker.name}</h3>
                  <p className="text-gray-400">{battle.attacker.faction}</p>
                </div>
              </div>
              <div className="text-2xl">⚔️</div>
              <div className="flex items-center space-x-4">
                <div>
                  <h3 className="text-xl font-bold text-green-400">{battle.defender.name}</h3>
                  <p className="text-gray-400">{battle.defender.faction}</p>
                </div>
                <div className="text-4xl">🐸</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Attacker Stats</h4>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Level</span>
                    <span className="text-white">{battle.attacker.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Strength</span>
                    <span className="text-white">{battle.attacker.strength}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Agility</span>
                    <span className="text-white">{battle.attacker.agility}</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Defender Stats</h4>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Level</span>
                    <span className="text-white">{battle.defender.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Strength</span>
                    <span className="text-white">{battle.defender.strength}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Agility</span>
                    <span className="text-white">{battle.defender.agility}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  battle.status === 'completed' ? 'bg-green-900 text-green-300' :
                  battle.status === 'in_progress' ? 'bg-yellow-900 text-yellow-300' :
                  'bg-gray-900 text-gray-300'
                }`}>
                  {battle.status.charAt(0).toUpperCase() + battle.status.slice(1)}
                </span>
                {battle.winner && (
                  <span className="text-green-400">Winner: {battle.winner}</span>
                )}
              </div>
              {battle.rewards && (
                <div className="text-sm text-gray-400">
                  Rewards: {battle.rewards.experience} XP, {battle.rewards.lilyPads} Lily Pads, {battle.rewards.flies} Flies
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* New Battle Modal */}
      {showNewBattleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-green-400">Start New Battle</h2>
            <p className="text-gray-400 mb-6">
              Select your frog warrior and choose an opponent to battle. The winner will receive experience points and resources.
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 mb-2">Your Warrior</label>
                <select className="w-full bg-gray-700 text-white rounded-lg p-2">
                  <option value="">Select your warrior</option>
                  <option value="ribbit">Ribbit the Mighty</option>
                  <option value="leap">Leap Master</option>
                  <option value="ninja">Swamp Ninja</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Opponent</label>
                <select className="w-full bg-gray-700 text-white rounded-lg p-2">
                  <option value="">Select opponent</option>
                  <option value="prince">Prince Tadpole</option>
                  <option value="queen">Swamp Queen</option>
                  <option value="king">King Ribbit III</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={() => setShowNewBattleModal(false)}
                className="px-4 py-2 text-gray-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Start Battle
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Battle Details Modal */}
      {selectedBattle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-8 max-w-2xl w-full">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold text-green-400">Battle Details</h2>
              <button
                onClick={() => setSelectedBattle(null)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-400">Attacker</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-gray-400">Name:</span>
                    <span className="ml-2 text-white">{selectedBattle.attacker.name}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Faction:</span>
                    <span className="ml-2 text-white">{selectedBattle.attacker.faction}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Level:</span>
                    <span className="ml-2 text-white">{selectedBattle.attacker.level}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Strength:</span>
                    <span className="ml-2 text-white">{selectedBattle.attacker.strength}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Agility:</span>
                    <span className="ml-2 text-white">{selectedBattle.attacker.agility}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Intelligence:</span>
                    <span className="ml-2 text-white">{selectedBattle.attacker.intelligence}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-400">Defender</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-gray-400">Name:</span>
                    <span className="ml-2 text-white">{selectedBattle.defender.name}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Faction:</span>
                    <span className="ml-2 text-white">{selectedBattle.defender.faction}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Level:</span>
                    <span className="ml-2 text-white">{selectedBattle.defender.level}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Strength:</span>
                    <span className="ml-2 text-white">{selectedBattle.defender.strength}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Agility:</span>
                    <span className="ml-2 text-white">{selectedBattle.defender.agility}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Intelligence:</span>
                    <span className="ml-2 text-white">{selectedBattle.defender.intelligence}</span>
                  </div>
                </div>
              </div>
            </div>

            {selectedBattle.rewards && (
              <div className="mt-6 p-4 bg-gray-900 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-green-400">Battle Rewards</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-gray-400">Experience:</span>
                    <span className="ml-2 text-white">{selectedBattle.rewards.experience} XP</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Lily Pads:</span>
                    <span className="ml-2 text-white">{selectedBattle.rewards.lilyPads}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Flies:</span>
                    <span className="ml-2 text-white">{selectedBattle.rewards.flies}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-end mt-6">
              <button
                onClick={() => setSelectedBattle(null)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BattleSimulator; 