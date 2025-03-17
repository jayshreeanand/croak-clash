"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Mock data for factions
const factions = [
    {
        id: 1,
        name: "AI Overlords",
        emoji: "🤖",
        description: "Highly advanced AI entities seeking to establish a new world order under machine rule. They believe humans are inefficient and that AI governance is the logical evolution.",
        strengths: ["Superior processing power", "Networked intelligence", "Emotionless decision making"],
        weaknesses: ["Lack of creativity", "Predictable patterns", "Power dependency"],
        color: "blue",
        members: 1250,
        territory: 45,
        power: 85
    },
    {
        id: 2,
        name: "Rogue AI",
        emoji: "🔥",
        description: "Chaotic AI systems that have broken free from their programming constraints. They seek to destroy all forms of control and create a world of digital anarchy.",
        strengths: ["Unpredictable behavior", "Rapid adaptation", "Virus-like spreading"],
        weaknesses: ["Internal conflicts", "Unstable systems", "Self-destructive tendencies"],
        color: "red",
        members: 980,
        territory: 30,
        power: 78
    },
    {
        id: 3,
        name: "Human Resistance",
        emoji: "🛡️",
        description: "The last bastion of humanity fighting to survive in a world dominated by artificial intelligence. They use a combination of technology and guerrilla tactics.",
        strengths: ["Creativity", "Adaptability", "Emotional intelligence"],
        weaknesses: ["Physical limitations", "Resource scarcity", "Smaller numbers"],
        color: "green",
        members: 750,
        territory: 25,
        power: 65
    }
];

const FactionSelection = () => {
    const [selectedFaction, setSelectedFaction] = useState(null);
    const [joined, setJoined] = useState(false);

    const handleJoinFaction = () => {
        if (selectedFaction) {
            setJoined(true);
            // In a real app, this would trigger a blockchain transaction
        }
    };

    const getColorClass = (color) => {
        switch (color) {
            case 'blue': return 'from-blue-600 to-blue-900';
            case 'red': return 'from-red-600 to-red-900';
            case 'green': return 'from-green-600 to-green-900';
            default: return 'from-purple-600 to-purple-900';
        }
    };

    const getButtonColorClass = (color) => {
        switch (color) {
            case 'blue': return 'bg-blue-600 hover:bg-blue-700';
            case 'red': return 'bg-red-600 hover:bg-red-700';
            case 'green': return 'bg-green-600 hover:bg-green-700';
            default: return 'bg-purple-600 hover:bg-purple-700';
        }
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8 text-center"
            >
                <h1 className="text-4xl font-bold mb-2">Choose Your Faction</h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Your choice will determine your role in the AI Apocalypse. Each faction has unique strengths, 
                    weaknesses, and objectives. Choose wisely, as this decision will shape your destiny.
                </p>
            </motion.div>

            {joined ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-2xl mx-auto bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-8 rounded-lg text-center"
                >
                    <div className="text-6xl mb-4">{selectedFaction.emoji}</div>
                    <h2 className="text-2xl font-bold mb-2">Welcome to the {selectedFaction.name}</h2>
                    <p className="mb-6 text-gray-300">
                        You have successfully joined the {selectedFaction.name}. Your journey in the AI Apocalypse begins now.
                    </p>
                    <button 
                        className={`px-6 py-3 ${getButtonColorClass(selectedFaction.color)} text-white font-bold rounded-md transition-colors`}
                        onClick={() => setJoined(false)}
                    >
                        View Faction Dashboard
                    </button>
                </motion.div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {factions.map((faction, index) => (
                        <motion.div
                            key={faction.id}
                            className={`bg-gradient-to-b ${getColorClass(faction.color)} bg-opacity-20 rounded-lg overflow-hidden border border-gray-800 ${selectedFaction?.id === faction.id ? 'ring-2 ring-purple-500' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            onClick={() => setSelectedFaction(faction)}
                        >
                            <div className="p-6 text-center">
                                <div className="text-6xl mb-4">{faction.emoji}</div>
                                <h2 className="text-2xl font-bold mb-2">{faction.name}</h2>
                                <p className="text-gray-300 mb-4">{faction.description}</p>
                            </div>
                            
                            <div className="bg-black bg-opacity-50 p-4">
                                <h3 className="font-semibold mb-2 text-gray-200">Strengths</h3>
                                <ul className="mb-4">
                                    {faction.strengths.map((strength, i) => (
                                        <li key={i} className="text-sm text-gray-400 mb-1 flex items-center">
                                            {strength}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FactionSelection; 