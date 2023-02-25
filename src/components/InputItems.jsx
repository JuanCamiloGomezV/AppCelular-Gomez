import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import React from "react";

const InputItems = ({onChangeText,itemText,addItem}) => {
  return (
    <View style={styles.containerForm}>
      <TextInput
        onChangeText={onChangeText}
        value={itemText}
        placeholder="Ingrese el Item"
        style={styles.textInput}
      />
     
      <Pressable onPress={addItem} title="Agregar" style={styles.addInput}>
        <Text style={styles.addTextInput}>
            Agregar
        </Text>
        </Pressable>
    </View>
  );
};

export default InputItems;

const styles = StyleSheet.create({
  containerForm: {
    justifyContent: "center",
    height: "auto",
    flexDirection: "row",
  },
  textInput: {
    height: "auto",
    borderWidth: 1,
    width: 250,
    textAlign: "center",
    borderColor: "#adacac",
  },
  addInput:{
    backgroundColor:"#00b5fd",
    padding:8,
    width: "auto",
    height: "auto",
    borderTopRightRadius:5,
    borderBottomRightRadius:5,
    justifyContent: "center",
    alignItems:"center"
  },
  addTextInput:{
    color:"white"
  }
});
