import {useOrderEntry} from '@orderly.network/hooks';
import {OrderEntity, OrderSide, OrderType} from '@orderly.network/types';
import {useState} from 'react';
import {ScrollView, Text} from 'react-native';

export const UseOrderEntry = () => {
  const [order, setOrder] = useState<OrderEntity>({
    reduce_only: false,
    side: OrderSide.BUY,
    order_type: OrderType.LIMIT,
    symbol: 'PERP_ETH_USDC',
  });
  const {
    maxQty,
    freeCollateral,
    markPrice,
    estLiqPrice,
    estLeverage,
    formattedOrder,
    helper: {calculate, validator},
    metaState,
    symbolConfig,
  } = useOrderEntry(order, {watchOrderbook: true});

  return (
    <ScrollView>
      <Text>maxQty: {maxQty}</Text>
      <Text>freeCollateral: {freeCollateral}</Text>
      <Text>markPrice: {markPrice}</Text>
      <Text>estLiqPrice: {estLiqPrice}</Text>
      <Text>estLeverage: {estLeverage}</Text>
      <Text>metaState: {JSON.stringify(metaState, null, 2)}</Text>
      <Text>symbolConfig: {JSON.stringify(symbolConfig, null, 2)}</Text>
    </ScrollView>
  );
};
