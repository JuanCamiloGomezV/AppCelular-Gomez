import { Keyboard, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import Button from "../components/Button";
import Card from "../components/Card";
import Colors from "../constants/Colors";
import Icon from "react-native-vector-icons/FontAwesome";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import TextStyles from "../constants/TextStyles";

const StartGameScreen = ({
  setNumberSelected,
  numberSelected,
  setReadyToPlay,
}) => {
  const [number, setNumber] = useState("");
  const [confirm, setConfirm] = useState(false);
  const handlerChangeNumber = (newNumber) => {
    setNumber(newNumber.replace(/[^0-9]/g, ""));
  };
  const handlerButtonConfirmClick = () => {
    const numberParser = parseInt(number);
    setNumberSelected(numberParser);
    setConfirm(true);
    setNumber("");
  };
  const handlerCloseCardNumber = () => {
    setConfirm(false);
    setNumberSelected("");
  };
  return (
    <View>
      <Text style={styles.title}>Comenzar Juego</Text>
      <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <Text style={styles.titleCard}>Elije un número</Text>
          <Input
            blurOnSubmit
            style={styles.inputCard}
            onChangeText={handlerChangeNumber}
            value={number}
            keyboardType="number-pad"
            maxLength={2}
            cursorColor="#888888"
          />
          <View style={styles.buttonContainerCard}>
            <Button
              styleButtonType={{ width: 90 }}
              color={Colors.accent}
              colorText="white"
              onPress={() => {
                setNumber("");
              }}
              title="Limpiar"
            />
            <Button
              styleButtonType={{ width: 90 }}
              color={number.length <= 0 ? "#e100ff39" : Colors.primary}
              colorText="white"
              onPress={() => {
                handlerButtonConfirmClick();
                Keyboard.dismiss();
              }}
              title="Confirmar"
              disabled={number.length <= 0 ? true : false}
            />
          </View>
        </Card>
      </View>
      {confirm && (
        <View style={styles.cardContainer}>
          <Card style={styles.numberCard}>
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Icon
                name="close"
                size={15}
                color="#af0000"
                onPress={handlerCloseCardNumber}
              />
            </View>
            <Text style={styles.titleNumberCard}>Tu elección</Text>
            <NumberContainer>{numberSelected}</NumberContainer>
            <Button
              styleButtonType={{ width: 90, marginTop: 10 }}
              color={Colors.primary}
              colorText="white"
              onPress={() => {
                setReadyToPlay(true);
                Keyboard.dismiss();
              }}
              title="Ir a jugar"
            />
          </Card>
        </View>
      )}
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 20,
    fontFamily:TextStyles.regularBold
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
    padding: 13,
    width: 320,
  },
  titleCard: {
    textAlign: "center",
    fontFamily:TextStyles.regular
  },
  inputCard: {
    width: 30,
  },
  buttonContainerCard: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginTop: 10,
  },
  numberCard: {
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  titleNumberCard: {
    marginBottom: 10,
    fontFamily:TextStyles.regularBold
  },
});
