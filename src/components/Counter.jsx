import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import TextStyle from "../constants/TextStyle";

const Counter = ({
  quantity,
  addQuantity,
  removeQuantity,
  canDelete = false,
}) => {
  return (
    <View style={[styles.counter, { marginBottom: 15 }]}>
      <TouchableOpacity style={styles.button} onPress={removeQuantity}>
        {canDelete && quantity === 1 ? (
          <Ionicons name="trash" size={18} color="white" />
        ) : (
          <Ionicons name="remove" size={24} color="white" />
        )}
      </TouchableOpacity>
      <Text style={[styles.text, { textAlign: "center", padding: 10 }]}>
        {quantity}
      </Text>
      <TouchableOpacity style={styles.button} onPress={addQuantity}>
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  counter: {
    flexDirection: "row",
    backgroundColor: "#dddddd",
    width: "100%",
    height: 45,
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 6,
  },
  text: {
    fontSize: 14,
    fontFamily: TextStyle.textRegular,
    flexWrap: "wrap",
    textAlign: "left",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: Colors.primary,
    height: 30,
    width: 30,
    borderWidth: 1,
    borderRadius: 3,
  },
});
