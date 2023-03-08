import { StyleSheet, Text, View } from "react-native";

import React from "react";

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
        borderColor: "#ff9900",
        borderWidth: 1,
        paddingVertical: 20,
        borderRadius: 10,
        minWidth: 40,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
      },
      number: {
        color: "#ff9900",
        fontSize: 25,
      },
});
