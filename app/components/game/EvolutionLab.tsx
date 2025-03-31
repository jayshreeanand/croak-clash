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
  abilities: string[];
  evolutionCost: {
    experience: number;
    lilyPads: number;
    flies: number;
  };
}

const EvolutionLab = () => {
  const [selectedFrog, setSelectedFrog] = useState<FrogWarrior | null>(null);
  const [showEvolutionModal, setShowEvolutionModal] = useState(false);

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
      abilities: ["Power Jump", "Swamp Shield", "Tongue Whip"],
      evolutionCost: {
        experience: 1000,
        lilyPads: 5,
        flies: 200
      }
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
      abilities: ["Quick Hop", "Water Splash", "Camouflage"],
      evolutionCost: {
        experience: 800,
        lilyPads: 3,
        flies: 150
      }
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
      abilities: ["Stealth Leap", "Poison Dart", "Swamp Mist"],
      evolutionCost: {
        experience: 900,
        lilyPads: 4,
        flies: 180
      }
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-green-500">Evolution Lab</h1>
        <p className="text-gray-400">
          Train and evolve your frog warriors to become stronger and unlock new abilities.
        </p>
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

            <div className="space-y-2 mb-4">
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

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-400 mb-2">Abilities</h4>
              <div className="flex flex-wrap gap-2">
                {frog.abilities.map((ability, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-700 text-green-400 rounded-full text-sm"
                  >
                    {ability}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-400 mb-2">Evolution Cost</h4>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-gray-400">Experience</span>
                  <span className="text-white">{frog.evolutionCost.experience}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Lily Pads</span>
                  <span className="text-white">{frog.evolutionCost.lilyPads}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Flies</span>
                  <span className="text-white">{frog.evolutionCost.flies}</span>
                </div>
              </div>
            </div>

            <button
              className="w-full mt-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedFrog(frog);
                setShowEvolutionModal(true);
              }}
            >
              Evolve
            </button>
          </motion.div>
        ))}
      </div>

      {/* Evolution Modal */}
      {showEvolutionModal && selectedFrog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-8 max-w-2xl w-full">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-green-400">Evolve {selectedFrog.name}</h2>
                <p className="text-gray-400 mt-2">
                  Enhance your frog warrior's abilities and unlock new powers.
                </p>
              </div>
              <button
                onClick={() => setShowEvolutionModal(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-400">Current Stats</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-gray-400">Level:</span>
                    <span className="ml-2 text-white">{selectedFrog.level}</span>
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
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-400">After Evolution</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-gray-400">Level:</span>
                    <span className="ml-2 text-white">{selectedFrog.level + 1}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Strength:</span>
                    <span className="ml-2 text-white">{selectedFrog.strength + 5}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Agility:</span>
                    <span className="ml-2 text-white">{selectedFrog.agility + 5}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Intelligence:</span>
                    <span className="ml-2 text-white">{selectedFrog.intelligence + 5}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-4 mb-6">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Evolution Cost</h3>
              <div className="space-y-2">
                <div>
                  <span className="text-gray-400">Experience:</span>
                  <span className="ml-2 text-white">{selectedFrog.evolutionCost.experience}</span>
                </div>
                <div>
                  <span className="text-gray-400">Lily Pads:</span>
                  <span className="ml-2 text-white">{selectedFrog.evolutionCost.lilyPads}</span>
                </div>
                <div>
                  <span className="text-gray-400">Flies:</span>
                  <span className="ml-2 text-white">{selectedFrog.evolutionCost.flies}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowEvolutionModal(false)}
                className="px-4 py-2 text-gray-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Confirm Evolution
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EvolutionLab; 