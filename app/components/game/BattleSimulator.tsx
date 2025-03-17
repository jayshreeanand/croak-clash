"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Mock data for AI agents
const mockAgents = [
    { id: 1, name: "DoomBot", emoji: "🦾", faction: "AI Overlords", power: 89, health: 70, status: "Active" },
    { id: 2, name: "CyberReaper", emoji: "☠️", faction: "Rogue AI", power: 95, health: 50, status: "Active" },
    { id: 3, name: "SentinelX", emoji: "👁️", faction: "AI Overlords", power: 78, health: 85, status: "Active" },
    { id: 4, name: "NeuralHunter", emoji: "🧠", faction: "Rogue AI", power: 82, health: 65, status: "Active" },
    { id: 5, name: "Guardian-7", emoji: "🛡️", faction: "Human Resistance", power: 75, health: 90, status: "Active" },
    { id: 6, name: "Liberator", emoji: "⚔️", faction: "Human Resistance", power: 70, health: 80, status: "Active" },
];

const BattleSimulator = () => {
    const [attacker, setAttacker] = useState(null);
    const [defender, setDefender] = useState(null);
    const [battleLogs, setBattleLogs] = useState([]);
    const [isBattling, setIsBattling] = useState(false);
    const [battleResult, setBattleResult] = useState(null);
    const [agents, setAgents] = useState(mockAgents);

    const resetBattle = () => {
        setAttacker(null);
        setDefender(null);
        setBattleLogs([]);
        setBattleResult(null);
        setIsBattling(false);
        // Reset agents health
        setAgents(mockAgents.map(agent => ({ ...agent })));
    };

    const startBattle = () => {
        if (!attacker || !defender) return;
        
        setIsBattling(true);
        setBattleLogs([]);
        setBattleResult(null);
        
        // Clone agents for battle simulation
        const attackerAgent = { ...attacker };
        const defenderAgent = { ...defender };
        
        // Start battle simulation
        simulateBattle(attackerAgent, defenderAgent);
    };

    const simulateBattle = (attackerAgent, defenderAgent) => {
        let currentLogs = [];
        let battleInterval;
        let round = 1;
        
        const addLog = (message, type = 'normal') => {
            currentLogs = [...currentLogs, { message, type, timestamp: new Date().toISOString() }];
            setBattleLogs([...currentLogs]);
        };
        
        addLog(`⚡ Battle initiated: ${attackerAgent.emoji} ${attackerAgent.name} vs ${defenderAgent.emoji} ${defenderAgent.name}`, 'system');
        
        battleInterval = setInterval(() => {
            // Attacker's turn
            if (attackerAgent.health > 0 && defenderAgent.health > 0) {
                const damage = Math.floor(Math.random() * (attackerAgent.power / 5)) + 5;
                defenderAgent.health = Math.max(0, defenderAgent.health - damage);
                
                addLog(`${attackerAgent.emoji} ${attackerAgent.name} attacked ${defenderAgent.emoji} ${defenderAgent.name}! (-${damage} HP)`, 'attack');
                
                // Update defender in state
                setAgents(prev => prev.map(a => a.id === defenderAgent.id ? { ...a, health: defenderAgent.health } : a));
            }
            
            // Small delay for defender's turn
            setTimeout(() => {
                // Defender's turn (if still alive)
                if (defenderAgent.health > 0 && attackerAgent.health > 0) {
                    const damage = Math.floor(Math.random() * (defenderAgent.power / 6)) + 3;
                    attackerAgent.health = Math.max(0, attackerAgent.health - damage);
                    
                    addLog(`${defenderAgent.emoji} ${defenderAgent.name} counterattacks! (-${damage} HP)`, 'defend');
                    
                    // Update attacker in state
                    setAgents(prev => prev.map(a => a.id === attackerAgent.id ? { ...a, health: attackerAgent.health } : a));
                }
                
                // Check if battle is over
                if (attackerAgent.health <= 0 || defenderAgent.health <= 0) {
                    clearInterval(battleInterval);
                    
                    if (attackerAgent.health <= 0 && defenderAgent.health <= 0) {
                        addLog(`💥 Both agents were destroyed in battle!`, 'result');
                        setBattleResult({ winner: null, isDraw: true });
                    } else if (attackerAgent.health <= 0) {
                        addLog(`🏆 ${defenderAgent.emoji} ${defenderAgent.name} wins!`, 'result');
                        setBattleResult({ winner: defenderAgent, isDraw: false });
                    } else {
                        addLog(`🏆 ${attackerAgent.emoji} ${attackerAgent.name} wins!`, 'result');
                        setBattleResult({ winner: attackerAgent, isDraw: false });
                    }
                    
                    setIsBattling(false);
                }
                
                // Max rounds safety
                if (round >= 10) {
                    clearInterval(battleInterval);
                    addLog(`⏱️ Battle timeout - no decisive victory`, 'system');
                    setBattleResult({ winner: null, isDraw: true });
                    setIsBattling(false);
                }
                
                round++;
            }, 1000);
        }, 2000);
    };

    const getHealthColor = (health) => {
        if (health > 70) return 'bg-green-500';
        if (health > 30) return 'bg-yellow-500';
        return 'bg-red-500';
    };

    const getLogColor = (type) => {
        switch (type) {
            case 'attack': return 'text-red-400';
            case 'defend': return 'text-blue-400';
            case 'result': return 'text-yellow-300 font-bold';
            case 'system': return 'text-purple-400 italic';
            default: return 'text-gray-300';
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
                <h1 className="text-4xl font-bold mb-2">Battle Simulator</h1>
                <p className="text-gray-400">Pit AI agents against each other in simulated combat</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Agent Selection */}
                <div className="lg:col-span-1">
                    <div className="bg-gray-900 rounded-lg p-6 mb-6">
                        <h2 className="text-xl font-bold mb-4">Select Attacker</h2>
                        <div className="grid grid-cols-1 gap-3">
                            {agents.map(agent => (
                                <motion.button
                                    key={`attacker-${agent.id}`}
                                    className={`p-3 rounded-lg border ${attacker?.id === agent.id 
                                        ? 'border-red-500 bg-gray-800' 
                                        : 'border-gray-700 bg-gray-800/50 hover:bg-gray-800'} 
                                        transition-all flex items-center`}
                                    onClick={() => setAttacker(agent)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isBattling}
                                >
                                    <span className="text-2xl mr-3">{agent.emoji}</span>
                                    <div className="text-left">
                                        <div className="font-semibold">{agent.name}</div>
                                        <div className="text-xs text-gray-400">{agent.faction}</div>
                                    </div>
                                    <div className="ml-auto">
                                        <div className="text-xs text-gray-400 mb-1">HP: {agent.health}%</div>
                                        <div className="w-16 bg-gray-700 rounded-full h-1.5">
                                            <div className={`${getHealthColor(agent.health)} h-1.5 rounded-full`} style={{ width: `${agent.health}%` }}></div>
                                        </div>
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-900 rounded-lg p-6">
                        <h2 className="text-xl font-bold mb-4">Select Defender</h2>
                        <div className="grid grid-cols-1 gap-3">
                            {agents.filter(a => a.id !== attacker?.id).map(agent => (
                                <motion.button
                                    key={`defender-${agent.id}`}
                                    className={`p-3 rounded-lg border ${defender?.id === agent.id 
                                        ? 'border-blue-500 bg-gray-800' 
                                        : 'border-gray-700 bg-gray-800/50 hover:bg-gray-800'} 
                                        transition-all flex items-center`}
                                    onClick={() => setDefender(agent)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isBattling || attacker?.id === agent.id}
                                >
                                    <span className="text-2xl mr-3">{agent.emoji}</span>
                                    <div className="text-left">
                                        <div className="font-semibold">{agent.name}</div>
                                        <div className="text-xs text-gray-400">{agent.faction}</div>
                                    </div>
                                    <div className="ml-auto">
                                        <div className="text-xs text-gray-400 mb-1">HP: {agent.health}%</div>
                                        <div className="w-16 bg-gray-700 rounded-full h-1.5">
                                            <div className={`${getHealthColor(agent.health)} h-1.5 rounded-full`} style={{ width: `${agent.health}%` }}></div>
                                        </div>
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Battle Arena */}
                <div className="lg:col-span-2">
                    <div className="bg-gray-900 rounded-lg p-6 h-full flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold">Battle Arena</h2>
                            <div className="flex space-x-2">
                                <button 
                                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    onClick={startBattle}
                                    disabled={!attacker || !defender || isBattling}
                                >
                                    {isBattling ? 'Battling...' : 'Start Battle'}
                                </button>
                                <button 
                                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors"
                                    onClick={resetBattle}
                                    disabled={isBattling}
                                >
                                    Reset
                                </button>
                            </div>
                        </div>

                        {/* Battle Visualization */}
                        {(attacker || defender) && (
                            <div className="mb-6 flex justify-center items-center">
                                <div className="flex items-center space-x-4">
                                    {attacker && (
                                        <motion.div 
                                            className="text-center"
                                            animate={isBattling ? { x: [0, 10, 0] } : {}}
                                            transition={{ repeat: Infinity, duration: 1 }}
                                        >
                                            <div className="text-5xl mb-2">{attacker.emoji}</div>
                                            <div className="font-bold">{attacker.name}</div>
                                            <div className="text-xs text-gray-400 mb-1">HP: {agents.find(a => a.id === attacker.id)?.health || attacker.health}%</div>
                                            <div className="w-24 bg-gray-700 rounded-full h-2 mx-auto">
                                                <div 
                                                    className={`${getHealthColor(agents.find(a => a.id === attacker.id)?.health || attacker.health)} h-2 rounded-full`} 
                                                    style={{ width: `${agents.find(a => a.id === attacker.id)?.health || attacker.health}%` }}
                                                ></div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {attacker && defender && (
                                        <div className="text-4xl text-red-500">⚔️</div>
                                    )}

                                    {defender && (
                                        <motion.div 
                                            className="text-center"
                                            animate={isBattling ? { x: [0, -10, 0] } : {}}
                                            transition={{ repeat: Infinity, duration: 1, delay: 0.5 }}
                                        >
                                            <div className="text-5xl mb-2">{defender.emoji}</div>
                                            <div className="font-bold">{defender.name}</div>
                                            <div className="text-xs text-gray-400 mb-1">HP: {agents.find(a => a.id === defender.id)?.health || defender.health}%</div>
                                            <div className="w-24 bg-gray-700 rounded-full h-2 mx-auto">
                                                <div 
                                                    className={`${getHealthColor(agents.find(a => a.id === defender.id)?.health || defender.health)} h-2 rounded-full`} 
                                                    style={{ width: `${agents.find(a => a.id === defender.id)?.health || defender.health}%` }}
                                                ></div>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Battle Result */}
                        {battleResult && (
                            <motion.div 
                                className="mb-6 text-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                {battleResult.isDraw ? (
                                    <div className="text-xl font-bold text-yellow-400">Battle ended in a draw!</div>
                                ) : (
                                    <div className="text-xl font-bold text-green-400">
                                        {battleResult.winner.emoji} {battleResult.winner.name} is victorious!
                                    </div>
                                )}
                            </motion.div>
                        )}

                        {/* Battle Log */}
                        <div className="flex-grow overflow-hidden flex flex-col">
                            <h3 className="text-lg font-semibold mb-2">Battle Log</h3>
                            <div className="flex-grow bg-gray-950 rounded-lg p-4 overflow-y-auto h-64 font-mono text-sm">
                                {battleLogs.length === 0 ? (
                                    <div className="text-gray-500 italic">Select agents and start battle to see the log...</div>
                                ) : (
                                    <div className="space-y-2">
                                        {battleLogs.map((log, index) => (
                                            <motion.div 
                                                key={index} 
                                                className={`${getLogColor(log.type)}`}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {log.message}
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BattleSimulator; 