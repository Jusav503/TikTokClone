import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import Home from './screens/Home';

export default function App() {
  return (
    <View>
      <Home/>
      <StatusBar style="light" backgroundColor="black" />
    </View>
  );
}
