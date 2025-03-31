"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Import game components
const AgentsDashboard = dynamic(() => import('../components/game/AgentsDashboard'), { ssr: false });
const FactionSelection = dynamic(() => import('../components/game/FactionSelection'), { ssr: false });
const BattleSimulator = dynamic(() => import('../components/game/BattleSimulator'), { ssr: false });
const EvolutionLab = dynamic(() => import('../components/game/EvolutionLab'), { ssr: false });
const Leaderboard = dynamic(() => import('../components/game/Leaderboard'), { ssr: false });

const GamePage = () => {
    const [activeSection, setActiveSection] = useState('overview');

    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
            {/* Header with Logo */}
            <header className="relative py-6 bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <nav className="flex space-x-6">
                            <button 
                                onClick={() => setActiveSection('overview')}
                                className={`px-4 py-2 rounded-lg transition-colors ${activeSection === 'overview' ? 'bg-green-600 text-white' : 'text-gray-400 hover:text-white'}`}
                            >
                                Overview
                            </button>
                            <button 
                                onClick={() => setActiveSection('agents')}
                                className={`px-4 py-2 rounded-lg transition-colors ${activeSection === 'agents' ? 'bg-green-600 text-white' : 'text-gray-400 hover:text-white'}`}
                            >
                                Frog Warriors
                            </button>
                            <button 
                                onClick={() => setActiveSection('factions')}
                                className={`px-4 py-2 rounded-lg transition-colors ${activeSection === 'factions' ? 'bg-green-600 text-white' : 'text-gray-400 hover:text-white'}`}
                            >
                                Factions
                            </button>
                            <button 
                                onClick={() => setActiveSection('battle')}
                                className={`px-4 py-2 rounded-lg transition-colors ${activeSection === 'battle' ? 'bg-green-600 text-white' : 'text-gray-400 hover:text-white'}`}
                            >
                                Battle
                            </button>
                            <button 
                                onClick={() => setActiveSection('evolution')}
                                className={`px-4 py-2 rounded-lg transition-colors ${activeSection === 'evolution' ? 'bg-green-600 text-white' : 'text-gray-400 hover:text-white'}`}
                            >
                                Evolution
                            </button>
                            <button 
                                onClick={() => setActiveSection('leaderboard')}
                                className={`px-4 py-2 rounded-lg transition-colors ${activeSection === 'leaderboard' ? 'bg-green-600 text-white' : 'text-gray-400 hover:text-white'}`}
                            >
                                Leaderboard
                            </button>
                        </nav>
                        <Link href="/">
                            <button className="px-4 py-2 text-gray-400 hover:text-white">
                                Exit Swamp
                            </button>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                {activeSection === 'overview' && (
                    <section className="relative">
                        <div className="absolute inset-0 bg-[url('/images/swamp-bg.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
                        
                        <div className="relative z-10">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-center mb-12"
                            >
                                <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
                                    The Great Frog War Has Begun
                                </h1>
                                <p className="text-2xl text-gray-300">Will Your Faction Reign Supreme?</p>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                            >
                                <div className="bg-gray-800/80 p-6 rounded-lg">
                                    <h2 className="text-xl font-bold mb-4 text-green-400">Battle System</h2>
                                    <p className="text-gray-300">
                                        Engage in strategic battles with other frog warriors. Use your resources wisely and coordinate with your faction to emerge victorious.
                                    </p>
                                </div>

                                <div className="bg-gray-800/80 p-6 rounded-lg">
                                    <h2 className="text-xl font-bold mb-4 text-green-400">Resource Management</h2>
                                    <p className="text-gray-300">
                                        Control vital resources like lily pads, flies, and water. Build your economy and strengthen your faction's position in the swamp.
                                    </p>
                                </div>

                                <div className="bg-gray-800/80 p-6 rounded-lg">
                                    <h2 className="text-xl font-bold mb-4 text-green-400">Evolution Lab</h2>
                                    <p className="text-gray-300">
                                        Train and evolve your frog warriors. Unlock new abilities and increase their power through the evolution system.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="text-center"
                            >
                                <button 
                                    onClick={() => setActiveSection('agents')}
                                    className="bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300"
                                >
                                    Enter the Swamp
                                </button>
                            </motion.div>
                        </div>
                    </section>
                )}

                {activeSection === 'agents' && <AgentsDashboard />}
                {activeSection === 'factions' && <FactionSelection />}
                {activeSection === 'battle' && <BattleSimulator />}
                {activeSection === 'evolution' && <EvolutionLab />}
                {activeSection === 'leaderboard' && <Leaderboard />}
            </main>
        </div>
    );
};

export default GamePage;