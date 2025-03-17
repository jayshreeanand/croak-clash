"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import mockContractService from '../utils/mockContractService';

const AllianceManager = () => {
    const [userFaction, setUserFaction] = useState(null);
    const [factions, setFactions] = useState([]);
    const [alliances, setAlliances] = useState([]);
    const [selectedFaction, setSelectedFaction] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isForming, setIsForming] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            try {
                const userFac = await mockContractService.getUserFaction();
                setUserFaction(userFac);
                
                const factionsList = await mockContractService.getFactions();
                setFactions(factionsList);
                
                const alliancesList = await mockContractService.getAlliances();
                setAlliances(alliancesList);
                
                setIsLoading(false);
            } catch (error) {
                console.error('Error loading data:', error);
                setIsLoading(false);
            }
        };
        
        loadData();
    }, []);

    const handleFormAlliance = async () => {
        if (!userFaction || !selectedFaction) return;
        
        try {
            setIsForming(true);
            await mockContractService.formAlliance(userFaction.id, selectedFaction.id);
            
            // Refresh alliances
            const updatedAlliances = await mockContractService.getAlliances();
            setAlliances(updatedAlliances);
            
            setSelectedFaction(null);
            setIsForming(false);
        } catch (error) {
            console.error('Error forming alliance:', error);
            setIsForming(false);
        }
    };

    const isAllied = (faction1Id, faction2Id) => {
        return alliances.some(
            a => (a.faction1Id === faction1Id && a.faction2Id === faction2Id) || 
                 (a.faction1Id === faction2Id && a.faction2Id === faction1Id)
        );
    };

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString();
    };

    if (isLoading) {
        return (
            <div className="p-6 bg-gray-900 rounded-xl shadow-lg mt-8">
                <h2 className="text-3xl font-bold text-white mb-6">Alliances</h2>
                <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            </div>
        );
    }

    if (!userFaction) {
        return (
            <div className="p-6 bg-gray-900 rounded-xl shadow-lg mt-8">
                <h2 className="text-3xl font-bold text-white mb-6">Alliances</h2>
                <div className="text-center py-8">
                    <p className="text-xl text-gray-400">Join or create a faction to form alliances</p>
                </div>
            </div>
        );
    }

    return (
        <div className="p-6 bg-gray-900 rounded-xl shadow-lg mt-8">
            <h2 className="text-3xl font-bold text-white mb-6">Alliances</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-4 bg-gray-800 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Form New Alliance</h3>
                    
                    {selectedFaction ? (
                        <div className="mb-4">
                            <div className="flex items-center mb-4">
                                <div className="flex items-center flex-1">
                                    <span className="text-3xl mr-2">{userFaction.emoji}</span>
                                    <span className="font-bold" style={{ color: userFaction.color }}>{userFaction.name}</span>
                                </div>
                                <div className="mx-4">🤝</div>
                                <div className="flex items-center flex-1">
                                    <span className="text-3xl mr-2">{selectedFaction.emoji}</span>
                                    <span className="font-bold" style={{ color: selectedFaction.color }}>{selectedFaction.name}</span>
                                </div>
                            </div>
                            
                            <div className="flex space-x-2">
                                <button
                                    onClick={handleFormAlliance}
                                    disabled={isForming}
                                    className={`flex-1 py-2 rounded ${
                                        isForming 
                                            ? 'bg-gray-600 cursor-not-allowed' 
                                            : 'bg-blue-600 hover:bg-blue-700'
                                    } text-white transition-colors`}
                                >
                                    {isForming ? 'Forming...' : 'Confirm Alliance'}
                                </button>
                                
                                <button
                                    onClick={() => setSelectedFaction(null)}
                                    disabled={isForming}
                                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <p className="mb-2 text-gray-300">Select a faction to form an alliance with:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {factions
                                    .filter(f => f.id !== userFaction.id && !isAllied(f.id, userFaction.id))
                                    .map(faction => (
                                        <motion.button
                                            key={faction.id}
                                            className="p-2 bg-gray-700 rounded-lg text-left hover:bg-gray-600 transition-colors"
                                            whileHover={{ scale: 1.05 }}
                                            onClick={() => setSelectedFaction(faction)}
                                        >
                                            <div className="flex items-center">
                                                <span className="text-2xl mr-2">{faction.emoji}</span>
                                                <div>
                                                    <p className="font-semibold" style={{ color: faction.color }}>{faction.name}</p>
                                                    <p className="text-xs text-gray-300">Power: {faction.power}</p>
                                                </div>
                                            </div>
                                        </motion.button>
                                    ))
                                }
                            </div>
                            
                            {factions.filter(f => f.id !== userFaction.id && !isAllied(f.id, userFaction.id)).length === 0 && (
                                <p className="text-gray-400 text-center py-4">No available factions to ally with</p>
                            )}
                        </div>
                    )}
                </div>
                
                <div className="p-4 bg-gray-800 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Your Alliances</h3>
                    
                    {alliances
                        .filter(a => a.faction1Id === userFaction.id || a.faction2Id === userFaction.id)
                        .map(alliance => {
                            const alliedFactionId = alliance.faction1Id === userFaction.id 
                                ? alliance.faction2Id 
                                : alliance.faction1Id;
                            const alliedFaction = factions.find(f => f.id === alliedFactionId);
                            
                            return (
                                <div key={alliance.id} className="mb-4 p-3 bg-gray-700 rounded-lg">
                                    <div className="flex items-center">
                                        <div className="flex items-center flex-1">
                                            <span className="text-2xl mr-2">{userFaction.emoji}</span>
                                            <span className="font-semibold" style={{ color: userFaction.color }}>{userFaction.name}</span>
                                        </div>
                                        <div className="mx-2">🤝</div>
                                        <div className="flex items-center flex-1">
                                            <span className="text-2xl mr-2">{alliedFaction?.emoji}</span>
                                            <span className="font-semibold" style={{ color: alliedFaction?.color }}>{alliedFaction?.name}</span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-2">Formed on {formatDate(alliance.formed)}</p>
                                </div>
                            );
                        })
                    }
                    
                    {alliances.filter(a => a.faction1Id === userFaction.id || a.faction2Id === userFaction.id).length === 0 && (
                        <p className="text-gray-400 text-center py-4">No active alliances</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllianceManager; 