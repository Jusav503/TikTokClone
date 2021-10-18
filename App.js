import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeScreen from "./screens/HomeScreen"

export default function App() {
  return (
    <SafeAreaProvider>
      <HomeScreen />
      <StatusBar style="light" backgroundColor="black" />
    </SafeAreaProvider>
  );
}
