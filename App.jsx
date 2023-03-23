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
import React from "react";
import { RobotoCondensed_700Bold } from "@expo-google-fonts/roboto-condensed";
import ShopNavigator from "./src/navigators/ShopNavigator";

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
      <MainNavigator/>
  );
}

const styles = StyleSheet.create({});
