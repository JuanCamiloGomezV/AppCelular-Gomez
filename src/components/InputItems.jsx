import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React,{useEffect, useState} from "react";

const InputItems = ({onChangeText,itemText,addItem}) => {
  const [isPressable,setIsPressable]= useState(false);
  const activePressable = () =>{
    if(itemText.length > 0){
      setIsPressable(true);
    }
    else{
      setIsPressable(false);
    }
  }
  useEffect(()=>{
    activePressable()
  },[itemText])
  return (
    <View style={styles.containerForm}>
      <TextInput
        onChangeText={onChangeText}
        value={itemText}
        placeholder="Ingrese el Item"
        style={styles.textInput}
      />
      <Pressable onPress={addItem} title="Agregar" style={isPressable ? styles.addInputPressable : styles.addInputNoPressable} disabled={isPressable}>
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
    borderColor: "#e7e7e7",
    backgroundColor:"#f8f8f8",
    borderTopLeftRadius:5,
    borderBottomLeftRadius:5,
    marginRight:-0.1
  },
  addInputPressable:{
    backgroundColor:"#00b5fd",
    padding:8,
    width: "auto",
    height: "auto",
    borderTopRightRadius:5,
    borderBottomRightRadius:5,
    justifyContent: "center",
    alignItems:"center"
  },
  addInputNoPressable:{
    backgroundColor:"#00b5fd3e",
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
