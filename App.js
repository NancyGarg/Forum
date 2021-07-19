/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {MyStack} from './src/navigation/Navigation.js';
import HomeScreen from './src/screens/Home/HomeScreen.js';
import ProfileScreen from './src/screens/Profile/ProfileScreen.js';
import PostDetails from './src/screens/PostDetails/PostDetails.js';


const App=() => {

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
 
  );
};

const styles = StyleSheet.create({
 
});

export default App;
