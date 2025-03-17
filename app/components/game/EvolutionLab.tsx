"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Mock data for AI agents
const mockAgents = [
    { id: 1, name: "DoomBot", emoji: "🦾", faction: "AI Overlords", power: 89, health: 70, defense: 65, speed: 75, intelligence: 80, evolution: 2 },
    { id: 2, name: "CyberReaper", emoji: "☠️", faction: "Rogue AI", power: 95, health: 50, defense: 40, speed: 90, intelligence: 85, evolution: 3 },
    { id: 3, name: "SentinelX", emoji: "👁️", faction: "AI Overlords", power: 78, health: 85, defense: 70, speed: 60, intelligence: 75, evolution: 1 },
    { id: 4, name: "Guardian-7", emoji: "🛡️", faction: "Human Resistance", power: 75, health: 90, defense: 85, speed: 50, intelligence: 65, evolution: 2 },
];

// Upgrade options
const upgradeOptions = [
    { id: 1, name: "Attack Boost", description: "Increase attack power by 10 points", stat: "power", value: 10, cost: 100, icon: "⚔️" },
    { id: 2, name: "Defense Matrix", description: "Increase defense by 15 points", stat: "defense", value: 15, cost: 120, icon: "🛡️" },
    { id: 3, name: "Health Regeneration", description: "Restore 20% health", stat: "health", value: 20, cost: 80, icon: "❤️" },
    { id: 4, name: "Speed Enhancement", description: "Increase speed by 12 points", stat: "speed", value: 12, cost: 90, icon: "⚡" },
    { id: 5, name: "Neural Upgrade", description: "Increase intelligence by 8 points", stat: "intelligence", value: 8, cost: 150, icon: "🧠" },
    { id: 6, name: "Evolution Catalyst", description: "Advance to the next evolution stage", stat: "evolution", value: 1, cost: 500, icon: "🔆" },
];

