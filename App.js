import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import Constants from "expo-constants";
import firebase from "firebase/app";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./data/redux/reducers";
import AuthScreen from "./screens/AuthScreen"
import Root from "./navigation/Root";

const store = createStore(rootReducer, applyMiddleware(thunk));

if (firebase.apps.lenght == 0) {
  firebase.initializeApp(Constants.manifest.web.config.firebase);
}

export default function App() {
  return (
    <Provider store={store}>
      <AuthScreen />
      {/* <PaperProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <Root />
          </NavigationContainer>
          <StatusBar style="light" backgroundColor="black" />
        </SafeAreaProvider>
      q </PaperProvider> */}
    </Provider>
  );
}
