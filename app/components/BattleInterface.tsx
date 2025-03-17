"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import mockContractService from '../utils/mockContractService';

const BattleInterface = ({ contract, account }) => {
    const [attackerId, setAttackerId] = useState('');
    const [defenderId, setDefenderId] = useState('');

    const initiateBattle = async () => {
        try {
            await contract.methods.attack(attackerId, defenderId).send({ from: account });
            alert('Battle initiated!');
        } catch (error) {
            console.error('Error initiating battle:', error);
        }
    };

    return (
        <div className="p-4 bg-gray-800 rounded-lg mt-4">
            <h2 className="text-2xl font-bold text-white mb-4">Initiate a Battle</h2>
            <input
                type="text"
                value={attackerId}
                onChange={(e) => setAttackerId(e.target.value)}
                placeholder="Attacker ID"
                className="p-2 rounded bg-gray-700 text-white"
            />
            <input
                type="text"
                value={defenderId}
                onChange={(e) => setDefenderId(e.target.value)}
                placeholder="Defender ID"
                className="p-2 rounded bg-gray-700 text-white ml-2"
            />
            <button onClick={initiateBattle} className="ml-2 p-2 bg-red-600 text-white rounded">
                Attack
            </button>
        </div>
    );
};

export default BattleInterface; 