const EvolutionLab = () => {
    const [selectedAgent, setSelectedAgent] = useState(null);
    const [agents, setAgents] = useState(mockAgents);
    const [credits, setCredits] = useState(1000);
    const [upgradeHistory, setUpgradeHistory] = useState([]);
    const [showUpgradeAnimation, setShowUpgradeAnimation] = useState(false);
    const [upgradedStat, setUpgradedStat] = useState(null);

    const handleSelectAgent = (agent) => {
        setSelectedAgent(agent);
    };

    const handleUpgrade = (upgrade) => {
        if (credits < upgrade.cost) return;
        
        // Apply upgrade
        const updatedAgents = agents.map(agent => {
            if (agent.id === selectedAgent.id) {
                const updatedAgent = { ...agent };
                
                if (upgrade.stat === 'health' && upgrade.value <= 100) {
                    // For health, it's a percentage restoration
                    updatedAgent.health = Math.min(100, agent.health + upgrade.value);
                } else {
                    // For other stats, it's a direct increase
                    updatedAgent[upgrade.stat] += upgrade.value;
                }
                
                return updatedAgent;
            }
            return agent;
        });
        
        // Show upgrade animation
        setUpgradedStat(upgrade.stat);
        setShowUpgradeAnimation(true);
        setTimeout(() => setShowUpgradeAnimation(false), 2000);
        
        // Update state
        setAgents(updatedAgents);
        setSelectedAgent(updatedAgents.find(a => a.id === selectedAgent.id));
        setCredits(credits - upgrade.cost);
        
        // Add to history
        setUpgradeHistory([
            {
                id: Date.now(),
                agentName: selectedAgent.name,
                upgradeName: upgrade.name,
                stat: upgrade.stat,
                value: upgrade.value,
                timestamp: new Date().toISOString()
            },
            ...upgradeHistory
        ]);
    };

    const getStatColor = (stat) => {
        switch (stat) {
            case 'power': return 'text-red-400';
            case 'defense': return 'text-blue-400';
            case 'health': return 'text-green-400';
            case 'speed': return 'text-yellow-400';
            case 'intelligence': return 'text-purple-400';
            case 'evolution': return 'text-pink-400';
            default: return 'text-white';
        }
    };

    const getStatIcon = (stat) => {
        switch (stat) {
            case 'power': return '⚔️';
            case 'defense': return '🛡️';
            case 'health': return '❤️';
            case 'speed': return '⚡';
            case 'intelligence': return '🧠';
            case 'evolution': return '🔆';
            default: return '📊';
        }
    };

    const getEvolutionStage = (level) => {
        switch (level) {
            case 1: return 'Basic';
            case 2: return 'Advanced';
            case 3: return 'Superior';
            case 4: return 'Ultimate';
            default: return 'Prototype';
        }
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <h1 className="text-4xl font-bold mb-2">AI Evolution Lab</h1>
                <p className="text-gray-400">Upgrade and evolve your AI agents to increase their capabilities</p>
            </motion.div>

            <div className="flex items-center justify-between mb-8">
                <div className="text-lg">
                    <span className="text-gray-400">Available Credits:</span> 
                    <span className="ml-2 font-bold text-yellow-400">{credits}</span>
                </div>
                <button 
                    className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-md transition-colors"
                    onClick={() => setCredits(credits + 200)}
                >
                    + Get 200 Credits
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Agent Selection */}
                <div>
                    <div className="bg-gray-900 rounded-lg p-6">
                        <h2 className="text-xl font-bold mb-4">Select Agent</h2>
                        
                        <div className="grid grid-cols-1 gap-3">
                            {agents.map(agent => (
                                <motion.button
                                    key={agent.id}
                                    className={`p-3 rounded-lg border ${selectedAgent?.id === agent.id 
                                        ? 'border-purple-500 bg-gray-800' 
                                        : 'border-gray-700 bg-gray-800/50 hover:bg-gray-800'} 
                                        transition-all flex items-center`}
                                    onClick={() => handleSelectAgent(agent)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="text-2xl mr-3">{agent.emoji}</span>
                                    <div className="text-left">
                                        <div className="font-semibold">{agent.name}</div>
                                        <div className="text-xs text-gray-400">{agent.faction}</div>
                                    </div>
                                    <div className="ml-auto text-right">
                                        <div className="text-xs text-purple-400">Evolution: {getEvolutionStage(agent.evolution)}</div>
                                        <div className="text-xs text-gray-400">Power: {agent.power}</div>
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Evolution Interface */}
                <div className="lg:col-span-2">
                    {selectedAgent ? (
                        <div className="bg-gray-900 rounded-lg p-6">
                            <div className="flex flex-col md:flex-row md:items-center mb-6">
                                <div className="flex items-center mb-4 md:mb-0">
                                    <motion.div 
                                        className="text-6xl mr-4"
                                        animate={showUpgradeAnimation ? { 
                                            scale: [1, 1.2, 1],
                                            rotate: [0, 5, -5, 0]
                                        } : {}}
                                        transition={{ duration: 1 }}
                                    >
                                        {selectedAgent.emoji}
                                    </motion.div>
                                    <div>
                                        <h2 className="text-2xl font-bold">{selectedAgent.name}</h2>
                                        <p className="text-gray-400">{selectedAgent.faction}</p>
                                        <p className="text-purple-400 text-sm">Evolution: {getEvolutionStage(selectedAgent.evolution)}</p>
                                    </div>
                                </div>
                                
                                <div className="md:ml-auto grid grid-cols-3 gap-3">
                                    <div className="text-center">
                                        <div className={`text-lg font-bold ${getStatColor('power')}`}>
                                            {showUpgradeAnimation && upgradedStat === 'power' ? (
                                                <motion.span
                                                    animate={{ scale: [1, 1.5, 1] }}
                                                    transition={{ duration: 1 }}
                                                >
                                                    {selectedAgent.power}
                                                </motion.span>
                                            ) : (
                                                selectedAgent.power
                                            )}
                                        </div>
                                        <div className="text-xs text-gray-400">Power</div>
                                    </div>
                                    <div className="text-center">
                                        <div className={`text-lg font-bold ${getStatColor('defense')}`}>
                                            {showUpgradeAnimation && upgradedStat === 'defense' ? (
                                                <motion.span
                                                    animate={{ scale: [1, 1.5, 1] }}
                                                    transition={{ duration: 1 }}
                                                >
                                                    {selectedAgent.defense}
                                                </motion.span>
                                            ) : (
                                                selectedAgent.defense
                                            )}
                                        </div>
                                        <div className="text-xs text-gray-400">Defense</div>
                                    </div>
                                    <div className="text-center">
                                        <div className={`text-lg font-bold ${getStatColor('health')}`}>
                                            {showUpgradeAnimation && upgradedStat === 'health' ? (
                                                <motion.span
                                                    animate={{ scale: [1, 1.5, 1] }}
                                                    transition={{ duration: 1 }}
                                                >
                                                    {selectedAgent.health}%
                                                </motion.span>
                                            ) : (
                                                `${selectedAgent.health}%`
                                            )}
                                        </div>
                                        <div className="text-xs text-gray-400">Health</div>
                                    </div>
                                    <div className="text-center">
                                        <div className={`text-lg font-bold ${getStatColor('speed')}`}>
                                            {showUpgradeAnimation && upgradedStat === 'speed' ? (
                                                <motion.span
                                                    animate={{ scale: [1, 1.5, 1] }}
                                                    transition={{ duration: 1 }}
                                                >
                                                    {selectedAgent.speed}
                                                </motion.span>
                                            ) : (
                                                selectedAgent.speed
                                            )}
                                        </div>
                                        <div className="text-xs text-gray-400">Speed</div>
                                    </div>
                                    <div className="text-center">
                                        <div className={`text-lg font-bold ${getStatColor('intelligence')}`}>
                                            {showUpgradeAnimation && upgradedStat === 'intelligence' ? (
                                                <motion.span
                                                    animate={{ scale: [1, 1.5, 1] }}
                                                    transition={{ duration: 1 }}
                                                >
                                                    {selectedAgent.intelligence}
                                                </motion.span>
                                            ) : (
                                                selectedAgent.intelligence
                                            )}
                                        </div>
                                        <div className="text-xs text-gray-400">Intelligence</div>
                                    </div>
                                    <div className="text-center">
                                        <div className={`text-lg font-bold ${getStatColor('evolution')}`}>
                                            {showUpgradeAnimation && upgradedStat === 'evolution' ? (
                                                <motion.span
                                                    animate={{ scale: [1, 1.5, 1] }}
                                                    transition={{ duration: 1 }}
                                                >
                                                    {selectedAgent.evolution}
                                                </motion.span>
                                            ) : (
                                                selectedAgent.evolution
                                            )}
                                        </div>
                                        <div className="text-xs text-gray-400">Evolution</div>
                                    </div>
                                </div>
                            </div>
                            
                            <h3 className="text-lg font-bold mb-3">Available Upgrades</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                                {upgradeOptions.map(upgrade => (
                                    <motion.button
                                        key={upgrade.id}
                                        className={`p-4 rounded-lg border border-gray-700 bg-gray-800/50 hover:bg-gray-800 transition-all flex items-start ${credits < upgrade.cost ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        onClick={() => credits >= upgrade.cost && handleUpgrade(upgrade)}
                                        whileHover={credits >= upgrade.cost ? { scale: 1.02 } : {}}
                                        whileTap={credits >= upgrade.cost ? { scale: 0.98 } : {}}
                                        disabled={credits < upgrade.cost}
                                    >
                                        <span className="text-2xl mr-3 mt-1">{upgrade.icon}</span>
                                        <div className="flex-grow">
                                            <div className="font-semibold">{upgrade.name}</div>
                                            <div className="text-xs text-gray-400 mb-1">{upgrade.description}</div>
                                            <div className="text-xs text-yellow-400">Cost: {upgrade.cost} credits</div>
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                            
                            <h3 className="text-lg font-bold mb-3">Upgrade History</h3>
                            <div className="bg-gray-950 rounded-lg p-3 max-h-40 overflow-y-auto">
                                {upgradeHistory.length > 0 ? (
                                    <div className="space-y-2">
                                        {upgradeHistory.map(log => (
                                            <div key={log.id} className="text-sm border-b border-gray-800 pb-2">
                                                <span className="text-gray-400">
                                                    {new Date(log.timestamp).toLocaleTimeString()}:
                                                </span> 
                                                <span className="ml-2">
                                                    Applied <span className={getStatColor(log.stat)}>{log.upgradeName}</span> to {log.agentName}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-gray-500 italic text-sm">No upgrades applied yet</div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="bg-gray-900 rounded-lg p-6 h-full flex items-center justify-center">
                            <div className="text-center text-gray-500">
                                <div className="text-5xl mb-4">🧪</div>
                                <p className="text-xl">Select an agent to begin evolution</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EvolutionLab; 