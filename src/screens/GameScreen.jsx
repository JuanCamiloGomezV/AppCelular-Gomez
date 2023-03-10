import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Button from "../components/Button";
import Card from "../components/Card";
import Colors from "../constants/Colors";
import NumberContainer from "../components/NumberContainer";
import TextStyles from "../constants/TextStyles";

const GameScreen = (userOption) => {
  const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  };
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userOption)
  );
  return (
    <View>
      <Text style={styles.title}>La suposición del oponente</Text>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={styles.card}>
          <Button
            title="Menor"
            color={Colors.primary}
            colorText="white"
            styleButtonType={styles.button}
          />
          <Button
            title="Mayor"
            color={Colors.accent}
            colorText="white"
            styleButtonType={styles.button}
          />
        </Card>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    marginVertical: 10,
    fontFamily: TextStyles.regularBold,
  },
  card: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  button: {
    width: 100,
  },
});
