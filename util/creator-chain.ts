import { Chain, defineChain } from "viem";

export const creatorTestnet: Chain = /*#__PURE__*/ defineChain({
	id: 66665,
	name: "Creator Testnet",
	nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
	rpcUrls: {
		default: {
			http: ["https://rpc.creatorchain.io"],
		},
	},
	blockExplorers: {
		default: {
			name: "Creator Block Explorer",
			url: "https://explorer.creatorchain.io/",
			apiUrl: "https://explorer-creator-335av30doc.t.conduit.xyz/api/v2/",
		},
	},
	contracts: {},
});
