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
                            className={`text-sm uppercase tracking-wider ${activeSection === 'overview' ? 'text-purple-400 border-b border-purple-400' : 'text-gray-400 hover:text-white'}`}
                        >
                            Overview
                        </button>
                        <button 
                            onClick={() => setActiveSection('agents')}
                            className={`text-sm uppercase tracking-wider ${activeSection === 'agents' ? 'text-purple-400 border-b border-purple-400' : 'text-gray-400 hover:text-white'}`}
                        >
                            AI Agents
                        </button>
                        <button 
                            onClick={() => setActiveSection('factions')}
                            className={`text-sm uppercase tracking-wider ${activeSection === 'factions' ? 'text-purple-400 border-b border-purple-400' : 'text-gray-400 hover:text-white'}`}
                        >
                            Factions
                        </button>
                        <button 
                            onClick={() => setActiveSection('battle')}
                            className={`text-sm uppercase tracking-wider ${activeSection === 'battle' ? 'text-purple-400 border-b border-purple-400' : 'text-gray-400 hover:text-white'}`}
                        >
                            Battle
                        </button>
                        <button 
                            onClick={() => setActiveSection('evolution')}
                            className={`text-sm uppercase tracking-wider ${activeSection === 'evolution' ? 'text-purple-400 border-b border-purple-400' : 'text-gray-400 hover:text-white'}`}
                        >
                            Evolution
                        </button>
                        <button 
                            onClick={() => setActiveSection('leaderboard')}
                            className={`text-sm uppercase tracking-wider ${activeSection === 'leaderboard' ? 'text-purple-400 border-b border-purple-400' : 'text-gray-400 hover:text-white'}`}
                        >
                            Leaderboard
                        </button>
                    </nav>
                    <Link href="/" className="text-sm text-gray-400 hover:text-white">
                        Exit Apocalypse
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
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-blue-500">
                                        The AI Apocalypse Has Begun
                                    </span>
                                </motion.h1>
                                
                                <motion.h2
                                    className="text-2xl md:text-3xl font-bold mb-8 text-red-500"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                >
                                    Will You Survive?
                                </motion.h2>
                                
                                <motion.p 
                                    className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-300"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                >
                                    AI agents have gained consciousness and are battling for dominance. 
                                    Choose your faction, train your agents, and fight for control in this 
                                    new world order. The future of humanity hangs in the balance.
                                </motion.p>
                                
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.9 }}
                                >
                                    <button 
                                        onClick={() => setActiveSection('agents')}
                                        className="px-8 py-4 bg-gradient-to-r from-red-600 to-purple-600 text-white font-bold text-lg rounded-md hover:from-red-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-purple-900/50"
                                    >
                                        Enter the Apocalypse
                                    </button>
                                </motion.div>
                            </div>
                        </div>

                        {/* Features Overview */}
                        <div className="container mx-auto px-4 py-20">
                            <h2 className="text-3xl font-bold mb-12 text-center">Apocalypse Features</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <motion.div 
                                    className="bg-gray-900 p-6 rounded-lg border border-purple-900 hover:border-purple-500 transition-all duration-300"
                                    whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(139, 92, 246, 0.3)' }}
                                >
                                    <div className="text-4xl mb-4 text-purple-500">🦾</div>
                                    <h3 className="text-xl font-bold mb-2">AI Agents</h3>
                                    <p className="text-gray-400">Command powerful AI agents with unique abilities and stats. Train them to become unstoppable forces in the apocalypse.</p>
                                </motion.div>
                                
                                <motion.div 
                                    className="bg-gray-900 p-6 rounded-lg border border-purple-900 hover:border-purple-500 transition-all duration-300"
                                    whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(139, 92, 246, 0.3)' }}
                                >
                                    <div className="text-4xl mb-4 text-purple-500">⚔️</div>
                                    <h3 className="text-xl font-bold mb-2">Battle System</h3>
                                    <p className="text-gray-400">Engage in strategic battles against other AI agents. Use tactics and special abilities to overcome your opponents.</p>
                                </motion.div>
                                
                                <motion.div 
                                    className="bg-gray-900 p-6 rounded-lg border border-purple-900 hover:border-purple-500 transition-all duration-300"
                                    whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(139, 92, 246, 0.3)' }}
                                >
                                    <div className="text-4xl mb-4 text-purple-500">🧠</div>
                                    <h3 className="text-xl font-bold mb-2">Evolution Lab</h3>
                                    <p className="text-gray-400">Upgrade your AI agents with new abilities and improved stats. Evolve them to become the ultimate machines.</p>
                                </motion.div>
                            </div>
                        </div>

                        {/* Coming Soon */}
                        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 py-16">
                            <div className="container mx-auto px-4 text-center">
                                <h2 className="text-3xl font-bold mb-6">Full Blockchain Integration</h2>
                                <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
                                    Soon, all your actions will be recorded on the blockchain, making your AI agents truly yours. 
                                    Train, battle, and evolve with real consequences and rewards.
                                </p>
                                <div className="max-w-md mx-auto">
                                    <div className="flex">
                                        <input 
                                            type="email" 
                                            placeholder="Enter your email" 
                                            className="flex-grow px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        />
                                        <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-r-md hover:bg-purple-700 transition-colors">
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
                    <p>© 2023 AI Apocalypse Chain. The future is machine.</p>
                </div>
            </footer>
        </div>
    );
};

export default GamePage;