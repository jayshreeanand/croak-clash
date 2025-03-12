import { Chain, defineChain } from "viem";

export const crossfiTestnet: Chain = /*#__PURE__*/ defineChain({
	id: 4157,
	name: "CrossFi Testnet",
	nativeCurrency: { name: "XFI", symbol: "XFI", decimals: 18 },
	rpcUrls: {
		default: {
			http: ["https://rpc.testnet.ms"],
		},
	},
	blockExplorers: {
		default: {
			name: "Crossfi Testnet Block Explorer",
			url: "https://test.xfiscan.com/",
			apiUrl: "https://test.xfiscan.com/address/",
		},
	},
	contracts: {},
});
