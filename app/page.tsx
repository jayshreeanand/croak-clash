"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/util/site-config";
import FactionManager from './components/FactionManager';
import BattleInterface from './components/BattleInterface';
import Link from 'next/link';

const Home = () => {
	const [activeAI, setActiveAI] = useState(0);
	const aiNames = ["Nexus", "Synapse", "Quantum", "Cipher", "Vortex"];
	const aiColors = ["#FF5733", "#33FF57", "#3357FF", "#F033FF", "#FF9933"];
	const aiEmojis = ["🤖", "🧠", "🔮", "🔐", "🌪️"];
	const [account, setAccount] = useState('');

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveAI((prev) => (prev + 1) % aiNames.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	

	return (
		<div className="min-h-screen bg-black text-white overflow-hidden">

			{/* Hero Section */}
			<section className="relative h-screen flex items-center justify-center">
				<div className="absolute inset-0 z-0 flex items-center justify-center">
					<div className="text-9xl opacity-40">{aiEmojis[activeAI]}</div>
				</div>
				
				<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 z-10"></div>
				
				<div className="container mx-auto px-4 z-20 text-center">
					<motion.h1 
						className="text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						{siteConfig.home.title}
					</motion.h1>
					
					<motion.p 
						className="text-xl max-w-3xl mx-auto mb-10"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.8 }}
					>
						{siteConfig.home.concept}
					</motion.p>
					
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8, duration: 0.8 }}
					><Link href="/game">
						<button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 mr-4">
							Join the Battle
						</button>
						</Link>
						
						<button className="bg-transparent border-2 border-purple-600 hover:bg-purple-600/20 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300">
							Learn More
						</button>
					</motion.div>
				</div>
				
				<div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
					<motion.div 
						animate={{ y: [0, -10, 0] }}
						transition={{ repeat: Infinity, duration: 1.5 }}
					>
						<svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
						</svg>
					</motion.div>
				</div>
			</section>

			{/* AI Factions Section */}
			<section className="py-20 bg-gradient-to-b from-black to-purple-900">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold mb-16 text-center">Choose Your AI Faction</h2>
					
					<div className="grid grid-cols-1 md:grid-cols-5 gap-6">
						{aiNames.map((name, index) => (
							<motion.div
								key={name}
								className={`relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${activeAI === index ? 'ring-4' : ''}`}
								style={{ 
									boxShadow: `0 0 20px ${aiColors[index]}`,
									borderColor: aiColors[index]
								}}
								whileHover={{ scale: 1.05 }}
								onClick={() => setActiveAI(index)}
							>
								<div className="aspect-square relative flex items-center justify-center text-6xl">
									<span>{aiEmojis[index]}</span>
								</div>
								<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
								<div className="absolute bottom-0 left-0 right-0 p-4">
									<h3 className="text-xl font-bold" style={{ color: aiColors[index] }}>{name}</h3>
									<p className="text-sm text-gray-300">AI Civilization</p>
								</div>
							</motion.div>
						))}
					</div>
					
					<div className="mt-16 bg-gray-900 rounded-xl p-8">
						<h3 className="text-2xl font-bold mb-4" style={{ color: aiColors[activeAI] }}>
							{aiNames[activeAI]} Faction
						</h3>
						<p className="text-gray-300 mb-6">
							The {aiNames[activeAI]} AI civilization specializes in {activeAI === 0 ? 'strategic warfare and resource management' : 
							activeAI === 1 ? 'neural networks and adaptive learning' : 
							activeAI === 2 ? 'quantum computing and probability manipulation' : 
							activeAI === 3 ? 'encryption and stealth operations' : 
							'chaotic systems and unpredictable attacks'}.
						</p>
						<div className="flex items-center">
							<div className="w-full bg-gray-700 rounded-full h-4">
								<div 
									className="h-4 rounded-full transition-all duration-500"
									style={{ 
										width: `${(activeAI + 1) * 20}%`, 
										backgroundColor: aiColors[activeAI] 
									}}
								></div>
							</div>
							<span className="ml-4 font-bold" style={{ color: aiColors[activeAI] }}>
								{(activeAI + 1) * 20}%
							</span>
						</div>
						<p className="mt-2 text-sm text-gray-400">Current dominance level</p>
					</div>
				</div>
			</section>

			{/* Why It's a Winner Section */}
			<section className="py-20 bg-black">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold mb-16 text-center">Why?</h2>
					
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{siteConfig.home.whyWinner.map((item, index) => (
							<motion.div
								key={index}
								className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-xl p-8 transform transition-all duration-500"
								whileHover={{ 
									scale: 1.03,
									boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)"
								}}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.2, duration: 0.5 }}
								viewport={{ once: true }}
							>
								<div className="text-5xl mb-6">
									{index === 0 ? "🎮" : index === 1 ? "🔄" : "🧠"}
								</div>
								<h3 className="text-xl font-bold mb-4">
									{item.replace("✅ ", "")}
								</h3>
								<p className="text-gray-300">
									{index === 0 ? "Experience the thrill of unpredictable AI warfare as factions evolve and adapt their strategies in real-time." : 
									index === 1 ? "Bet on factions, form alliances, and influence the outcome of AI civilization battles." : 
									"Watch AI agents evolve their governance models based on victories and defeats in the blockchain arena."}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* How to Build Section */}
			<section className="py-20 bg-gradient-to-t from-black to-purple-900">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold mb-16 text-center">How to Build It?</h2>
					
					<div className="relative">
						<div className="absolute left-1/2 top-0 bottom-0 w-1 bg-purple-600 transform -translate-x-1/2"></div>
						
						{siteConfig.home.howToBuild.map((item, index) => (
							<motion.div
								key={index}
								className={`relative mb-16 flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
								initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5 }}
								viewport={{ once: true }}
							>
								<div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
									<h3 className="text-2xl font-bold mb-2">Step {index + 1}</h3>
									<p className="text-gray-300">{item}</p>
								</div>
								
								<div className="absolute left-1/2 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center transform -translate-x-1/2">
									<span className="text-xl font-bold">{index + 1}</span>
								</div>
								
								<div className={`md:hidden w-full px-12 ${index % 2 === 0 ? 'text-left' : 'text-left'}`}>
									<h3 className="text-2xl font-bold mb-2">Step {index + 1}</h3>
									<p className="text-gray-300">{item}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-20 bg-black">
				<div className="container mx-auto px-4 text-center">
					<motion.div
						className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 max-w-4xl mx-auto"
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 0.3 }}
					>
						<h2 className="text-4xl font-bold mb-6">Ready to Join the AI Apocalypse?</h2>
						<p className="text-xl mb-8 max-w-2xl mx-auto">
							Place your bets, choose your faction, and witness the future of AI warfare on the blockchain.
						</p>
						<button className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
							Get Started Now
						</button>
					</motion.div>
				</div>
			</section>
		</div>
	);
};

export default Home;