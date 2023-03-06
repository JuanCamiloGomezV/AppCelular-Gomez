import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";

import Button from "../components/Button";
import Card from "../components/Card";
import Colors from "../constants/Colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

//import Button from "../components/Button";

const StartGameScreen = ({ onStartGame }) => {
  const [enteredValue, setEnteredValue] = React.useState("");
  const [confirmed, setConfirmed] = React.useState(false);
  const [selectedNumber, setSelectedNumber] = React.useState("");

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };
  const confirmInputHandler = () => {
    const chooseNumber = parseInt(enteredValue);
    if (
      chooseNumber === NaN ||
      chooseNumber <= 0 ||
      chooseNumber > 99 ||
      enteredValue.length < 1
    ) {
      return;
    } else {
      setConfirmed(true);
      setSelectedNumber(enteredValue);
      setEnteredValue("");
    }
  };
  const handlerResetInput = () => {
    setEnteredValue("");
    setConfirmed(false);
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Comenzar Juego</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.inputDectiptionText}>Elija un numero</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            value={enteredValue}
            onChangeText={numberInputHandler}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <Button
                title="Limpiar"
                onPress={handlerResetInput}
                color={Colors.accent}
                styleTextButton={{ color: "white" }}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirmar"
                onPress={confirmInputHandler}
                color={Colors.primary}
                styleTextButton={{ color: "white" }}
              />
            </View>
          </View>
        </Card>
        {confirmed && (
          <Card style={styles.selectedNumberContainer}>
            <Text>Tu seleccion</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button
              title="Iniciar Juego"
              color={Colors.primary}
              styleTextButton={{color:"white"}}
              onPress={() => {
                onStartGame(selectedNumber);
              }}
            />
          </Card>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    padding: 20,
    alignItems: "center",
  },
  inputDectiptionText: {
    textAlign: "center",
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  buttonsContainer: {
    marginTop: 10,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  selectedNumberContainer:{
    marginTop: 20,
    width: 200,
    maxWidth: '80%',
    padding:10,
    alignItems: 'center',
  }
});
