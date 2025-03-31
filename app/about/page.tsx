"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
	return (
		<div className="min-h-screen bg-black text-white py-20">
			<div className="container mx-auto px-4">
				<motion.h1 
					className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					About Croak Clash
				</motion.h1>

				<motion.div 
					className="max-w-3xl mx-auto space-y-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<div className="bg-gray-800 p-6 rounded-lg">
						<h2 className="text-2xl font-bold mb-4 text-green-400">Our Vision</h2>
						<p className="text-gray-300">
							Croak Clash is a revolutionary blockchain game that brings together the excitement of frog-themed warfare with the power of decentralized technology. Our vision is to create an immersive world where players can engage in strategic battles, manage resources, and evolve their frog warriors while being part of a vibrant community.
						</p>
					</div>

					<div className="bg-gray-800 p-6 rounded-lg">
						<h2 className="text-2xl font-bold mb-4 text-green-400">The Technology</h2>
						<p className="text-gray-300">
							Built on the Linea blockchain, Croak Clash leverages cutting-edge smart contract technology to ensure transparent and fair gameplay. Our contracts handle everything from NFT minting to battle mechanics, while the $CROAK token powers the in-game economy.
						</p>
					</div>

					<div className="bg-gray-800 p-6 rounded-lg">
						<h2 className="text-2xl font-bold mb-4 text-green-400">Community First</h2>
						<p className="text-gray-300">
							We believe in building a strong, engaged community of players who share our passion for blockchain gaming. Through regular updates, community events, and governance mechanisms, we ensure that our players have a voice in shaping the future of Croak Clash.
						</p>
					</div>

					<div className="bg-gray-800 p-6 rounded-lg">
						<h2 className="text-2xl font-bold mb-4 text-green-400">Join the Battle</h2>
						<p className="text-gray-300">
							Whether you're a seasoned blockchain gamer or new to the space, Croak Clash offers an accessible yet deep gaming experience. Choose your faction, train your warriors, and compete for supremacy in the swamp!
						</p>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default AboutPage;
