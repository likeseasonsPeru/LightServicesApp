import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import Tabs from './Tabs.Navigator';

const Stack = createNativeStackNavigator();

export const Navigator = ()=> {
  return (
      <Stack.Navigator screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
  );
}
