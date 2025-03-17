"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import mockContractService from '../utils/mockContractService';

// Define proper types for props
interface BattleInterfaceProps {
  contract?: any; // Replace with proper contract type when available
  account?: string;
}

const BattleInterface: React.FC<BattleInterfaceProps> = ({ contract, account }) => {
    const [attackerId, setAttackerId] = useState('');
    const [defenderId, setDefenderId] = useState('');
    
    const [attackerName, setAttackerName] = useState('');
    const [defenderName, setDefenderName] = useState('');
    
    const [attackPower, setAttackPower] = useState(0);
    const [defensePower, setDefensePower] = useState(0);
    
    const [battleResult, setBattleResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [battleHistory, setBattleHistory] = useState([]);
    
    const handleAttack = async () => {
        if (!attackerId || !defenderId) {
            alert('Please select both attacker and defender');
            return;
        }
        
        setIsLoading(true);
        setBattleResult('');
        
        try {
            // Simulate battle with mock service
            const result = await mockContractService.simulateBattle(attackerId, defenderId);
            
            // Update battle result
            setBattleResult(result.winner === attackerId 
                ? `${attackerName} defeated ${defenderName}!` 
                : `${defenderName} defeated ${attackerName}!`);
            
            // Add to battle history
            setBattleHistory(prev => [
                {
                    id: Date.now(),
                    attacker: attackerName,
                    defender: defenderName,
                    winner: result.winner === attackerId ? attackerName : defenderName,
                    timestamp: new Date().toISOString()
                },
                ...prev
            ]);
        } catch (error) {
            console.error('Battle failed:', error);
            setBattleResult('Battle failed due to an error');
        } finally {
            setIsLoading(false);
        }
    };
    
    // Load agent data when IDs change
    useEffect(() => {
        const loadAgentData = async () => {
            if (attackerId) {
                const agent = await mockContractService.getAgentById(attackerId);
                setAttackerName(agent?.name || '');
                setAttackPower(agent?.power || 0);
            }
            
            if (defenderId) {
                const agent = await mockContractService.getAgentById(defenderId);
                setDefenderName(agent?.name || '');
                setDefensePower(agent?.power || 0);
            }
        };
        
        loadAgentData();
    }, [attackerId, defenderId]);
    
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6">Battle Interface</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Attacker Selection */}
                <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">Select Attacker</h3>
                    <select 
                        className="w-full p-2 bg-gray-700 rounded text-white mb-4"
                        value={attackerId}
                        onChange={(e) => setAttackerId(e.target.value)}
                    >
                        <option value="">-- Select Attacker --</option>
                        <option value="1">Agent Alpha</option>
                        <option value="2">Agent Beta</option>
                        <option value="3">Agent Gamma</option>
                    </select>
                    
                    {attackerId && (
                        <div className="bg-gray-700 p-3 rounded">
                            <div className="font-bold text-lg">{attackerName}</div>
                            <div className="text-sm text-gray-300">Attack Power: {attackPower}</div>
                        </div>
                    )}
                </div>
                
                {/* Defender Selection */}
                <div className="bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">Select Defender</h3>
                    <select 
                        className="w-full p-2 bg-gray-700 rounded text-white mb-4"
                        value={defenderId}
                        onChange={(e) => setDefenderId(e.target.value)}
                    >
                        <option value="">-- Select Defender --</option>
                        <option value="1">Agent Alpha</option>
                        <option value="2">Agent Beta</option>
                        <option value="3">Agent Gamma</option>
                    </select>
                    
                    {defenderId && (
                        <div className="bg-gray-700 p-3 rounded">
                            <div className="font-bold text-lg">{defenderName}</div>
                            <div className="text-sm text-gray-300">Defense Power: {defensePower}</div>
                        </div>
                    )}
                </div>
            </div>
            
            {/* Battle Controls */}
            <div className="flex justify-center mb-8">
                <button 
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handleAttack}
                    disabled={!attackerId || !defenderId || isLoading}
                >
                    {isLoading ? 'Battle in Progress...' : 'Initiate Battle'}
                </button>
            </div>
            
            {/* Battle Result */}
            {battleResult && (
                <motion.div 
                    className="bg-gray-800 p-4 rounded-lg text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h3 className="text-xl font-bold mb-2">Battle Result</h3>
                    <div className="text-lg">{battleResult}</div>
                </motion.div>
            )}
            
            {/* Battle History */}
            <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Battle History</h3>
                {battleHistory.length === 0 ? (
                    <div className="text-gray-400 text-center py-4">No battles recorded yet</div>
                ) : (
                    <div className="space-y-3">
                        {battleHistory.map((battle) => (
                            <div key={battle.id} className="bg-gray-700 p-3 rounded">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="font-semibold">{battle.attacker}</span> vs <span className="font-semibold">{battle.defender}</span>
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        {new Date(battle.timestamp).toLocaleTimeString()}
                                    </div>
                                </div>
                                <div className="mt-1 text-sm">
                                    Winner: <span className="text-green-400 font-semibold">{battle.winner}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BattleInterface; 