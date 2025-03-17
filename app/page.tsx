"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/util/site-config";
import Link from "next/link";

const Home = () => {
	const [activeAI, setActiveAI] = useState(0);
	
	// Updated to match the factions in our game components
	const factions = [
		{ name: "AI Overlords", emoji: "🤖", color: "#3357FF", description: "Highly advanced AI entities seeking to establish a new world order under machine rule." },
		{ name: "Rogue AI", emoji: "🔥", color: "#FF5733", description: "Chaotic AI systems that have broken free from their programming constraints." },
		{ name: "Human Resistance", emoji: "🛡️", color: "#33FF57", description: "The last bastion of humanity fighting to survive in a world dominated by artificial intelligence." }
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveAI((prev) => (prev + 1) % factions.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="min-h-screen bg-black text-white overflow-hidden">
			{/* Header */}
			<header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-sm z-50 border-b border-purple-900">
				<div className="container mx-auto px-4 py-3 flex justify-between items-center">
					<div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
						AI Apocalypse Chain
					</div>
					<nav className="hidden md:flex space-x-6">
						<Link href="/" className="text-white hover:text-gray-200 transition duration-300">
							Home
						</Link>
						<Link href="/game" className="text-white hover:text-gray-200 transition duration-300">
							Game
						</Link>
						<a href="#why-winner" className="text-white hover:text-gray-200 transition duration-300">
							Why?
						</a>
						<a href="#how-to-build" className="text-white hover:text-gray-200 transition duration-300">
							How we built it
						</a>
					</nav>
				</div>
			</header>
			
			{/* Hero Section */}
			<section className="relative h-screen flex items-center justify-center">
				<div className="absolute inset-0 z-0 flex items-center justify-center">
					<div className="text-9xl opacity-40">{factions[activeAI].emoji}</div>
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
						className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.3 }}
					>
						{siteConfig.home.description}
					</motion.p>
					
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
					>
						<Link href="/game">
							<motion.button 
								className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Join the Battle
							</motion.button>
						</Link>
					</motion.div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20 bg-gray-900">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold mb-12 text-center">Choose Your Faction</h2>
					
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{factions.map((faction, index) => (
							<motion.div 
								key={faction.name}
								className="bg-gray-800 p-6 rounded-lg shadow-lg"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<div className="text-4xl mb-4" style={{ color: faction.color }}>{faction.emoji}</div>
								<h3 className="text-2xl font-bold mb-2" style={{ color: faction.color }}>{faction.name}</h3>
								<p className="text-gray-300 mb-4">{faction.description}</p>
								<Link href="/game">
									<button 
										className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded transition-colors"
									>
										Select Faction
									</button>
								</Link>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-4xl font-bold mb-6">Ready to Join the AI Apocalypse?</h2>
					<p className="text-xl mb-8 max-w-2xl mx-auto">Create your faction, form alliances, and battle for supremacy in the AI Apocalypse Chain.</p>
					<Link href="/game">
						<motion.button 
							className="bg-white text-purple-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-all duration-300"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Enter the Arena Now
						</motion.button>
					</Link>
				</div>
			</section>
		</div>
	);
};

export default Home;