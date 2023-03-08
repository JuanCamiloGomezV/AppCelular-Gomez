import { StyleSheet, Text, View } from "react-native";

import React from "react";

const Card = ({children,style}) => {
  return (
    <View style={{...styles.card,...style}}>
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    width:"auto",
    height: "auto",
    backgroundColor: "white",
    padding:10,
    borderRadius:10
  },
});
