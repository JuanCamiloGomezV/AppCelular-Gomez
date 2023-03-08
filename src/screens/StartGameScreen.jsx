import { StyleSheet, Text, View } from "react-native";

import Button from "../components/Button";
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
          <Input style={styles.inputCard} />
          <View style={styles.buttonContainerCard}>
            <Button
            styleButtonType={{width:90}}
              color="#7a7a7a"
              colorText='white'
              onPress={() => {}}
              title="Limpiar"
            />
            <Button
            styleButtonType={{width:90}}
              color="#ff9900"
              colorText='white'
              onPress={() => {}}
              title="Confirmar"
            />
          </View>
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
    alignItems: "center",
    padding:13,
    width: 320,
  },
  titleCard: {
    textAlign: "center",
  },
  inputCard: {
    width: 30,
  },
  buttonContainerCard:{
    flexDirection: "row",
    width:"100%",
    justifyContent: "space-around",
  }
});
