import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  handleDecreaseCartItem,
  handleIncreaseCartItem,
} from "../store/actions/cart.action";

import Colors from "../constants/Colors";
import Counter from "./Counter";
import { FontAwesome } from "@expo/vector-icons";
import TextStyle from "../constants/TextStyle";
import { deleteCartItem } from "../store/actions/cart.action";
import { useDispatch } from "react-redux";

const CartItem = ({ item, onDelete }) => {
  const dispatch = useDispatch();
  const [total, setTotal] = useState(item.price * item.quantity);
  const addQuantity = () => {
    dispatch(handleIncreaseCartItem(item.id));
  };
  const removeQuantity = () => {
    if (item.quantity > 1) {
      dispatch(handleDecreaseCartItem(item.id));
    } else {
      dispatch(deleteCartItem(item.id));
    }
  };
  useEffect(() => {
    setTotal(item.price * item.quantity);
  }, [item.quantity]);
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
        <Text style={[styles.text, { marginBottom: 15 }]} numberOfLines={2}>
          {item.name}
        </Text>
        <Text style={[styles.text, { marginBottom: 15 }]}>${item.price}</Text>
        <Counter
          quantity={item.quantity}
          addQuantity={addQuantity}
          removeQuantity={removeQuantity}
          canDelete={true}
        />
        <Text
          style={[
            styles.text,
            {
              marginBottom: 20,
              fontFamily: TextStyle.titleRegular,
              fontSize: 16,
            },
          ]}
        >
          Total: ${total}
        </Text>
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
    backgroundColor: "white",
    flex: 1,
    paddingTop: 10,
    flexDirection: "row",
    paddingRight: 25,
    height: 230,
    alignItems: "center",
  },
  detail: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingEnd: 20,
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
