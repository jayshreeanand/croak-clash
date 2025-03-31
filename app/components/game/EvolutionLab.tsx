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
    lilyPads: number;
    flies: number;
  };
  trainingProgress: {
    strength: number;
    agility: number;
    intelligence: number;
  };
}

const EvolutionLab = () => {
  const [selectedFrog, setSelectedFrog] = useState<FrogWarrior | null>(null);
  const [showEvolutionModal, setShowEvolutionModal] = useState(false);
  const [showTrainingModal, setShowTrainingModal] = useState(false);
  const [frogs, setFrogs] = useState<FrogWarrior[]>([
    {
      id: 1,
      name: "Ribbit the Mighty",
      faction: "Efrogs",
      level: 5,
      strength: 85,
      agility: 75,
      intelligence: 90,
      experience: 2500,
      abilities: ["Water Splash", "Leap Attack"],
      evolutionCost: {
        lilyPads: 3,
        flies: 150
      },
      trainingProgress: {
        strength: 0,
        agility: 0,
        intelligence: 0
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
      experience: 1200,
      abilities: ["Quick Jump", "Tongue Whip"],
      evolutionCost: {
        lilyPads: 2,
        flies: 100
      },
      trainingProgress: {
        strength: 0,
        agility: 0,
        intelligence: 0
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
      experience: 1800,
      abilities: ["Stealth Strike", "Poison Dart"],
      evolutionCost: {
        lilyPads: 2,
        flies: 120
      },
      trainingProgress: {
        strength: 0,
        agility: 0,
        intelligence: 0
      }
    }
  ]);

  const handleEvolution = async () => {
    if (!selectedFrog) return;

    try {
      // Simulate evolution by increasing stats
      const evolvedFrog: FrogWarrior = {
        ...selectedFrog,
        level: selectedFrog.level + 1,
        strength: Math.min(100, selectedFrog.strength + Math.floor(Math.random() * 10) + 5),
        agility: Math.min(100, selectedFrog.agility + Math.floor(Math.random() * 10) + 5),
        intelligence: Math.min(100, selectedFrog.intelligence + Math.floor(Math.random() * 10) + 5),
        experience: selectedFrog.experience + 500,
        evolutionCost: {
          lilyPads: selectedFrog.evolutionCost.lilyPads + 1,
          flies: selectedFrog.evolutionCost.flies + 50
        }
      };

      // Update the frog in the list
      setFrogs(prevFrogs => 
        prevFrogs.map(frog => 
          frog.id === selectedFrog.id ? evolvedFrog : frog
        )
      );

      // Close modal and reset selection
      setShowEvolutionModal(false);
      setSelectedFrog(null);

      // Show success message
      alert('Evolution successful! Your frog has grown stronger!');
    } catch (error) {
      console.error('Evolution failed:', error);
      alert('Evolution failed. Please try again.');
    }
  };

  const handleTraining = async (stat: 'strength' | 'agility' | 'intelligence') => {
    if (!selectedFrog) return;

    try {
      // Simulate training by increasing the selected stat
      const trainingIncrease = Math.floor(Math.random() * 5) + 2;
      const updatedFrog: FrogWarrior = {
        ...selectedFrog,
        [stat]: Math.min(100, selectedFrog[stat] + trainingIncrease),
        trainingProgress: {
          ...selectedFrog.trainingProgress,
          [stat]: selectedFrog.trainingProgress[stat] + trainingIncrease
        },
        experience: selectedFrog.experience + 100
      };

      // Update the frog in the list
      setFrogs(prevFrogs => 
        prevFrogs.map(frog => 
          frog.id === selectedFrog.id ? updatedFrog : frog
        )
      );

      // Show success message
      alert(`${stat.charAt(0).toUpperCase() + stat.slice(1)} training successful! +${trainingIncrease} points!`);
    } catch (error) {
      console.error('Training failed:', error);
      alert('Training failed. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-500 mb-8">Evolution Lab</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {frogs.map((frog) => (
          <motion.div
            key={frog.id}
            className="bg-gray-800 rounded-lg p-6 border border-green-900 hover:border-green-500 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-4xl">🐸</div>
              <div>
                <h3 className="text-xl font-bold text-green-400">{frog.name}</h3>
                <p className="text-gray-400">{frog.faction}</p>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Level</span>
                <span className="text-white">{frog.level}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Strength</span>
                <span className="text-white">{frog.strength}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Agility</span>
                <span className="text-white">{frog.agility}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Intelligence</span>
                <span className="text-white">{frog.intelligence}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Experience</span>
                <span className="text-white">{frog.experience} XP</span>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-400 mb-2">Abilities</h4>
              <div className="flex flex-wrap gap-2">
                {frog.abilities.map((ability, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-green-900 text-green-300 rounded-full text-xs"
                  >
                    {ability}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-sm text-gray-400 mb-4">
              Evolution Cost: {frog.evolutionCost.lilyPads} Lily Pads, {frog.evolutionCost.flies} Flies
            </div>

            <div className="flex space-x-2">
              <button
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                onClick={() => {
                  setSelectedFrog(frog);
                  setShowTrainingModal(true);
                }}
              >
                Train
              </button>
              <button
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                onClick={() => {
                  setSelectedFrog(frog);
                  setShowEvolutionModal(true);
                }}
              >
                Evolve
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Training Modal */}
      {showTrainingModal && selectedFrog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-8 max-w-2xl w-full">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-green-400">Train {selectedFrog.name}</h2>
                <p className="text-gray-400 mt-2">
                  Choose which attribute to train.
                </p>
              </div>
              <button
                onClick={() => setShowTrainingModal(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-900 rounded-lg p-4 text-center">
                <h3 className="text-lg font-semibold text-green-400 mb-2">Strength</h3>
                <p className="text-2xl font-bold text-white mb-2">{selectedFrog.strength}</p>
                <p className="text-sm text-gray-400 mb-4">+2-7 points</p>
                <button
                  className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  onClick={() => handleTraining('strength')}
                >
                  Train Strength
                </button>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 text-center">
                <h3 className="text-lg font-semibold text-green-400 mb-2">Agility</h3>
                <p className="text-2xl font-bold text-white mb-2">{selectedFrog.agility}</p>
                <p className="text-sm text-gray-400 mb-4">+2-7 points</p>
                <button
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  onClick={() => handleTraining('agility')}
                >
                  Train Agility
                </button>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 text-center">
                <h3 className="text-lg font-semibold text-green-400 mb-2">Intelligence</h3>
                <p className="text-2xl font-bold text-white mb-2">{selectedFrog.intelligence}</p>
                <p className="text-sm text-gray-400 mb-4">+2-7 points</p>
                <button
                  className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                  onClick={() => handleTraining('intelligence')}
                >
                  Train Intelligence
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setShowTrainingModal(false)}
                className="px-4 py-2 text-gray-400 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Evolution Modal */}
      {showEvolutionModal && selectedFrog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-8 max-w-2xl w-full">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-green-400">Evolve {selectedFrog.name}</h2>
                <p className="text-gray-400 mt-2">
                  Enhance your frog's abilities through evolution.
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
                <h3 className="text-xl font-semibold mb-4 text-green-400">Potential Upgrades</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-gray-400">Level:</span>
                    <span className="ml-2 text-white">{selectedFrog.level + 1}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Strength:</span>
                    <span className="ml-2 text-white">+5-15</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Agility:</span>
                    <span className="ml-2 text-white">+5-15</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Intelligence:</span>
                    <span className="ml-2 text-white">+5-15</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-4 mb-6">
              <h3 className="text-xl font-semibold mb-2 text-green-400">Evolution Cost</h3>
              <div className="space-y-2">
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
                onClick={handleEvolution}
              >
                Evolve
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EvolutionLab; 