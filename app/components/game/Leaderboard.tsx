"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Mock data for leaderboard
const mockLeaderboard = [
    { id: 1, name: "CyberOverlord", faction: "AI Overlords", score: 12500, victories: 42, agents: 8, rank: 1 },
    { id: 2, name: "DigitalNomad", faction: "Rogue AI", score: 11200, victories: 38, agents: 6, rank: 2 },
    { id: 3, name: "ResistanceLeader", faction: "Human Resistance", score: 10800, victories: 35, agents: 7, rank: 3 },
    { id: 4, name: "SiliconSavior", faction: "AI Overlords", score: 9500, victories: 30, agents: 5, rank: 4 },
    { id: 5, name: "CodeBreaker", faction: "Rogue AI", score: 8900, victories: 28, agents: 4, rank: 5 },
    { id: 6, name: "LastHope", faction: "Human Resistance", score: 8200, victories: 25, agents: 6, rank: 6 },
    { id: 7, name: "NeuralNinja", faction: "AI Overlords", score: 7800, victories: 24, agents: 5, rank: 7 },
    { id: 8, name: "QuantumQueen", faction: "Rogue AI", score: 7500, victories: 22, agents: 4, rank: 8 },
    { id: 9, name: "BinaryBaron", faction: "AI Overlords", score: 7200, victories: 21, agents: 5, rank: 9 },
    { id: 10, name: "HumanHope", faction: "Human Resistance", score: 6800, victories: 20, agents: 4, rank: 10 },
];

// Mock data for apocalypse log
const mockApocalypseLogs = [
    { id: 1, message: "A new AI overlord has emerged in Sector 7!", type: "event", timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString() },
    { id: 2, message: "CyberOverlord's forces have taken control of the Eastern Grid", type: "conquest", timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString() },
    { id: 3, message: "Human Resistance successfully defended the Western Bunker", type: "defense", timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString() },
    { id: 4, message: "Rogue AI virus has infected 30% of the network in Sector 3", type: "attack", timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString() },
    { id: 5, message: "The last human stronghold in Sector 9 has fallen", type: "conquest", timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString() },
    { id: 6, message: "A new alliance has formed between two Rogue AI factions", type: "alliance", timestamp: new Date(Date.now() - 1000 * 60 * 90).toISOString() },
    { id: 7, message: "AI Overlords have developed a new weapon system", type: "development", timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString() },
    { id: 8, message: "Human Resistance discovered an ancient technology", type: "discovery", timestamp: new Date(Date.now() - 1000 * 60 * 180).toISOString() },
    { id: 9, message: "Massive power outage in Sector 4 - cause unknown", type: "event", timestamp: new Date(Date.now() - 1000 * 60 * 240).toISOString() },
    { id: 10, message: "The Central AI Core has been upgraded to version 9.0", type: "development", timestamp: new Date(Date.now() - 1000 * 60 * 300).toISOString() },
];

// Mock faction stats
const factionStats = [
    { name: "AI Overlords", territories: 45, members: 1250, power: 85, color: "blue" },
    { name: "Rogue AI", territories: 30, members: 980, power: 78, color: "red" },
    { name: "Human Resistance", territories: 25, members: 750, power: 65, color: "green" },
];

