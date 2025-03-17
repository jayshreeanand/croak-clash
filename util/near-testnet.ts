import { Chain, defineChain } from "viem";

export const nearTestnet: Chain = /*#__PURE__*/ defineChain({
	id: 1313161658,
	name: "Apocalypse Chain (NEAR)",
	nativeCurrency: { name: "WNEAR", symbol: "WNEAR", decimals: 18 },
	rpcUrls: {
		default: {
			http: ["https://0x4e4541ba.rpc.aurora-cloud.dev"],
		},
	},
	blockExplorers: {
		default: {
			name: "AI Apocalypse Chain Block Explorer",
			url: "https://0x4e4541ba.explorer.aurora-cloud.dev",
			apiUrl: "https://0x4e4541ba.explorer.aurora-cloud.dev/tx",
		},
	},
	contracts: {},
});
