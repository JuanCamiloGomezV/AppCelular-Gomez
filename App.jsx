import "react-native-get-random-values";

import React, { useState } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

import Card from "./src/components/Card";
import Header from "./src/components/Header";
import StartGameScreen from "./src/screens/StartGameScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
      animated={true}
      backgroundColor="#ff9900"
      hidden={false}/>
      <Header title="Adivina el número"/>
      <StartGameScreen/>
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
