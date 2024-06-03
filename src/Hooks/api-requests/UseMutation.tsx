import {useMutation} from '@orderly.network/hooks';
import {API, OrderEntity} from '@orderly.network/types';
import {Text, ScrollView} from 'react-native';

export const UseMutation = () => {
  const [createOrder, {data, error, isMutating}] = useMutation<
    OrderEntity,
    any
  >('/v1/order');

  console.log('useMutation', createOrder, data);

  return (
    <ScrollView>
      {data && <Text>{JSON.stringify(data, null, 2)}</Text>}
    </ScrollView>
  );
};
