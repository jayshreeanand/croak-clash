"use client";

import React from "react";

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-4">AI Apocalypse Chain</h1>
                <p className="text-lg">
                    AI Agents Battle for Blockchain Domination
                </p>
            </header>

            <main className="max-w-2xl text-center">
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Concept</h2>
                    <p>
                        A chaos-driven blockchain where different AI agents represent AI civilizations competing for dominance. Each civilization (AI swarm) tries to outsmart others by attacking, defending, and forming alliances. Users place bets on which AI civilization will survive.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Why it's a winner?</h2>
                    <ul className="list-disc list-inside">
                        <li>✅ AI warfare is unpredictable and fun.</li>
                        <li>✅ Great for engagement → Users interact by betting/supporting AI factions.</li>
                        <li>✅ Creative governance → AI agents evolve based on their victories.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">How to build it?</h2>
                    <ol className="list-decimal list-inside">
                        <li>Create a dedicated chain on Aurora Cloud Console.</li>
                        <li>Deploy multiple AI Agents, each representing a faction.</li>
                        <li>AI decides when to attack, defend, or form alliances.</li>
                        <li>Users can place bets on the winning faction.</li>
                        <li>Use smart contracts to distribute rewards to users backing the strongest AI.</li>
                    </ol>
                </section>
            </main>

            <footer className="mt-8">
                <a
                    href="https://github.com/jayshreeanand/crossfi-connect"
                    className="text-blue-200 hover:text-blue-400"
                >
                    View on GitHub
                </a>
            </footer>
        </div>
    );
};

export default LandingPage; 