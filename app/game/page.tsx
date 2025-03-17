"use client";

import React from 'react';
import dynamic from 'next/dynamic';

// Use dynamic imports to avoid SSR issues with browser-only code
const FactionManager = dynamic(() => import('../components/FactionManager'), { ssr: false });
const BattleInterface = dynamic(() => import('../components/BattleInterface'), { ssr: false });
const AllianceManager = dynamic(() => import('../components/AllianceManager'), { ssr: false });

const GamePage = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            
            <div className="container mx-auto px-4 py-20">
                <h1 className="text-4xl font-bold mb-8 text-center mt-16">AI Apocalypse Chain</h1>
                
                <FactionManager />
                <BattleInterface />
                <AllianceManager />
            </div>
        </div>
    );
};

export default GamePage;