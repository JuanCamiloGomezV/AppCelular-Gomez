import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Colors from "../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import TextStyle from "../constants/TextStyle";

const CartItem = ({ item, onDelete }) => {
  return (
    <View style={styles.item}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={{ uri: item.image }}
          style={{ width: 110, height: 110 }}
          resizeMode="contain"
        />
      </View>
        <View style={styles.detail}>
          <Text style={[styles.text,{marginBottom:15}]} numberOfLines={2}>
            {item.name}
          </Text>
          <Text style={[styles.text,{marginBottom:15}]}>${item.price}</Text>
          <View style={[styles.counter,{marginBottom:15}]}>
            <TouchableOpacity style={styles.button}>
              <Ionicons name="remove" size={24} color="white" />
            </TouchableOpacity>
            <Text style={[styles.text, { textAlign: "center", padding: 10 }]}>
              {item.quantity}
            </Text>
            <TouchableOpacity style={styles.button}>
              <Ionicons name="add" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={[styles.text,{marginBottom:20,fontFamily:TextStyle.titleRegular,fontSize: 16}]}>Total: ${item.price * item.quantity}</Text>
        </View>
      <TouchableOpacity
        onPress={() => onDelete(item)}
        style={{ marginLeft: 10 }}
      >
        <FontAwesome name="remove" size={20} color="#a10101" />
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor:'white',
    flex:1,
    paddingTop: 10,
    flexDirection: "row",
    paddingRight: 25,
    height:230,
    alignItems: "center"
  },
  detail: {
    flex: 1,
    flexDirection: "column",
    justifyContent:'center',
  },
  counter: {
    flexDirection: "row",
    backgroundColor: "#dddddd",
    width: 180,
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
