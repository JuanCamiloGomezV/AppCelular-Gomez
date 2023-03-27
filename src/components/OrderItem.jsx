import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import TextStyle from "../constants/TextStyle";

const OrderItem = ({ item, onDelete }) => {
  const formatDay = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
  };
  return (
    <TouchableOpacity style={styles.container}>
      {item.itemsCart[0].category.includes(1) ? (
        <View
          style={{ backgroundColor: "#6699CC", padding: 9, borderRadius: 300 }}
        >
          <Image
            style={{ width: 43, height: 43 }}
            source={{
              uri: "https://i.postimg.cc/htVhXmjW/46888.png",
            }}
            resizeMode="contain"
          />
        </View>
      ) : (
        <View
          style={{ backgroundColor: "#CB8BBB", padding: 9, borderRadius: 300 }}
        >
          <Image
            style={{ width: 43, height: 43 }}
            source={{
              uri: "https://i.postimg.cc/xdTnypYQ/ilustracion-vector-dibujos-animados-caminando-gato-rojo-360341-289-removebg-preview-1.png",
            }}
            resizeMode="contain"
          />
        </View>
      )}

      <View style={{}}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <Text style={{ fontSize: 18, fontFamily: TextStyle.titleRegular }}>
            Pedido:{" "}
          </Text>
          <Text style={[styles.text, { fontWeight: "bold" }]}>
            {item.itemsCart.length} producto{item.itemsCart.length > 1 && "s"}
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <Text style={[styles.text, { fontWeight: "bold" }]}>Realizado: </Text>
          <Text style={styles.text}>{formatDay(item.date)}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.text, { fontWeight: "bold" }]}>Precio: </Text>
          <Text style={styles.text}>$ {item.totalCart}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonNext} onPress={()=>onDelete(item.id)}>
        <FontAwesome name="remove" size={18} color="#a10101" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonNext: {
    borderWidth: 1,
    borderColor: "#e6e6e6",
    backgroundColor: "#e6e6e6",
    borderRadius: 300,
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: TextStyle.textRegular,
  },
});
