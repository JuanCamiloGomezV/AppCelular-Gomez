import { StyleSheet, Text, View } from "react-native";

import Colors from "../constants/Colors";
import React from "react";
import TextStyles from "../constants/TextStyles";

const NumberContainer = ({style,children}) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={{...styles.number,...style}}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
    numberContainer: {
        borderColor: Colors.accent,
        borderWidth: 1,
        paddingVertical: 20,
        borderRadius: 10,
        minWidth: 40,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
      },
      number: {
        color: Colors.accent,
        fontSize: 25,
        fontFamily:TextStyles.regularBold
      },
});
