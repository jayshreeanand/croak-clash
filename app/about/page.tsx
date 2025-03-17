"use client";

import BasicCard from "@/components/basic-card";

const About = () => {
	return (
		<div className="flex flex-col items-center justify-center mt-8">
			<BasicCard
				title="AI Apocalypse Chain – AI Agents Battle for Blockchain Domination"
				description="Concept: A chaos-driven blockchain where different AI agents represent AI civilizations competing for dominance. Each civilization (AI swarm) tries to outsmart others by attacking, defending, and forming alliances. Users place bets on which AI civilization will survive."
				className="max-w-[1000px] p-4"
			>
				<div className="mt-4">
					<h3 className="text-lg font-bold">Why?</h3>
					<ul className="list-disc ml-5">
						<li>✅ AI warfare is unpredictable and fun.</li>
						<li>✅ Great for engagement → Users interact by betting/supporting AI factions.</li>
						<li>✅ Creative governance → AI agents evolve based on their victories.</li>
					</ul>
				</div>

				<div className="mt-4">
					<h3 className="text-lg font-bold">How we built it?</h3>
					<ol className="list-decimal ml-5">
						<li>Create a dedicated chain on Aurora Cloud Console.</li>
						<li>Deploy multiple AI Agents, each representing a faction.</li>
						<li>AI decides when to attack, defend, or form alliances.</li>
						<li>Users can place bets on the winning faction.</li>
						<li>Use smart contracts to distribute rewards to users backing the strongest AI.</li>
					</ol>
				</div>
			</BasicCard>
		</div>
	);
};

export default About;
