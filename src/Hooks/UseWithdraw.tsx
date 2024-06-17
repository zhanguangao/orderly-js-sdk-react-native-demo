import {Text, ScrollView, Button, Alert} from 'react-native';
import {useWithdraw} from '@orderly.network/hooks';

const TestnetChainId = 421613;
const MainnetChainId = 42161;

export const UseWithdraw = () => {
  const {withdraw, isLoading, maxAmount, availableBalance, unsettledPnL} =
    useWithdraw();

  const onWithdraw = () => {
    withdraw({
      amount: '1',
      token: 'USDC',
      chainId: MainnetChainId,
      allowCrossChainWithdraw: false,
    })
      .then(res => {})
      .catch(err => {
        Alert.alert(err.message);
      });
  };

  return (
    <ScrollView>
      <Text>maxAmount: {maxAmount}</Text>
      <Text>availableBalance: {availableBalance}</Text>
      <Text>unsettledPnL: {unsettledPnL}</Text>
      <Button onPress={onWithdraw} title="withdraw" />
    </ScrollView>
  );
};
