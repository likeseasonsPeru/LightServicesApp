import React, {useContext} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../context/AuthContext';
import { AdminScreen } from '../screens/AdminScreen';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  const {user} = useContext(AuthContext)
  
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }, ({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            } else if (route.name === 'Admin') {
              iconName = focused ? 'ios-settings' : 'ios-settings-outline';
            }


            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          { user.role === "Arrendador" && (
            <>
              <Tab.Screen name="Admin" component={AdminScreen} />
            </>
          )}
        </Tab.Navigator>
    );
};

export default Tabs;