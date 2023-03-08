import { StyleSheet, Text, View } from "react-native";

import Colors from "../constants/Colors";
import React from "react";
import TextStyle from "../constants/TextStyle";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontFamily:TextStyle.title
  },
});
