import {useState} from 'react';
import {Text, ScrollView} from 'react-native';
import {useOrderbookStream} from '@orderly.network/hooks';

export const UseOrderbookStream = () => {
  const [symbol, setSymbol] = useState('PERP_ETH_USDC');
  const [data, {depth, allDepths, onDepthChange, isLoading}] =
    useOrderbookStream(symbol);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      {<Text>{JSON.stringify(data?.bids, null, 2)}</Text>}
      {<Text>{JSON.stringify(data?.asks, null, 2)}</Text>}
    </ScrollView>
  );
};