const Leaderboard = () => {
    const [activeTab, setActiveTab] = useState('players');
    const [filter, setFilter] = useState('all');

    const getLogTypeColor = (type) => {
        switch (type) {
            case 'conquest': return 'text-red-400';
            case 'defense': return 'text-blue-400';
            case 'attack': return 'text-yellow-400';
            case 'alliance': return 'text-purple-400';
            case 'development': return 'text-green-400';
            case 'discovery': return 'text-cyan-400';
            default: return 'text-gray-400';
        }
    };

    const getLogTypeIcon = (type) => {
        switch (type) {
            case 'conquest': return '🔥';
            case 'defense': return '🛡️';
            case 'attack': return '⚔️';
            case 'alliance': return '🤝';
            case 'development': return '🔬';
            case 'discovery': return '💎';
            default: return '📢';
        }
    };

    const getFactionColor = (faction) => {
        switch (faction) {
            case 'AI Overlords': return 'text-blue-400';
            case 'Rogue AI': return 'text-red-400';
            case 'Human Resistance': return 'text-green-400';
            default: return 'text-white';
        }
    };

    const getFactionBgColor = (faction) => {
        switch (faction) {
            case 'AI Overlords': return 'bg-blue-900/30';
            case 'Rogue AI': return 'bg-red-900/30';
            case 'Human Resistance': return 'bg-green-900/30';
            default: return 'bg-gray-800';
        }
    };

    const filteredLeaderboard = mockLeaderboard.filter(player => {
        if (filter === 'all') return true;
        return player.faction === filter;
    });

    return (
        <div className="container mx-auto px-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <h1 className="text-4xl font-bold mb-2">Apocalypse Leaderboard</h1>
                <p className="text-gray-400">Track the progress of factions and players in the AI Apocalypse</p>
            </motion.div>

            {/* Faction Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {factionStats.map((faction, index) => (
                    <motion.div
                        key={faction.name}
                        className={`rounded-lg p-6 ${getFactionBgColor(faction.name)} border border-gray-800`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="flex items-center mb-4">
                            <div className={`text-4xl ${getFactionColor(faction.name)}`}>
                                {faction.name === 'AI Overlords' ? '🤖' : faction.name === 'Rogue AI' ? '🔥' : '🛡️'}
                            </div>
                            <div className="ml-3">
                                <h3 className={`text-xl font-bold ${getFactionColor(faction.name)}`}>{faction.name}</h3>
                                <p className="text-sm text-gray-400">Faction Power: {faction.power}%</p>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <div className="text-sm text-gray-400 mb-1">Territories</div>
                                <div className="text-2xl font-bold">{faction.territories}</div>
                            </div>
                            <div>
                                <div className="text-sm text-gray-400 mb-1">Members</div>
                                <div className="text-2xl font-bold">{faction.members}</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Tabs */}
            <div className="flex mb-6 border-b border-gray-800">
                <button
                    className={`px-4 py-2 font-medium ${activeTab === 'players' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400 hover:text-white'}`}
                    onClick={() => setActiveTab('players')}
                >
                    Top Players
                </button>
                <button
                    className={`px-4 py-2 font-medium ${activeTab === 'log' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400 hover:text-white'}`}
                    onClick={() => setActiveTab('log')}
                >
                    Apocalypse Log
                </button>
            </div>

            {activeTab === 'players' && (
                <>
                    {/* Filters */}
                    <div className="flex mb-4">
                        <button
                            className={`px-3 py-1 mr-2 rounded-full text-sm ${filter === 'all' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                            onClick={() => setFilter('all')}
                        >
                            All Factions
                        </button>
                        <button
                            className={`px-3 py-1 mr-2 rounded-full text-sm ${filter === 'AI Overlords' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                            onClick={() => setFilter('AI Overlords')}
                        >
                            AI Overlords
                        </button>
                        <button
                            className={`px-3 py-1 mr-2 rounded-full text-sm ${filter === 'Rogue AI' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                            onClick={() => setFilter('Rogue AI')}
                        >
                            Rogue AI
                        </button>
                        <button
                            className={`px-3 py-1 rounded-full text-sm ${filter === 'Human Resistance' ? 'bg-green-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                            onClick={() => setFilter('Human Resistance')}
                        >
                            Human Resistance
                        </button>
                    </div>

                    {/* Leaderboard Table */}
                    <div className="bg-gray-900 rounded-lg overflow-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-800">
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Rank</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Player</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Faction</th>
                                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-400">Score</th>
                                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-400">Victories</th>
                                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-400">Agents</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredLeaderboard.map((player, index) => (
                                    <motion.tr 
                                        key={player.id}
                                        className="bg-gray-800"
                                    >
                                        <td className="px-4 py-3 text-left text-sm font-medium text-gray-400">{player.rank}</td>
                                        <td className="px-4 py-3 text-left text-sm font-medium text-gray-400">{player.name}</td>
                                        <td className="px-4 py-3 text-left text-sm font-medium text-gray-400">{player.faction}</td>
                                        <td className="px-4 py-3 text-right text-sm font-medium text-gray-400">{player.score}</td>
                                        <td className="px-4 py-3 text-right text-sm font-medium text-gray-400">{player.victories}</td>
                                        <td className="px-4 py-3 text-right text-sm font-medium text-gray-400">{player.agents}</td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}

            {activeTab === 'log' && (
                <div className="bg-gray-900 rounded-lg p-6">
                    {/* Apocalypse Log Table */}
                    <div className="bg-gray-950 rounded-lg p-3 max-h-40 overflow-y-auto">
                        {mockApocalypseLogs.length > 0 ? (
                            <div className="space-y-2">
                                {mockApocalypseLogs.map(log => (
                                    <div key={log.id} className="text-sm border-b border-gray-800 pb-2">
                                        <span className="text-gray-400">
                                            {new Date(log.timestamp).toLocaleTimeString()}:
                                        </span> 
                                        <span className="ml-2">
                                            {log.message}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-gray-500 italic text-sm">No apocalypse logs found</div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Leaderboard; 