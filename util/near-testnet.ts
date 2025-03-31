import { Chain, defineChain } from "viem";

export const nearTestnet = defineChain({
	id: 1_313_161_555,
	name: 'Linea Testnet',
	network: 'linea-testnet',
	nativeCurrency: {
		decimals: 18,
		name: 'Linea ETH',
		symbol: 'ETH',
	},
	rpcUrls: {
		default: { http: ['https://rpc.goerli.linea.build'] },
	},
	blockExplorers: {
		default: {
			name: 'Croak Clash Block Explorer',
			url: 'https://goerli.lineascan.build',
		},
	},
	testnet: true,
})
