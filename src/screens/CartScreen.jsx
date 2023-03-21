import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { CART } from "../data/cart";
import CartItem from "../components/CartItem";
import Colors from "../constants/Colors";
import React from "react";
import TextStyle from "../constants/TextStyle";

const CartScreen = () => {
  const onDelete = (item) => {
    console.log("delete", item);
  };
  const onConfirm = () => {
    console.log("confirm");
  };
  const renderCartItem = ({ item }) => (
    <CartItem item={item} onDelete={() => onDelete(item)} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={CART}
        keyExtractor={(item) => item.id}
        renderItem={renderCartItem}
        numColumns={1}
        style={styles.list}
      />
      <View style={styles.footer}>
        <TouchableOpacity style={[styles.confirm,{backgroundColor:Colors.primary}]} onPress={onConfirm}>
          <View style={styles.total}>
            <Text style={styles.text}>Continuar la compra:</Text>
            <Text style={styles.text}>$1000</Text>
          </View>
        </TouchableOpacity>
      </View>
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
    padding:15,
    width:'80%',
    borderRadius:10
  },
  total:{
    flexDirection:'row',
    justifyContent: "space-between",
  },
  text:{
    fontFamily:TextStyle.textRegular,
    fontSize:16,
    color:'white'
  }
});
