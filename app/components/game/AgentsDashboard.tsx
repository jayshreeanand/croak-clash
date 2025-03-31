"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FrogWarrior {
  id: number;
  name: string;
  faction: string;
  level: number;
  strength: number;
  agility: number;
  intelligence: number;
  experience: number;
  image: string;
}

const AgentsDashboard = () => {
  const [selectedFrog, setSelectedFrog] = useState<FrogWarrior | null>(null);
  const [showMintModal, setShowMintModal] = useState(false);

  // Sample data - replace with actual data from blockchain
  const frogWarriors: FrogWarrior[] = [
    {
      id: 1,
      name: "Ribbit the Mighty",
      faction: "Efrogs",
      level: 5,
      strength: 85,
      agility: 75,
      intelligence: 90,
      experience: 2500,
      image: "/images/frog1.png"
    },
    {
      id: 2,
      name: "Leap Master",
      faction: "Efroglets",
      level: 3,
      strength: 70,
      agility: 95,
      intelligence: 80,
      experience: 1500,
      image: "/images/frog2.png"
    },
    {
      id: 3,
      name: "Swamp Ninja",
      faction: "Rogue Frogs",
      level: 4,
      strength: 75,
      agility: 90,
      intelligence: 85,
      experience: 2000,
      image: "/images/frog3.png"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-green-500">Frog Warriors</h1>
        <button
          onClick={() => setShowMintModal(true)}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Mint New Warrior
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {frogWarriors.map((frog) => (
          <motion.div
            key={frog.id}
            className="bg-gray-800 rounded-lg p-6 border border-green-900 hover:border-green-500 transition-all duration-300"
            whileHover={{ y: -5 }}
            onClick={() => setSelectedFrog(frog)}
          >
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-gray-700 rounded-full mr-4 flex items-center justify-center text-4xl">
                🐸
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-400">{frog.name}</h3>
                <p className="text-gray-400">{frog.faction}</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Level</span>
                <span className="text-green-400">{frog.level}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Experience</span>
                <span className="text-green-400">{frog.experience}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Strength</span>
                <span className="text-green-400">{frog.strength}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Agility</span>
                <span className="text-green-400">{frog.agility}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Intelligence</span>
                <span className="text-green-400">{frog.intelligence}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mint Modal */}
      {showMintModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-green-400">Mint New Frog Warrior</h2>
            <p className="text-gray-400 mb-6">
              Create a new frog warrior to join your faction. Each warrior has unique attributes that will help in battle.
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 mb-2">Faction</label>
                <select className="w-full bg-gray-700 text-white rounded-lg p-2">
                  <option value="efrogs">Efrogs</option>
                  <option value="efroglets">Efroglets</option>
                  <option value="rogue">Rogue Frogs</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 text-white rounded-lg p-2"
                  placeholder="Enter warrior name"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={() => setShowMintModal(false)}
                className="px-4 py-2 text-gray-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Mint Warrior
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Warrior Details Modal */}
      {selectedFrog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold text-green-400">{selectedFrog.name}</h2>
              <button
                onClick={() => setSelectedFrog(null)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <span className="text-gray-400">Faction:</span>
                <span className="ml-2 text-white">{selectedFrog.faction}</span>
              </div>
              <div>
                <span className="text-gray-400">Level:</span>
                <span className="ml-2 text-white">{selectedFrog.level}</span>
              </div>
              <div>
                <span className="text-gray-400">Experience:</span>
                <span className="ml-2 text-white">{selectedFrog.experience}</span>
              </div>
              <div>
                <span className="text-gray-400">Strength:</span>
                <span className="ml-2 text-white">{selectedFrog.strength}</span>
              </div>
              <div>
                <span className="text-gray-400">Agility:</span>
                <span className="ml-2 text-white">{selectedFrog.agility}</span>
              </div>
              <div>
                <span className="text-gray-400">Intelligence:</span>
                <span className="ml-2 text-white">{selectedFrog.intelligence}</span>
              </div>
            </div>
            <div className="flex justify-end space-x-4 mt-6">
              <button
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Train Warrior
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgentsDashboard; 