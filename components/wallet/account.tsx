import { abbreviate } from '@/lib/utils'
import {
    useAccount,
    useDisconnect,
    useEnsAvatar,
    useEnsName,
    useBalance,
} from 'wagmi'

export function Account() {
    const { address } = useAccount()
    const { disconnect } = useDisconnect()
    const { data: ensName } = useEnsName({ address })
    const { data: ensAvatar } = useEnsAvatar({ name: ensName! })
    const { data: balance } = useBalance({ address })

    const shortAddress = abbreviate(address || '', 6)

    return (
        <div className="flex items-center space-x-2">
            {ensAvatar && (
                <img 
                    alt="ENS Avatar" 
                    src={ensAvatar} 
                    className="w-6 h-6 rounded-full"
                />
            )}
            <span className="text-gray-300">
                {ensName || shortAddress}
            </span>
            <button
                onClick={() => disconnect()}
                className="text-sm text-gray-400 hover:text-white transition-colors"
            >
                (Disconnect)
            </button>
        </div>
    )
}
