import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Home from "./screens/Home";

export default function App() {
  return (
    <SafeAreaView style={{backgroundColor: "black"}}>
      <StatusBar style="light" backgroundColor="black" />
      <Home />
    </SafeAreaView>
  );
}