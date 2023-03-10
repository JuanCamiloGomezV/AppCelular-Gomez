import "react-native-get-random-values";

import * as SplashScreen from 'expo-splash-screen';

import React, { useEffect, useState } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

import Colors from "./src/constants/Colors";
import GameScreen from "./src/screens/GameScreen";
import Header from "./src/components/Header";
import Loader from "./src/components/Loader";
import StartGameScreen from "./src/screens/StartGameScreen";
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'lobster': require('./assets/fonts/Lobster-Regular.ttf'),
  });

  React.useEffect(() =>{
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }

  }, [fontsLoaded])
  const [numberSelected, setNumberSelected] = useState("");
  const [readyToPlay, setReadyToPlay] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{setLoading(false)},3000)
  },[readyToPlay])
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor={Colors.primary} hidden={false} />
      <Header title="Adivina el número" />
      {!readyToPlay ? (
        <StartGameScreen
          setNumberSelected={setNumberSelected}
          numberSelected={numberSelected}
          setReadyToPlay={setReadyToPlay}
        />
      ) : (
        loading?
        <Loader/>:
        <GameScreen userOption={numberSelected} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
  },
});
