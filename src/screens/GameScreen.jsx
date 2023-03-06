import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Button from "../components/Button";
import COLORS from "../constants/Colors";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";

const GameScreen = ({ userOption }) => {
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
    <View style={styles.screen}>
      <Text>La suposicion del oponente</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="MAYOR" onPress={() => {}} color={COLORS.primary} styleTextButton={{color:"white"}} styleButtonType={styles.button}/>
        <Button title="MENOR" onPress={() => {}} color={COLORS.accent} styleTextButton={{color:"white"}} styleButtonType={styles.button}/>
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
        width:300,
        maxWidth:'80%',
        padding:10
    },
    button:{
        width:100
    }
});
