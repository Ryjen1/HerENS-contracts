import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import {baseSepolia } from 'wagmi/chains'

export const config = getDefaultConfig({
   appName: 'HerENS',
   projectId: '54ce9aeda9332fba67ac4617e6d7ac1e',
   chains: [baseSepolia],
   ssr: true,
 })

// Add connection timeout and retry configuration
export const walletConnectConfig = {
   projectId: '54ce9aeda9332fba67ac4617e6d7ac1e',
   metadata: {
     name: 'HerENS',
     description: 'The elegant web3 chat dApp for women in blockchain',
     url: typeof window !== 'undefined' ? window.location.origin : 'https://her-ens.vercel.app',
     icons: ['/favicon.ico'],
   },
}