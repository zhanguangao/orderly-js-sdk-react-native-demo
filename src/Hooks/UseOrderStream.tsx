import {useOrderStream} from '@orderly.network/hooks';
import {OrderStatus} from '@orderly.network/types';
import {ScrollView, Text} from 'react-native';

export const UseOrderStream = () => {
  const [
    orders,
    {
      updateOrder,
      updateAlgoOrder,
      updateTPSLOrder,
      cancelOrder,
      cancelAllOrders,
      cancelAlgoOrder,
      cancelAlgoOrdersByTypes,
      cancelTPSLChildOrder,
      cancelAllTPSLOrders,
    },
  ] = useOrderStream({
    status: OrderStatus.NEW,
  });

  return (
    <ScrollView>
      <Text>{JSON.stringify(orders, null, 2)}</Text>
    </ScrollView>
  );
};
