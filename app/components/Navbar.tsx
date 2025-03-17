"use client";

import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 fixed w-full z-30 top-0 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <motion.div
                        className="text-white text-2xl font-bold flex items-center"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="mr-2">🌌</span> AI Apocalypse Chain
                    </motion.div>
                </div>
                <div className="hidden md:flex space-x-6">
                    <a href="#home" className="text-white hover:text-gray-200 transition duration-300">
                        Home
                    </a>
                    <a href="#factions" className="text-white hover:text-gray-200 transition duration-300">
                        Factions
                    </a>
                    <a href="#why-winner" className="text-white hover:text-gray-200 transition duration-300">
                        Why It's a Winner
                    </a>
                    <a href="#how-to-build" className="text-white hover:text-gray-200 transition duration-300">
                        How to Build
                    </a>
                </div>
                <div className="md:hidden">
                    {/* Mobile menu button */}
                    <button className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 