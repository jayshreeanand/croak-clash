import { ContractMetadata, CreatorHubData } from "./types";
import { formatDate } from "./utils";

export const DEMO_REQUEST: CreatorHubData = {
	post: "defi-tutorial",
	name: "How to build a deFi app",
	description: "This is a Post",
};

export const DEMO_METADATA: ContractMetadata = {
	post: "defi-tutorial",
	creatorName: "Defi Creator",
	creatorDescription: "This is a Post",
	initialVideoUrls: [
		"https://www.youtube.com/watch?v=gyMwXuJrbJQ",
	],
	creatorAddress: "0xf4982D4aC99d25d89Cc8993a88Dc643832B1515b",
	requests: [
		{
			post: "defi-tutorial",
			donation: "100",
			message: "Loved the blog post. Please post more tutorials like this",
			requester: "0xaab58c7fD4246C8F5cA950f25De5Cd6Df5F56624",
			createdAt: formatDate(new Date()),
		},
	],
	active: true,
	createdAt: "2022-01-01",
	isValue: true,
};

export const EXAMPLE_SCRIPT = `test`
