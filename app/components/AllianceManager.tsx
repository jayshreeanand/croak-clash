"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { mockContractService } from '@/util/mock-contract-service';

// Define proper types for our data
interface Faction {
    id: number;
    name: string;
    power: number;
    members: number;
    victories: number;
    color: string;
    emoji: string;
}

const AllianceManager = () => {
    const [factions, setFactions] = useState<Faction[]>([]);
    const [userFaction, setUserFaction] = useState<Faction | null>(null);
    const [selectedFaction, setSelectedFaction] = useState<Faction | null>(null);
    const [allianceProposed, setAllianceProposed] = useState(false);
    const [allianceStatus, setAllianceStatus] = useState<'none' | 'pending' | 'accepted' | 'rejected'>('none');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const userFac = await mockContractService.getUserFaction();
                setUserFaction(userFac);
                
                const factionsList = await mockContractService.getFactions();
                setFactions(factionsList);
            } catch (error) {
                console.error("Error loading faction data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        loadData();
    }, []);

    const proposeAlliance = async () => {
        if (!selectedFaction) return;
        
        setAllianceProposed(true);
        setAllianceStatus('pending');
        
        // Simulate network delay
        setTimeout(() => {
            // 70% chance of acceptance for demo purposes
            const accepted = Math.random() > 0.3;
            setAllianceStatus(accepted ? 'accepted' : 'rejected');
        }, 2000);
    };

    const getFactionColor = (faction: Faction) => {
        switch (faction.color) {
            case 'blue': return 'text-blue-400';
            case 'red': return 'text-red-400';
            case 'green': return 'text-green-400';
            case 'purple': return 'text-purple-400';
            default: return 'text-white';
        }
    };

    const getFactionBgColor = (faction: Faction) => {
        switch (faction.color) {
            case 'blue': return 'bg-blue-900/30';
            case 'red': return 'bg-red-900/30';
            case 'green': return 'bg-green-900/30';
            case 'purple': return 'bg-purple-900/30';
            default: return 'bg-gray-800';
        }
    };

    if (isLoading) {
        return (
            <div className="container mx-auto px-4 py-12">
                <div className="flex justify-center items-center h-64">
                    <div className="text-xl text-gray-400">Loading faction data...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <h1 className="text-3xl font-bold mb-6">Alliance Manager</h1>
                
                {userFaction ? (
                    <div className={`p-6 rounded-lg ${getFactionBgColor(userFaction)} mb-8`}>
                        <h2 className="text-xl font-bold mb-4">Your Faction</h2>
                        <div className="flex items-center">
                            <div className="text-4xl mr-4">{userFaction.emoji}</div>
                            <div>
                                <div className={`text-xl font-bold ${getFactionColor(userFaction)}`}>{userFaction.name}</div>
                                <div className="text-sm text-gray-400">Power: {userFaction.power} | Members: {userFaction.members}</div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-gray-800 p-6 rounded-lg mb-8">
                        <p className="text-gray-400">You haven't joined a faction yet. Join a faction to form alliances.</p>
                    </div>
                )}
                
                {userFaction && (
                    <>
                        <h2 className="text-xl font-bold mb-4">Available Factions for Alliance</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {factions
                                .filter(faction => faction.id !== userFaction.id)
                                .map(faction => (
                                    <motion.div
                                        key={faction.id}
                                        className={`p-4 rounded-lg border ${selectedFaction?.id === faction.id ? 'border-purple-500' : 'border-gray-700'} ${getFactionBgColor(faction)} cursor-pointer`}
                                        whileHover={{ scale: 1.02 }}
                                        onClick={() => setSelectedFaction(faction)}
                                    >
                                        <div className="flex items-center">
                                            <div className="text-3xl mr-3">{faction.emoji}</div>
                                            <div className="flex-grow">
                                                <div className={`font-bold ${getFactionColor(faction)}`}>{faction.name}</div>
                                                <div className="text-xs text-gray-400">Power: {faction.power} | Victories: {faction.victories}</div>
                                            </div>
                                            <div className="text-xs px-2 py-1 bg-gray-700 rounded-full">
                                                {faction.members} members
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                        </div>
                        
                        {selectedFaction && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="mt-6 p-4 bg-gray-800 rounded-lg"
                            >
                                <h3 className="font-bold mb-2">Propose Alliance</h3>
                                <p className="text-sm text-gray-400 mb-4">
                                    Forming an alliance with {selectedFaction.name} will allow both factions to coordinate attacks and share resources.
                                </p>
                                
                                {!allianceProposed ? (
                                    <button
                                        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors"
                                        onClick={proposeAlliance}
                                    >
                                        Propose Alliance
                                    </button>
                                ) : (
                                    <div>
                                        {allianceStatus === 'pending' && (
                                            <div className="text-yellow-400">
                                                Alliance proposal pending... Waiting for response.
                                            </div>
                                        )}
                                        {allianceStatus === 'accepted' && (
                                            <div className="text-green-400">
                                                Alliance accepted! You are now allied with {selectedFaction.name}.
                                            </div>
                                        )}
                                        {allianceStatus === 'rejected' && (
                                            <div className="text-red-400">
                                                Alliance rejected. {selectedFaction.name} declined your proposal.
                                            </div>
                                        )}
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </>
                )}
            </motion.div>
        </div>
    );
};

export default AllianceManager; 