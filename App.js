import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import ConStackNavigator from './navigation/conNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="lite-content" backgroundColor={'#000'} />
      <ConStackNavigator/>
    </NavigationContainer >
  );
};