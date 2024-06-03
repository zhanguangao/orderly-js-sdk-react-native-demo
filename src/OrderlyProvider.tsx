import React, {PropsWithChildren} from 'react';
import {OrderlyConfigProvider} from '@orderly.network/hooks';
import {Web3OnboardProvider} from './Web3OnboardProvider';
import {KeyStore} from './keyStore/keyStore';

const keyStore = new KeyStore();

export const OrderlyProvider: React.FC<PropsWithChildren> = props => {
  return (
    <Web3OnboardProvider>
      <OrderlyConfigProvider
        brokerId="orderly"
        networkId="mainnet"
        keyStore={keyStore}>
        {props.children}
      </OrderlyConfigProvider>
    </Web3OnboardProvider>
  );
};
