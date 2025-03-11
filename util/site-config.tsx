import { getExplorerUrl } from "@/lib/utils";
import Link from "next/link";

export const siteConfig = {
	title: "CreatorHub",
	description: "Decentralized Social media and Publishing platform based on Creator Blockchain",
	isLocal: process.env.NEXT_PUBLIC_ENV === "development",
	masterAddress: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string,
	admin: {
		information:
			"The admin page contains information for managing creator and sponsor interactions.",
	},
	valueSentences: [
		"Smart contract backed social media and blog platform enabling users to publish various content types, including blog posts, web pages, videos, and podcasts, catering to a wide range of creators.",
		"Smart contracts to facilitate direct donations, subscriptions, or pay-per-view models, empowering creators to monetize their content without intermediaries",
		"Secure and transparent payment transactions between creators and supporters",
	],
	about: [

		{
			title: `Contract address`,
			description: (
				<span>
					The CreatorHub contract is deployed at address:&nbsp;
					https://explorer.creatorchain.io/address/0x9F5F1fc029754A85B6FA891A0BC71fe1e26DfC1A
				</span>
			),
		},
		
	],
	githubUrl: "https://github.com/jayshreeanand/creator-hub",
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
				"Creators and supporters collaborate to bring the project to life. Creators can auto-generate scripts for sent requests using Creator Blockchain.",
		},
	],
};
