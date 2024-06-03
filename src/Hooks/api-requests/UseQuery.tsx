import {useQuery} from '@orderly.network/hooks';
import {API} from '@orderly.network/types';
import {Text, ScrollView} from 'react-native';

export const UseQuery = () => {
  const {data, error, isLoading} = useQuery<API.Symbol[]>('/v1/public/info');

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  return (
    <ScrollView>
      {data && <Text>{JSON.stringify(data, null, 2)}</Text>}
    </ScrollView>
  );
};
