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
                
                round++;
            }, 1000);
        }, 2000);
        
        // Safety cleanup
        setTimeout(() => {
            clearInterval(battleInterval);
            if (isBattling) {
                addLog(`⚠️ Battle timeout - no clear winner`, 'system');
                setBattleResult({ winner: null, isDraw: true });
                setIsBattling(false);
            }
        }, 30000);
    };

    const getFactionColor = (faction) => {
        switch (faction) {
            case 'AI Overlords': return 'text-blue-500';
            case 'Rogue AI': return 'text-red-500';
            case 'Human Resistance': return 'text-green-500';
            default: return 'text-white';
        }
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
            case 'result': return 'text-yellow-400 font-bold';
            case 'system': return 'text-purple-400';
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
                <div className="bg-gray-900 rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-4">Select Combatants</h2>
                    
                    <div className="mb-6">
                        <h3 className="text-sm uppercase text-gray-500 mb-2">Attacker</h3>
                        <div className="grid grid-cols-1 gap-2">
                            {agents.map(agent => (
                                <motion.button
                                    key={`attacker-${agent.id}`}
                                    className={`p-3 rounded-lg flex items-center ${
                                        attacker?.id === agent.id 
                                            ? 'bg-purple-900 border border-purple-500' 
                                            : 'bg-gray-800 border border-gray-700 hover:bg-gray-700'
                                    } ${defender?.id === agent.id ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    onClick={() => defender?.id !== agent.id && setAttacker(agent)}
                                    disabled={defender?.id === agent.id}
                                    whileHover={defender?.id !== agent.id ? { scale: 1.02 } : {}}
                                    whileTap={defender?.id !== agent.id ? { scale: 0.98 } : {}}
                                >
                                    <span className="text-2xl mr-3">{agent.emoji}</span>
                                    <div className="flex-grow text-left">
                                        <div className="font-medium">{agent.name}</div>
                                        <div className="text-xs text-gray-400">Power: {agent.power} | Health: {agent.health}%</div>
                                    </div>
                                    <div className={`text-xs ${getFactionColor(agent.faction)}`}>{agent.faction}</div>
                                </motion.button>
                            ))}
                        </div>
                    </div>
                    
                    <div className="mb-6">
                        <h3 className="text-sm uppercase text-gray-500 mb-2">Defender</h3>
                        <div className="grid grid-cols-1 gap-2">
                            {agents.map(agent => (
                                <motion.button
                                    key={`defender-${agent.id}`}
                                    className={`p-3 rounded-lg flex items-center ${
                                        defender?.id === agent.id 
                                            ? 'bg-purple-900 border border-purple-500' 
                                            : 'bg-gray-800 border border-gray-700 hover:bg-gray-700'
                                    } ${attacker?.id === agent.id ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    onClick={() => attacker?.id !== agent.id && setDefender(agent)}
                                    disabled={attacker?.id === agent.id}
                                    whileHover={attacker?.id !== agent.id ? { scale: 1.02 } : {}}
                                    whileTap={attacker?.id !== agent.id ? { scale: 0.98 } : {}}
                                >
                                    <span className="text-2xl mr-3">{agent.emoji}</span>
                                    <div className="flex-grow text-left">
                                        <div className="font-medium">{agent.name}</div>
                                        <div className="text-xs text-gray-400">Power: {agent.power} | Health: {agent.health}%</div>
                                    </div>
                                    <div className={`text-xs ${getFactionColor(agent.faction)}`}>{agent.faction}</div>
                                </motion.button>
                            ))}
                        </div>
                    </div>
                    
                    <div className="flex space-x-3">
                        <motion.button
                            className={`flex-1 py-3 px-4 rounded-lg font-medium ${
                                !attacker || !defender || isBattling
                                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                    : 'bg-red-600 hover:bg-red-700 text-white'
                            }`}
                            onClick={startBattle}
                            disabled={!attacker || !defender || isBattling}
                            whileHover={!(!attacker || !defender || isBattling) ? { scale: 1.05 } : {}}
                            whileTap={!(!attacker || !defender || isBattling) ? { scale: 0.95 } : {}}
                        >
                            {isBattling ? 'Battle in Progress...' : 'Start Battle'}
                        </motion.button>
                        
                        <motion.button
                            className="py-3 px-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium"
                            onClick={resetBattle}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Reset
                        </motion.button>
                    </div>
                </div>
                
                {/* Battle Arena */}
                <div className="lg:col-span-2">
                    <div className="bg-gray-900 rounded-lg p-6 h-full flex flex-col">
                        <h2 className="text-xl font-bold mb-4">Battle Arena</h2>
                        
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
                                            <div className="text-xs text-gray-400 mb-1">$WNEAR {agents.find(a => a.id === attacker.id)?.health || attacker.health}%</div>
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
                                            <div className="text-xs text-gray-400 mb-1">$WNEAR {agents.find(a => a.id === defender.id)?.health || defender.health}%</div>
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