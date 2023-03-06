import "react-native-get-random-values";

import React, { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";

import GameScreen from "./src/screens/GameScreen";
import Header from "./src/components/Header";
import StartGameScreen from "./src/screens/StartGameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle="dark-content"
      />
      <Header title="Adivina el número" />
      {userNumber ? (
        <GameScreen userOption={userNumber} />
      ) : (
        <StartGameScreen onStartGame={startGameHandler} />
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
