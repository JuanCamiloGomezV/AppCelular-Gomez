import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import Colors from "../constants/Colors";
import Counter from "./Counter";
import TextStyle from "../constants/TextStyle";

const BreadItem = ({ item, onSelect, onAdd }) => {
  const [quantity, setQuantity] = useState(1);
  const addQuantity = () => {
    setQuantity(quantity + 1);
  };
  const removeQuantity = () => {  
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <TouchableOpacity onPress={() => onSelect(item)} style={styles.breadItem}>
      <View
        style={{
          marginRight: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: item.image,
          }}
          style={{ width: 130, height: 130 }}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "stretch",
          height: "100%",
        }}
      >
        <Text style={styles.title} numberOfLines={2}>
          {item.name}
        </Text>
        <Text
          style={[
            styles.detail,
            { fontFamily: TextStyle.titleRegular, fontSize: 15 },
          ]}
        >
          $ {Number(item.price)}
        </Text>

        <View style={{ marginTop: 5 }}>
          <Counter quantity={quantity} addQuantity={addQuantity} removeQuantity={removeQuantity}/>
        </View>
        <TouchableOpacity
          style={[styles.button, { marginTop: 5 }]}
          onPress={() => {
            onAdd({...item,quantity:quantity,total:quantity*item.price});
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontFamily: TextStyle.textRegular,
            }}
          >
            Agregar
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default BreadItem;

const styles = StyleSheet.create({
  breadItem: {
    height: 200,
    flexDirection: "row",
    paddingStart: 7,
    paddingEnd: 20,
    paddingVertical: 10,
    marginHorizontal: 15,
    borderRadius: 6,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 8,
  },
  title: {
    flex: 1,
    flexWrap: "wrap",
    fontSize: 12,
    fontFamily: TextStyle.textRegular,
  },
  detail: {
    flex: 1,
    fontSize: 12,
    fontFamily: TextStyle.textRegular,
    marginVertical: 5,
  },
  button: {
    padding: 10,
    backgroundColor: Colors.primary,
    borderRadius: 6,
  },
  buttonWeightActive: {
    padding: 8,
    backgroundColor: Colors.accent,
    marginRight: 5,
    borderRadius: 6,
    minWidth: 40,
  },
  buttonWeightInactive: {
    padding: 8,
    marginRight: 5,
    borderRadius: 6,
    borderColor: Colors.accent,
    borderWidth: 1,
    minWidth: 40,
  },
  textButtonActive: {
    color: "white",
    fontFamily: TextStyle.textRegular,
    textAlign: "center",
  },
  textButtonInactive: {
    color: "black",
    fontFamily: TextStyle.textRegular,
    textAlign: "center",
  },
});
