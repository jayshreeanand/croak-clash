import { nearTestnet } from '@/util/near-testnet'
import { createConfig, http, cookieStorage, createStorage } from 'wagmi'
import { mainnet, } from 'wagmi/chains'

export const config = createConfig({
    chains: [nearTestnet],//, mainnet],
    ssr: true,
    storage: createStorage({
        storage: cookieStorage,
    }),
    transports: {
        [nearTestnet.id]: http(),
        [mainnet.id]: http(),
    },
})
