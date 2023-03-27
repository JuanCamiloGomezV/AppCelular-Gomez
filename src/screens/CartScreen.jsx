import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CartItem from "../components/CartItem";
import Colors from "../constants/Colors";
import TextStyle from "../constants/TextStyle";
import { deleteCartItem } from "../store/actions/cart.action";

const CartScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const stateTotal = useSelector((state) => state.cart.total);

  const onDelete = (item) => {
    dispatch(deleteCartItem(item.id));
  };
  const onConfirm = () => {
    console.log("confirm");
  };
  const renderCartItem = ({ item }) => (
    <CartItem item={item} onDelete={() => onDelete(item)} />
  );
  return (
    <View style={styles.container}>
      {stateTotal > 0 ? (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={renderCartItem}
            numColumns={1}
            style={styles.list}
            ItemSeparatorComponent={() => <View style={{ height: 7 }} />}
          />
          <View style={styles.footer}>
            <TouchableOpacity
              style={[styles.confirm, { backgroundColor: Colors.primary }]}
              onPress={onConfirm}
            >
              <View style={styles.total}>
                <Text style={styles.text}>Continuar la compra:</Text>
                <Text style={styles.text}>$ {stateTotal}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center",paddingHorizontal:55 }}
        >
          <Text style={{ fontFamily: TextStyle.textRegular, fontSize: 20 }}>
            No hay productos en el carrito
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.primary,
              padding: 10,
              borderRadius: 10,
              marginTop: 10,
              width: "100%",
            }}
            onPress={() => navigation.navigate("Home")}
          >
            <Text
              style={{
                fontFamily: TextStyle.textRegular,
                color: "white",
                textAlign:'center'
              }}
            >
              Volver a comprar
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 130,
  },
  footer: {
    padding: 12,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  confirm: {
    padding: 15,
    width: "80%",
    borderRadius: 10,
  },
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontFamily: TextStyle.textRegular,
    fontSize: 16,
    color: "white",
  },
});
