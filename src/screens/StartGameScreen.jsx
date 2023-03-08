import { StyleSheet, Text, View } from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import React from "react";

const StartGameScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Comenzar Juego</Text>
      <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <Text style={styles.titleCard}>Elije un número</Text>
          <Input style={styles.inputCard}/>
        </Card>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 20,
  },
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  card: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  titleCard: {
    textAlign: "center",
  },
  inputCard:{
    width:30,
  }
});
