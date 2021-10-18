import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import TabTwoScreen from "../screens/TabTwoScreen";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false, title: 'Post',}} name="root" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      screenOptions={{headerShown: false}}
      barStyle={{ backgroundColor: "#694fad", paddingBottom: 48 }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={TabTwoScreen}
        options={{
          title: "Tab Two",
        }}
      />
    </BottomTab.Navigator>
  );
}
