
"use client"

import * as React from "react"
import "@rainbow-me/rainbowkit/styles.css"

import {
    getDefaultConfig,
    RainbowKitProvider,
    connectorsForWallets,
    getDefaultWallets,
    Chain
} from "@rainbow-me/rainbowkit"

import { WagmiProvider } from "wagmi"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import "dotenv/config"
import { arbitrumSepolia, arbitrum, sepolia, mainnet, filecoin } from "viem/chains"
import { AuthKitProvider } from '@farcaster/auth-kit';

const projectId = "9811958bd307518b364ff7178034c435"

export const config = getDefaultConfig({
    appName: "NebulaID",
    projectId: projectId,
    chains: [arbitrumSepolia, arbitrum, sepolia, mainnet],
    ssr: true // If your dApp uses server side rendering (SSR)
})

const { wallets } = getDefaultWallets({
    appName: "NebulaID",
    projectId
})

const configFarcaster = {
    rpcUrl: 'https://mainnet.optimism.io',
    domain: 'nebulaid.xyz',
    siweUri: 'https://example.com/login',
};


const demoAppInfo = {
    appName: "Universal Identity Protocol"
}

const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = React.useState(false)
    React.useEffect(() => setMounted(true), [])
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <AuthKitProvider config={configFarcaster}>
                    <RainbowKitProvider appInfo={demoAppInfo}>
                            {mounted && children}
                    </RainbowKitProvider>
                </AuthKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    )
}
