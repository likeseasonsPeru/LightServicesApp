import React, {useContext} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import Tabs from './Tabs.Navigator';
import { AuthContext } from '../context/AuthContext';

const Stack = createNativeStackNavigator();

export const Navigator = ()=> {
  const {token} = useContext(AuthContext)
  console.log(token, "token")
  return (
      <Stack.Navigator screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
        {
          token === null ? (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
            </>
          ) : (
            <Stack.Screen name="Tabs" component={Tabs} />
          )
        }
        
      </Stack.Navigator>
  );
}
