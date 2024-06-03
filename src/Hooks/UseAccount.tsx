import {useAccount} from '@orderly.network/hooks';
import {Text, View} from 'react-native';

export const UseAccount = () => {
  const {account, state} = useAccount();
  console.log('useAccount', account, state);

  return (
    <View>
      <Text>Address: {state.address}</Text>
    </View>
  );
};
