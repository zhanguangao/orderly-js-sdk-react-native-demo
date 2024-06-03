import {useAccount, usePrivateQuery} from '@orderly.network/hooks';
import {ScrollView, Text, View} from 'react-native';

export const UsePrivateQuery = () => {
  const {data, isLoading, error} = usePrivateQuery('/v1/client/info');
  const {state} = useAccount();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      <Text>{state.status}</Text>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </ScrollView>
  );
};
