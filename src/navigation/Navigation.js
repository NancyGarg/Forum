import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import PostDetails from '../screens/PostDetails/PostDetails';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'My Home',
          headerStyle: {
            backgroundColor: '#018FB5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            alignSelf: 'center',
            textAlign: 'center',
            flex: 1,
          },
        }}
      />
      <Stack.Screen
        name="Post"
        component={PostDetails}
        options={{
          title: 'Details',
          headerStyle: {
            backgroundColor: '#018FB5',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          headerStyle: {
            backgroundColor: '#018FB5',
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
}
