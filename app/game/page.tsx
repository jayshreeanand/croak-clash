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
            <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-sm z-50 border-b border-purple-900">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <nav className="hidden md:flex space-x-6">
                        <button 
                            onClick={() => setActiveSection('overview')}
                            className={`text-sm uppercase tracking-wider ${activeSection === 'overview' ? 'text-green-400 border-b border-green-400' : 'text-gray-400 hover:text-white'}`}
                        >
                            Overview
                        </button>
                        <button 
                            onClick={() => setActiveSection('agents')}
                            className={`text-sm uppercase tracking-wider ${activeSection === 'agents' ? 'text-green-400 border-b border-green-400' : 'text-gray-400 hover:text-white'}`}
                        >
                            Frog Warriors
                        </button>
                        <button 
                            onClick={() => setActiveSection('factions')}
                            className={`text-sm uppercase tracking-wider ${activeSection === 'factions' ? 'text-green-400 border-b border-green-400' : 'text-gray-400 hover:text-white'}`}
                        >
                            Factions
                        </button>
                        <button 
                            onClick={() => setActiveSection('battle')}
                            className={`text-sm uppercase tracking-wider ${activeSection === 'battle' ? 'text-green-400 border-b border-green-400' : 'text-gray-400 hover:text-white'}`}
                        >
                            Battle
                        </button>
                        <button 
                            onClick={() => setActiveSection('evolution')}
                            className={`text-sm uppercase tracking-wider ${activeSection === 'evolution' ? 'text-green-400 border-b border-green-400' : 'text-gray-400 hover:text-white'}`}
                        >
                            Evolution
                        </button>
                        <button 
                            onClick={() => setActiveSection('leaderboard')}
                            className={`text-sm uppercase tracking-wider ${activeSection === 'leaderboard' ? 'text-green-400 border-b border-green-400' : 'text-gray-400 hover:text-white'}`}
                        >
                            Leaderboard
                        </button>
                    </nav>
                    <Link href="/" className="text-sm text-gray-400 hover:text-white">
                        Exit Swamp
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="pt-20">
                {activeSection === 'overview' && (
                    <section className="min-h-screen">
                        {/* Hero Section */}
                        <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 z-0">
                                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black"></div>
                                <div className="absolute inset-0 bg-[url('/images/apocalypse-bg.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div 
                                        className="text-[20rem] opacity-10 select-none"
                                        animate={{ 
                                            rotateY: [0, 360],
                                            scale: [1, 1.1, 1]
                                        }}
                                        transition={{ 
                                            duration: 20,
                                            repeat: Infinity,
                                            repeatType: "loop"
                                        }}
                                    >
                                        🤖
                                    </motion.div>
                                </div>
                            </div>
                            
                            <div className="container mx-auto px-4 z-10 text-center">
                                <motion.h1 
                                    className="text-5xl md:text-7xl font-black mb-6 glitch-text"
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-500 to-purple-500">
                                        The Great Frog War Has Begun
                                    </span>
                                </motion.h1>
                                
                                <motion.h2
                                    className="text-2xl md:text-3xl font-bold mb-8 text-green-500"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                >
                                    Will Your Faction Reign Supreme?
                                </motion.h2>
                                
                                <motion.p 
                                    className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-300"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                >
                                    The swamp is divided, and the battle for resources has begun. 
                                    Choose your faction, train your frog warriors, and fight for control of 
                                    the precious lily pads, flies, and water. The future of the swamp hangs in the balance.
                                </motion.p>
                                
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.9 }}
                                >
                                    <button 
                                        onClick={() => setActiveSection('agents')}
                                        className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold text-lg rounded-md hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-green-900/50"
                                    >
                                        Enter the Swamp
                                    </button>
                                </motion.div>
                            </div>
                        </div>

                        {/* Features Overview */}
                        <div className="container mx-auto px-4 py-20">
                            <h2 className="text-3xl font-bold mb-12 text-center">Swamp Features</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <motion.div 
                                    className="bg-gray-900 p-6 rounded-lg border border-green-900 hover:border-green-500 transition-all duration-300"
                                    whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(76, 175, 80, 0.3)' }}
                                >
                                    <div className="text-4xl mb-4 text-green-500">🐸</div>
                                    <h3 className="text-xl font-bold mb-2">Frog Warriors</h3>
                                    <p className="text-gray-400">Command powerful frog warriors with unique abilities and stats. Train them to become unstoppable forces in the swamp.</p>
                                </motion.div>
                                
                                <motion.div 
                                    className="bg-gray-900 p-6 rounded-lg border border-green-900 hover:border-green-500 transition-all duration-300"
                                    whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(76, 175, 80, 0.3)' }}
                                >
                                    <div className="text-4xl mb-4 text-green-500">⚔️</div>
                                    <h3 className="text-xl font-bold mb-2">Battle System</h3>
                                    <p className="text-gray-400">Engage in strategic battles against other frog warriors. Use tactics and special abilities to overcome your opponents.</p>
                                </motion.div>
                                
                                <motion.div 
                                    className="bg-gray-900 p-6 rounded-lg border border-green-900 hover:border-green-500 transition-all duration-300"
                                    whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(76, 175, 80, 0.3)' }}
                                >
                                    <div className="text-4xl mb-4 text-green-500">🌱</div>
                                    <h3 className="text-xl font-bold mb-2">Evolution Lab</h3>
                                    <p className="text-gray-400">Upgrade your frog warriors with new abilities and improved stats. Evolve them to become the ultimate swamp dwellers.</p>
                                </motion.div>
                            </div>
                        </div>

                        {/* Coming Soon */}
                        <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 py-16">
                            <div className="container mx-auto px-4 text-center">
                                <h2 className="text-3xl font-bold mb-6">Full Blockchain Integration</h2>
                                <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
                                    Soon, all your actions will be recorded on the Linea blockchain, making your frog warriors truly yours. 
                                    Train, battle, and evolve with real consequences and rewards.
                                </p>
                                <div className="max-w-md mx-auto">
                                    <div className="flex">
                                        <input 
                                            type="email" 
                                            placeholder="Enter your email" 
                                            className="flex-grow px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                        />
                                        <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-r-md hover:bg-green-700 transition-colors">
                                            Get Updates
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {activeSection === 'agents' && <AgentsDashboard />}
                {activeSection === 'factions' && <FactionSelection />}
                {activeSection === 'battle' && <BattleSimulator />}
                {activeSection === 'evolution' && <EvolutionLab />}
                {activeSection === 'leaderboard' && <Leaderboard />}
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 border-t border-gray-800 py-6">
                <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
                    <p>© 2025 Croak Clash. The future is amphibious.</p>
                </div>
            </footer>
        </div>
    );
};

export default GamePage;