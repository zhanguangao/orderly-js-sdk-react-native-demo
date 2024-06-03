import {useMarketTradeStream} from '@orderly.network/hooks';
import {Text, ScrollView, View} from 'react-native';

export const UseMarketTradeStream = () => {
  const {data, isLoading} = useMarketTradeStream('PERP_ETH_USDC');

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  return (
    <ScrollView>
      {data.map(item => {
        return (
          <View
            key={item.ts}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text>{item?.price}</Text>
            <Text>{item?.size}</Text>
            <Text>{item?.side}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};
