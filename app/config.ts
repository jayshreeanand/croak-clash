import { creatorTestnet } from '@/util/creator-chain'
import { createConfig, http, cookieStorage, createStorage } from 'wagmi'
import { mainnet, } from 'wagmi/chains'

export const config = createConfig({
    chains: [creatorTestnet],//, mainnet],
    ssr: true,
    storage: createStorage({
        storage: cookieStorage,
    }),
    transports: {
        [creatorTestnet.id]: http(),
        [mainnet.id]: http(),
    },
})
