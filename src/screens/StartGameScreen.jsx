import { StyleSheet, Text, TextInput, View } from "react-native";

import Card from "../components/Card";
import React from "react";

const StartGameScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Comenzar Juego</Text>
      <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <Text style={styles.titleCard}>Elije un número</Text>
          <TextInput style={styles.inputCard} />
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
  },
  titleCard: {
    textAlign: "center",
  },
  inputCard: {
    padding:0,
    margin:0,
    height:50,
    borderBottomWidth:1,
    borderBottomColor:'black',
  },
});
