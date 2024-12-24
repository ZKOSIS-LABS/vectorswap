import '../styles/globals.css';

import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
  midnightTheme,
} from '@rainbow-me/rainbowkit';

import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

// Define the custom Vector Smart Gas
const VectorSmartGas = {
  id: 420044,       
  name: 'Vector Smart Gas',
  network: 'Vector-Smart-Gas',
  nativeCurrency: {
    name: 'Vector',
    symbol: 'VSG',
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ['https://testnet-rpc.vsgofficial.com'] },
  },
  blockExplorers: {
    default: { name: 'Pulse Explorer', url: 'https://testnet-scan.vsgofficial.com' },
  },
  testnet: true,
};

// Configure chains
const { chains, provider } = configureChains(
  [VectorSmartGas], // Only Vector Smart Gas
  [
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain.id === VectorSmartGas.id) {
          return { http: 'https://testnet-rpc.vsgofficial.com' };
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
