import { crossfiTestnet } from '@/util/crossfi-chain'
import { createConfig, http, cookieStorage, createStorage } from 'wagmi'
import { mainnet, } from 'wagmi/chains'

export const config = createConfig({
    chains: [crossfiTestnet],//, mainnet],
    ssr: true,
    storage: createStorage({
        storage: cookieStorage,
    }),
    transports: {
        [crossfiTestnet.id]: http(),
        [mainnet.id]: http(),
    },
})
