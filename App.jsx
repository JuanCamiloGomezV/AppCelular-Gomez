import "react-native-get-random-values";

import * as SplashScreen from "expo-splash-screen";

import {
  OpenSans_400Regular,
  OpenSans_700Bold,
  useFonts,
} from "@expo-google-fonts/open-sans";
import { StyleSheet, View } from "react-native";

import { Bangers_400Regular } from "@expo-google-fonts/bangers";
import MainNavigator from "./src/navigators/MainNavigator";
import { Provider } from "react-redux";
import React from "react";
import { RobotoCondensed_700Bold } from "@expo-google-fonts/roboto-condensed";
import ShopNavigator from "./src/navigators/ShopNavigator";
import store from "./src/store";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    RobotoCondensed_700Bold,
    Bangers_400Regular,
  });
  React.useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <MainNavigator/>
      </Provider>
  );
}

const styles = StyleSheet.create({});
