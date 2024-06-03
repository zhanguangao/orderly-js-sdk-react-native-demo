import {useChains} from '@orderly.network/hooks';
import {Text, ScrollView} from 'react-native';

export const UseChains = () => {
  const [chains] = useChains();

  return (
    <ScrollView>
      <Text>{JSON.stringify(chains, null, 2)}</Text>
    </ScrollView>
  );
};
