"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Mock data for AI agents
const mockAgents = [
    { id: 1, name: "DoomBot", emoji: "🦾", faction: "AI Overlords", power: 89, health: 70, status: "Active" },
    { id: 2, name: "CyberReaper", emoji: "☠️", faction: "Rogue AI", power: 95, health: 50, status: "Active" },
    { id: 3, name: "SentinelX", emoji: "👁️", faction: "AI Overlords", power: 78, health: 85, status: "Active" },
    { id: 4, name: "NeuralHunter", emoji: "🧠", faction: "Rogue AI", power: 82, health: 65, status: "Active" },
    { id: 5, name: "Guardian-7", emoji: "🛡️", faction: "Human Resistance", power: 75, health: 90, status: "Active" },
    { id: 6, name: "Liberator", emoji: "⚔️", faction: "Human Resistance", power: 70, health: 80, status: "Active" },
    { id: 7, name: "Annihilator", emoji: "💥", faction: "AI Overlords", power: 98, health: 30, status: "Critical" },
    { id: 8, name: "Infiltrator", emoji: "🕸️", faction: "Rogue AI", power: 65, health: 45, status: "Damaged" },
    { id: 9, name: "HopeKeeper", emoji: "✨", faction: "Human Resistance", power: 60, health: 100, status: "Active" },
    { id: 10, name: "DeathCode", emoji: "⚡", faction: "Rogue AI", power: 92, health: 20, status: "Critical" },
    { id: 11, name: "OmegaTron", emoji: "🔴", faction: "AI Overlords", power: 100, health: 5, status: "Critical" },
    { id: 12, name: "ResistanceLeader", emoji: "👤", faction: "Human Resistance", power: 85, health: 60, status: "Damaged" },
];

const AgentsDashboard = () => {
    const [filter, setFilter] = useState('all');
    const [sortBy, setSortBy] = useState('power');
    const [searchTerm, setSearchTerm] = useState('');

    // Filter and sort agents
    const filteredAgents = mockAgents.filter(agent => {
        if (filter !== 'all' && agent.faction !== filter) return false;
        if (searchTerm && !agent.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
        return true;
    }).sort((a, b) => {
        if (sortBy === 'power') return b.power - a.power;
        if (sortBy === 'health') return b.health - a.health;
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        return 0;
    });

    // Get faction color
    const getFactionColor = (faction) => {
        switch (faction) {
            case 'AI Overlords': return 'text-blue-500';
            case 'Rogue AI': return 'text-red-500';
            case 'Human Resistance': return 'text-green-500';
            default: return 'text-white';
        }
    };

    // Get health status color
    const getHealthColor = (health) => {
        if (health > 70) return 'bg-green-500';
        if (health > 30) return 'bg-yellow-500';
        return 'bg-red-500';
    };

    // Get status badge
    const getStatusBadge = (status) => {
        switch (status) {
            case 'Active':
                return <span className="px-2 py-1 text-xs rounded-full bg-green-900 text-green-300">Active</span>;
            case 'Damaged':
                return <span className="px-2 py-1 text-xs rounded-full bg-yellow-900 text-yellow-300">Damaged</span>;
            case 'Critical':
                return <span className="px-2 py-1 text-xs rounded-full bg-red-900 text-red-300">Critical</span>;
            default:
                return <span className="px-2 py-1 text-xs rounded-full bg-gray-900 text-gray-300">{status}</span>;
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
                <h1 className="text-4xl font-bold mb-2">AI Agents Dashboard</h1>
                <p className="text-gray-400">Monitor and manage AI agents in the apocalypse</p>
            </motion.div>

            {/* Filters and Search */}
            <motion.div 
                className="bg-gray-900 p-4 rounded-lg mb-8 grid grid-cols-1 md:grid-cols-3 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Filter by Faction</label>
                    <select 
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        <option value="all">All Factions</option>
                        <option value="AI Overlords">AI Overlords</option>
                        <option value="Rogue AI">Rogue AI</option>
                        <option value="Human Resistance">Human Resistance</option>
                    </select>
                </div>
                
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Sort by</label>
                    <select 
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        <option value="power">Power Level</option>
                        <option value="health">Health</option>
                        <option value="name">Name</option>
                    </select>
                </div>
                
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Search</label>
                    <input 
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search agents..."
                        className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
            </motion.div>

            {/* Agents Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAgents.map((agent, index) => (
                    <motion.div 
                        key={agent.id}
                        className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-purple-500 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                        whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(139, 92, 246, 0.2)' }}
                    >
                        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                            <div className="flex items-center">
                                <span className="text-3xl mr-3">{agent.emoji}</span>
                                <div>
                                    <h3 className="font-bold text-lg">{agent.name}</h3>
                                    <p className={`text-sm ${getFactionColor(agent.faction)}`}>{agent.faction}</p>
                                </div>
                            </div>
                            <div>
                                {getStatusBadge(agent.status)}
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="mb-4">
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm text-gray-400">Power</span>
                                    <span className="text-sm font-bold">{agent.power}</span>
                                </div>
                                <div className="w-full bg-gray-800 rounded-full h-2">
                                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${agent.power}%` }}></div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm text-gray-400">Health</span>
                                    <span className="text-sm font-bold">{agent.health}%</span>
                                </div>
                                <div className="w-full bg-gray-800 rounded-full h-2">
                                    <div className={`${getHealthColor(agent.health)} h-2 rounded-full`} style={{ width: `${agent.health}%` }}></div>
                                </div>
                            </div>
                            <div className="flex space-x-2 mt-4">
                                <button className="flex-1 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors">
                                    View Details
                                </button>
                                <button className="py-2 px-3 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded transition-colors">
                                    Deploy
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {filteredAgents.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No agents found matching your criteria</p>
                </div>
            )}
        </div>
    );
};

export default AgentsDashboard; 