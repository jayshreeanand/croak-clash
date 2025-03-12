import { getExplorerUrl } from "@/lib/utils";
import Link from "next/link";

export const siteConfig = {
	title: "CrossfiConnect",
	description: "Decentralized Social media and Publishing platform based on CrossFi Blockchain to empower creators",
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
					The CrossfiConnect contract is deployed at address:&nbsp;
					https://test.xfiscan.com/address/0x3ab1de17e30e4fa29a375120c1bcb1e1cb933332
				</span>
			),
		},
		
	],
	githubUrl: "https://github.com/jayshreeanand/crossfi-connect",
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
};
