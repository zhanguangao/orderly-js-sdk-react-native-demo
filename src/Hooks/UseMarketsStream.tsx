import {useMarketsStream} from '@orderly.network/hooks';
import {Text, ScrollView} from 'react-native';

export const UseMarketsStream = () => {
  const {data} = useMarketsStream();

  return (
    <ScrollView>
      {data && <Text>{JSON.stringify(data, null, 2)}</Text>}
    </ScrollView>
  );
};
