"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Mock data for factions
const mockFactions = [
    { id: 1, name: "Efrogs", score: 2500, victories: 15, resources: 1200, members: 45 },
    { id: 2, name: "Efroglets", score: 2200, victories: 12, resources: 1000, members: 38 },
    { id: 3, name: "Rogue Frogs", score: 2100, victories: 11, resources: 950, members: 42 }
];

// Mock data for top players
const mockPlayers = [
    { id: 1, name: "SwampMaster", faction: "Efrogs", score: 850, victories: 8, level: 12 },
    { id: 2, name: "LilyHopper", faction: "Efroglets", score: 720, victories: 6, level: 10 },
    { id: 3, name: "TadpoleTitan", faction: "Rogue Frogs", score: 680, victories: 5, level: 9 },
    { id: 4, name: "RiverRider", faction: "Efrogs", score: 650, victories: 5, level: 8 },
    { id: 5, name: "MarshMaster", faction: "Efroglets", score: 600, victories: 4, level: 7 }
];

// Mock data for battle log
const mockBattleLogs = [
    {
        id: 1,
        timestamp: "2025-03-15 14:30",
        event: "SwampMaster's Elite Jumper defeated LilyHopper's Swift Scout",
        type: "battle",
        faction: "Efrogs"
    },
    {
        id: 2,
        timestamp: "2025-03-15 14:15",
        event: "Rogue Frogs captured the Golden Lily Pad in Sector 7",
        type: "resource",
        faction: "Rogue Frogs"
    },
    {
        id: 3,
        timestamp: "2025-03-15 14:00",
        event: "TadpoleTitan evolved their warrior to Level 9",
        type: "evolution",
        faction: "Rogue Frogs"
    }
];

const Leaderboard = () => {
    const [activeTab, setActiveTab] = useState('factions');

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-2 text-green-400">Swamp Leaderboard</h1>
                <p className="text-gray-400">Track the progress of factions and players in the Great Frog War</p>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
                <button
                    className={`px-6 py-2 rounded-l-lg ${activeTab === 'factions' ? 'bg-green-600 text-white' : 'bg-gray-800 text-gray-400'}`}
                    onClick={() => setActiveTab('factions')}
                >
                    Factions
                </button>
                <button
                    className={`px-6 py-2 ${activeTab === 'players' ? 'bg-green-600 text-white' : 'bg-gray-800 text-gray-400'}`}
                    onClick={() => setActiveTab('players')}
                >
                    Players
                </button>
                <button
                    className={`px-6 py-2 rounded-r-lg ${activeTab === 'log' ? 'bg-green-600 text-white' : 'bg-gray-800 text-gray-400'}`}
                    onClick={() => setActiveTab('log')}
                >
                    Battle Log
                </button>
            </div>

            {/* Factions Leaderboard */}
            {activeTab === 'factions' && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="bg-gray-800 rounded-lg overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-gray-900">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Rank</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Faction</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Score</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Victories</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Resources</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Members</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-700">
                                {mockFactions.map((faction, index) => (
                                    <tr key={faction.id} className="hover:bg-gray-700">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{index + 1}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{faction.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400">{faction.score}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{faction.victories}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{faction.resources}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{faction.members}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            )}

            {/* Players Leaderboard */}
            {activeTab === 'players' && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="bg-gray-800 rounded-lg overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-gray-900">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Rank</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Player</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Faction</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Score</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Victories</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Level</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-700">
                                {mockPlayers.map((player, index) => (
                                    <tr key={player.id} className="hover:bg-gray-700">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{index + 1}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{player.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{player.faction}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400">{player.score}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{player.victories}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{player.level}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            )}

            {/* Battle Log */}
            {activeTab === 'log' && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-800 rounded-lg p-6"
                >
                    <h3 className="text-xl font-bold mb-4 text-green-400">Battle Log</h3>
                    {mockBattleLogs.length > 0 ? (
                        <div className="space-y-4">
                            {mockBattleLogs.map(log => (
                                <div key={log.id} className="flex items-start space-x-4 p-4 bg-gray-700 rounded-lg">
                                    <div className="flex-shrink-0">
                                        <span className="text-gray-400 text-sm">{log.timestamp}</span>
                                    </div>
                                    <div>
                                        <p className="text-white">{log.event}</p>
                                        <span className="text-sm text-green-400">{log.faction}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-gray-500 italic text-sm">No battle logs found</div>
                    )}
                </motion.div>
            )}
        </div>
    );
};

export default Leaderboard;