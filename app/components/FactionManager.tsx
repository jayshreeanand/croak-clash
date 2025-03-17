"use client";

import React, { useState } from 'react';

const FactionManager = ({ contract, account }) => {
    const [factionName, setFactionName] = useState('');

    const createFaction = async () => {
        try {
            await contract.methods.createFaction(factionName).send({ from: account });
            alert('Faction created successfully!');
        } catch (error) {
            console.error('Error creating faction:', error);
        }
    };

    return (
        <div className="p-4 bg-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Create a Faction</h2>
            <input
                type="text"
                value={factionName}
                onChange={(e) => setFactionName(e.target.value)}
                placeholder="Faction Name"
                className="p-2 rounded bg-gray-700 text-white"
            />
            <button onClick={createFaction} className="ml-2 p-2 bg-blue-600 text-white rounded">
                Create
            </button>
        </div>
    );
};

export default FactionManager; 