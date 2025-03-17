import { getExplorerUrl } from "@/lib/utils";
import Link from "next/link";

export const siteConfig = {
	title: "AI Apocalypse Chain",
	description: "A chaos-driven blockchain where different AI agents represent AI civilizations competing for dominance. Each civilization (AI swarm) tries to outsmart others by attacking, defending, and forming alliances. Users place bets on which AI civilization will survive.",
	isLocal: process.env.NEXT_PUBLIC_ENV === "development",
	masterAddress: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string,
	admin: {
		information:
			"The admin page contains information for managing creator and sponsor interactions.",
	},
	valueSentences: [
		" AI warfare is unpredictable and fun.",
			"Great for engagement → Users interact by betting/supporting AI factions.",
			"Creative governance → AI agents evolve based on their victories."
	],
	about: [
		{
			title: "AI Apocalypse Chain – AI Agents Battle for Blockchain Domination",
			description: (
				<span>
					Concept: A chaos-driven blockchain where different AI agents represent AI civilizations competing for dominance. Each civilization (AI swarm) tries to outsmart others by attacking, defending, and forming alliances. Users place bets on which AI civilization will survive.
				</span>
			),
		},
		{
			title: "Why Apocalypse Chain?",
			description: (
				<ul>
					<li>✅ AI warfare is unpredictable and fun.</li>
					<li>✅ Great for engagement → Users interact by betting/supporting AI factions.</li>
					<li>✅ Creative governance → AI agents evolve based on their victories.</li>
				</ul>
			),
		},
		{
			title: "How to build it?",
			description: (
				<ol>
					<li>Create a dedicated chain on Aurora Cloud Console.</li>
					<li>Deploy multiple AI Agents, each representing a faction.</li>
					<li>AI decides when to attack, defend, or form alliances.</li>
					<li>Users can place bets on the winning faction.</li>
					<li>Use smart contracts to distribute rewards to users backing the strongest AI.</li>
				</ol>
			),
		},
		{
			title: `Contract address`,
			description: (
				<span>
					The CrossfiConnect contract is deployed at address:&nbsp;
					https://test.xfiscan.com/address/0x3ab1de17e30e4fa29a375120c1bcb1e1cb933332
				</span>
			),
		},
		
	],
	githubUrl: "https://github.com/jayshreeanand/apocalypse-chain",
	steps: [
		{
			title: "Create",
			description: "Creators post their past projects to create a shareable portfolio page.",
		},
		{
			title: "Connect",
			description:
				"Sponsors browse projects and connect with creators whose ideas they want to support. Smart contracts manage the agreements, ensuring secure and transparent transactions.",
		},
		{
			title: "Collaborate",
			description:
				"Creators and supporters collaborate to bring the project to life. Creators can auto-generate scripts for sent requests using CrossFi Blockchain.",
		},
	],
	home: {
		title: "AI Apocalypse Chain – AI Agents Battle for Blockchain Domination",
		concept: "A chaos-driven blockchain where different AI agents represent AI civilizations competing for dominance. Each civilization (AI swarm) tries to outsmart others by attacking, defending, and forming alliances. Users place bets on which AI civilization will survive.",
		whyWinner: [
			"✅ AI warfare is unpredictable and fun.",
			"✅ Great for engagement → Users interact by betting/supporting AI factions.",
			"✅ Creative governance → AI agents evolve based on their victories.",
		],
		howToBuild: [
			"Create a dedicated chain on Aurora Cloud Console.",
			"Deploy multiple AI Agents, each representing a faction.",
			"AI decides when to attack, defend, or form alliances.",
			"Users can place bets on the winning faction.",
			"Use smart contracts to distribute rewards to users backing the strongest AI.",
		],
	},
};
