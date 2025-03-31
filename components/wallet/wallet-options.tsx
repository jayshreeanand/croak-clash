'use client'

import * as React from 'react'
import { Connector, useConnect } from 'wagmi'
import { Button } from '../ui/button'

export function WalletOptions() {
    const { connectors, connect } = useConnect()
    const metamask = connectors.find(c => c.name === 'MetaMask')

    if (!metamask) return null

    return (
        <button
            className="px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 font-medium"
            onClick={() => connect({ connector: metamask })}
        >
            Login with MetaMask
        </button>
    )
}

function WalletOption({
    connector,
    onClick,
}: {
    connector: Connector
    onClick: () => void
}) {
    const [ready, setReady] = React.useState(false)

    React.useEffect(() => {
        ;(async () => {
            const provider = await connector.getProvider()
            setReady(!!provider)
        })()
    }, [connector])

    return (
        <button
            className="underline text-blue-500 ml-4"
            disabled={!ready}
            onClick={onClick}
        >
            Login with {connector.name}
        </button>
    )
}
