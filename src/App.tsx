import React from 'react';

import {SafeAreaView, StatusBar} from 'react-native';

import {OrderlyConfigProvider} from '@orderly.network/hooks';
import WalletConnect from './WalletConnect';
import {ConnectProvider} from './ConnectProvider';
import {KeyStore} from './keyStore/keyStore';

const keyStore = new KeyStore();

function App(): React.JSX.Element {
  return (
    <ConnectProvider>
      <OrderlyConfigProvider
        brokerId="orderly"
        networkId="mainnet"
        keyStore={keyStore}>
        <SafeAreaView>
          <StatusBar />
          <WalletConnect />
        </SafeAreaView>
      </OrderlyConfigProvider>
    </ConnectProvider>
  );
}

export default App;
