import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/Home'
import Signin from '../screen/Signin'
import Signup from '../screen/Signup'
import StartScreen from '../screen/StartScreen';
import Brands from '../screen/Brands';
import Profile from '../screen/Profile';
import Category from '../screen/Category';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5'
import DetailScreen from '../screen/DetailScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomePage() {
  return (
    <Tab.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home-outline'
            : 'home-outline';
        } else if (route.name === 'Brands') {
          iconName = focused ? 'ios-list-box' : 'ios-list';
        }
        else if (route.name === 'Category') {
          iconName = focused ? 'duplicate-outline' : 'duplicate-outline';
        }
        else if (route.name === 'Profile') {
          iconName = focused ? 'person-circle-outline' : 'person-circle-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
    >
      <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Tab.Screen name="Brands" component={Brands} options={{headerShown:false}}/>
      <Tab.Screen name="Category" component={Category} options={{headerShown:false}}/>
      {/* <Tab.Screen name="Profile" component={Profile} options={{headerShown:false}}/> */}

    </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="StartScreen" component={StartScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Brands" component={Brands} options={{ headerShown: false }} /> */}
        <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;