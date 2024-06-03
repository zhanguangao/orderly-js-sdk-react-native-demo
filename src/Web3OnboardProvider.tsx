import '@walletconnect/react-native-compat';
import {
  createWeb3Modal,
  defaultConfig,
  Web3Modal,
} from '@web3modal/ethers-react-native';
import {PropsWithChildren, useEffect, useState} from 'react';

function initConfig() {
  // 1. Get projectId at https://cloud.walletconnect.com
  const projectId = 'e2df8a7d186b83f3027973333f4c72b9';

  // 2. Create config
  const metadata = {
    name: 'Web3Modal RN',
    description: 'Web3Modal RN Example',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886'],
    redirect: {
      native: 'YOUR_APP_SCHEME://',
    },
  };

  const config = defaultConfig({metadata});

  // 3. Define your chains
  const arbitrum = {
    chainId: 42161,
    name: 'Arbitrum',
    currency: 'ETH',
    explorerUrl: 'https://arbiscan.io',
    rpcUrl: 'https://arb1.arbitrum.io/rpc',
  };

  const optimism = {
    chainId: 10,
    name: 'Optimism',
    currency: 'ETH',
    explorerUrl: 'https://explorer.optimism.io',
    rpcUrl: 'https://mainnet.optimism.io',
  };

  const base = {
    chainId: 8453,
    name: 'Base',
    currency: 'ETH',
    explorerUrl: 'https://basescan.org',
    rpcUrl: 'https://mainnet.base.org',
  };

  const chains = [arbitrum, optimism, base];

  return Promise.resolve().then(() => {
    // 4. Create modal
    createWeb3Modal({
      projectId,
      chains,
      config,
      // Optional - defaults to your Cloud configuration
      enableAnalytics: true,
    });
  });
}

export const Web3OnboardProvider: React.FC<PropsWithChildren> = props => {
  const [init, setinit] = useState(false);

  useEffect(() => {
    initConfig().then(() => {
      setinit(true);
    });
  }, []);

  return (
    <>
      {init && props.children}
      <Web3Modal />
    </>
  );
};
