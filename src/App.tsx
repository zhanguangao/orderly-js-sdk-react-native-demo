import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OrderlyProvider} from './OrderlyProvider';
import HomePage from './HomePage';
import {routes} from './route';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <OrderlyProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="OrderlySDK"
            component={HomePage}
            options={{title: 'Orderly SDK'}}
          />
          {routes.map(route => (
            <Stack.Screen
              key={route.name}
              name={route.name}
              component={route.component}
              options={{title: route.title || route.name}}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </OrderlyProvider>
  );
}

export default App;
