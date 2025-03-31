"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const factions = [
	{
		name: "Efrogs",
		emoji: "🐸",
		description: "The technologically advanced frog civilization, masters of evolution and adaptation."
	},
	{
		name: "Efroglets",
		emoji: "🐣",
		description: "The young and energetic frog warriors, quick to learn and eager to prove themselves."
	},
	{
		name: "Rogue Frogs",
		emoji: "🦗",
		description: "The mysterious and unpredictable frog faction, masters of stealth and surprise."
	}
];

const Home = () => {
	const [activeAI, setActiveAI] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveAI((prev) => (prev + 1) % factions.length);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="min-h-screen bg-black text-white overflow-hidden">
			{/* Hero Section */}
			<section className="relative h-screen flex items-center justify-center">
				<div className="absolute inset-0 z-0 flex items-center justify-center">
					<div className="text-9xl opacity-40">{factions[activeAI].emoji}</div>
				</div>
				
				<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 z-10"></div>
				
				<div className="container mx-auto px-4 z-20 text-center">
					<motion.h1 
						className="text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600"
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						Croak Clash
					</motion.h1>
					
					<motion.p 
						className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.3 }}
					>
						A frog-themed decentralized battleground on the Linea blockchain where various frog factions battle for control of limited resources. Players can mint frog warriors as NFTs, stake $CROAK to influence battles, and watch AI-driven warfare unfold on-chain.
					</motion.p>
					
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
					>
						<Link href="/game">
							<motion.button 
								className="bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Enter the Swamp
							</motion.button>
						</Link>
					</motion.div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20 bg-gray-900">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold text-center mb-12 text-green-400">Features</h2>
					
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<motion.div 
							className="bg-gray-800 p-6 rounded-lg"
							whileHover={{ y: -5 }}
							transition={{ duration: 0.3 }}
						>
							<div className="text-4xl mb-4">🐸</div>
							<h3 className="text-xl font-bold mb-2">Frog Warriors</h3>
							<p className="text-gray-400">Mint and train unique frog warriors with special abilities and attributes.</p>
						</motion.div>

						<motion.div 
							className="bg-gray-800 p-6 rounded-lg"
							whileHover={{ y: -5 }}
							transition={{ duration: 0.3 }}
						>
							<div className="text-4xl mb-4">⚔️</div>
							<h3 className="text-xl font-bold mb-2">Battle System</h3>
							<p className="text-gray-400">Engage in strategic battles with other frog warriors in the swamp.</p>
						</motion.div>

						<motion.div 
							className="bg-gray-800 p-6 rounded-lg"
							whileHover={{ y: -5 }}
							transition={{ duration: 0.3 }}
						>
							<div className="text-4xl mb-4">🌱</div>
							<h3 className="text-xl font-bold mb-2">Resource Management</h3>
							<p className="text-gray-400">Control and manage limited resources like lily pads, flies, and water.</p>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Factions Section */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold text-center mb-12 text-green-400">Choose Your Faction</h2>
					
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{factions.map((faction, index) => (
							<motion.div 
								key={faction.name}
								className="bg-gray-800 p-6 rounded-lg text-center"
								whileHover={{ y: -5 }}
								transition={{ duration: 0.3 }}
							>
								<div className="text-6xl mb-4">{faction.emoji}</div>
								<h3 className="text-xl font-bold mb-2">{faction.name}</h3>
								<p className="text-gray-400">{faction.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-r from-green-900/30 to-blue-900/30">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-3xl font-bold mb-6">Ready to Join the Battle?</h2>
					<p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
						Create your faction, form alliances, and battle for supremacy in the swamp.
					</p>
					<Link href="/game">
						<motion.button 
							className="bg-gradient-to-r from-green-600 to-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Enter the Swamp
						</motion.button>
					</Link>
				</div>
			</section>
		</div>
	);
};

export default Home;