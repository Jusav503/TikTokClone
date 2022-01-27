import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {Provider as PaperProvider} from 'react-native-paper';
import HomeScreen from "./screens/HomeScreen"

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <HomeScreen />
        <StatusBar style="light" backgroundColor="black" />
      </SafeAreaProvider>
    </PaperProvider>
  );
}
