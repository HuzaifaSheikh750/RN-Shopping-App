
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Profile from '../screen/Profile';
import Brands from '../screen/Brands';
import Category from '../screen/Category';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Brands" component={Brands} />
        <Tab.Screen name="Category" component={Category} />
        {/* <Tab.Screen name="jhg"  options={{
          tabBarLabel: 'Log out', */}
        
        //   tabBarVisible: false,
        //   tabBarIcon: ({color, size}) => (
        //     <MaterialCommunityIcons name="login" color={color} size={size} />
        //   ),
        // }} component={Category} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}