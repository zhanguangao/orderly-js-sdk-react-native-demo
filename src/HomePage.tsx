import React from 'react';
import {Button, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import WalletConnect from './WalletConnect';
import {routes} from './route';

const HomePage: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View>
      <WalletConnect />

      {routes.map(route => (
        <Button
          key={route.name}
          title={route.title || route.name}
          onPress={() => navigation.navigate(route.name as never)}
        />
      ))}
    </View>
  );
};

export default HomePage;
