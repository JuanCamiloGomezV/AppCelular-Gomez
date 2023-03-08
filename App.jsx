import "react-native-get-random-values";

import React, { useState } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

import GameScreen from "./src/screens/GameScreen";
import Header from "./src/components/Header";
import StartGameScreen from "./src/screens/StartGameScreen";

export default function App() {
  const [numberSelected, setNumberSelected] = useState("");
  const [readyToPlay, setReadyToPlay] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#ff9900" hidden={false} />
      <Header title="Adivina el número" />
      {!readyToPlay ? (
        <StartGameScreen
          setNumberSelected={setNumberSelected}
          numberSelected={numberSelected}
          setReadyToPlay={setReadyToPlay}
        />
      ) : (
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
