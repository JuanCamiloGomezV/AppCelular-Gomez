import { Image, StyleSheet, Text, View } from "react-native";

import React from "react";
import TextStyle from '../constants/TextStyle'

const OrderDetailItem = ({ item }) => {
  const { name, description, price, image, quantity } = { ...item };
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 90, height: 90 }}
        source={{
          uri: image,
        }}
        resizeMode="contain"
      />
      <View style={styles.details}>
        <Text style={[styles.text,{marginBottom:10}]}>{name}</Text>
        <Text
          numberOfLines={4}
          style={[styles.text, { fontSize: 11, color: "#818181",marginBottom:5 }]}
        >
          {description}
        </Text>
        <Text style={[styles.text,{fontWeight:'bold', fontSize:16}]}>$ {price}</Text>
      </View>
      <View style={ { marginStart: 15, justifyContent: 'center', alignItems: 'center'} }>
        <Text style={[styles.text,{textAlign:'center'}]}>x{quantity}</Text>
      </View>
    </View>
  );
};

export default OrderDetailItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 25,
    paddingRight:20,
  },
  details: {
    flex: 1,
  },
  text:{
    fontFamily:TextStyle.textRegular
  }
});
