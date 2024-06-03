import React, {useCallback, useEffect, useMemo} from 'react';
import {
  useWeb3Modal,
  useWeb3ModalAccount,
} from '@web3modal/ethers-react-native';
import {Button} from 'react-native';
import {useAccount} from '@orderly.network/hooks';
import {useWeb3ModalProvider} from '@web3modal/ethers-react-native';
import {AccountStatusEnum} from '@orderly.network/types';

const WalletConnect: React.FC = () => {
  const {open} = useWeb3Modal();
  const {address = '', chainId, isConnected} = useWeb3ModalAccount();
  const {walletProvider} = useWeb3ModalProvider();

  const {
    account,
    state: {status},
    createAccount,
    createOrderlyKey,
  } = useAccount();

  const initAccount = () => {
    account
      .setAddress(address!, {
        provider: walletProvider,
        chain: {
          id: chainId!,
        },
        // wallet: {
        //   name:
        // }
      })
      .then(res => {
        console.log('nextState', res);
      })
      .catch(error => {
        console.log('err', error);
      });
  };

  useEffect(() => {
    if (!isConnected) {
      return;
    }
    initAccount();
  }, [account, isConnected, address, chainId, walletProvider]);

  const buttonLabel = useMemo(() => {
    if (status < AccountStatusEnum.SignedIn) {
      return 'Sign in';
    }
    if (status < AccountStatusEnum.EnableTrading) {
      return 'Enable Trading';
    }
    return '--';
  }, [status]);

  const onClick = useCallback(() => {
    if (status < AccountStatusEnum.SignedIn) {
      createAccount()
        .then(res => {
          console.log('createAccount', res);
        })
        .catch(err => {
          console.log('createAccount error', err);
        });
      return;
    }
    if (status < AccountStatusEnum.EnableTrading) {
      createOrderlyKey(false)
        .then(res => {
          console.log('createOrderlyKey', res);
        })
        .catch(err => {
          console.log('createOrderlyKey error', err);
        });
    }
  }, [status]);

  return (
    <>
      <Button
        title={isConnected ? address! : 'Connect wallet'}
        onPress={() => {
          open();
        }}
      />

      {isConnected && status < AccountStatusEnum.EnableTrading && (
        <Button title={buttonLabel} onPress={onClick} />
      )}
    </>
  );
};

export default WalletConnect;
