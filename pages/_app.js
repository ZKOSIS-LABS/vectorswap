import '../styles/globals.css';

import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
  midnightTheme,
} from '@rainbow-me/rainbowkit';

import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

// Define the custom Pulse Chain
const PulseChain = {
  id: 943,       
  name: 'Pulse Chain',
  network: 'Pulse-chain',
  nativeCurrency: {
    name: 'PulseX',
    symbol: 'PLS',
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ['https://pulsechain-testnet-rpc.publicnode.com'] },
  },
  blockExplorers: {
    default: { name: 'Pulse Explorer', url: 'https://api.scan.v4.testnet.pulsechain.com' },
  },
  testnet: true,
};

// Configure chains
const { chains, provider } = configureChains(
  [PulseChain], // Only Pulse Chain
  [
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain.id === PulseChain.id) {
          return { http: 'https://pulsechain-testnet-rpc.publicnode.com' };
        }
        return null;
      },
    }),
  ],
);

// Get default wallets
const { connectors } = getDefaultWallets({
  appName: 'Custom Dex',
  chains,
});

// Create wagmi client
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

// Customize theme
const myTheme = {
  ...midnightTheme(),
  colors: {
    ...midnightTheme().colors, // Extend the default colors
    accentColor: '#000000', // Override the accent color
    accentColorForeground: '#fff', // Override the accent color foreground
    modalBackground: '#000000', // Add modal background color
  },
};

// App component
function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={myTheme}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
