import {useEffect, useState} from 'react';
import {useChains, useDeposit} from '@orderly.network/hooks';
import {Text, ScrollView, Button, Alert} from 'react-native';
import {API} from '@orderly.network/types';

const TestnetChainId = 421613;
const MainnetChainId = 42161;

export const UseDeposit = () => {
  const [token, setToken] = useState<API.TokenInfo>();
  const [chains] = useChains('mainnet');

  useEffect(() => {
    chains?.forEach(chain => {
      if (chain.network_infos.chain_id === MainnetChainId) {
        setToken(chain.token_infos?.[0]);
      }
    });
  }, [chains]);

  const {
    dst,
    balance, // The wallet balance of the chosen token
    allowance,
    approve,
    deposit,
    isNativeToken,
    balanceRevalidating,
    fetchBalance,
    setQuantity,
  } = useDeposit({
    address: token?.address,
    decimals: token?.decimals,
    srcToken: token?.symbol,
    srcChainId: MainnetChainId,
  });

  const onApprove = () => {
    approve()
      .then(res => {})
      .catch(err => {
        Alert.alert(err.message);
      });
  };

  const onDeposit = () => {
    deposit()
      .then(res => {})
      .catch(err => {
        Alert.alert(err.message);
      });
  };

  useEffect(() => {
    if (token) {
      setQuantity('1');

      fetchBalance(token.address, token.decimals)
        .then(balance => {
          console.log('fetchBalance', balance);
        })
        .catch(err => {
          console.log('fetchBalance error', err);
        });
    }
  }, [token]);

  return (
    <ScrollView>
      <Text>SRC: {JSON.stringify(token, null, 2)}</Text>
      <Text>DST: {JSON.stringify(dst, null, 2)}</Text>
      <Text>balance: {balance}</Text>
      <Text>allowance: {allowance}</Text>
      <Button onPress={onApprove} title="Approve" />
      <Button onPress={onDeposit} title="Deposit" />
    </ScrollView>
  );
};
