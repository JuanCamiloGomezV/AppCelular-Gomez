import { Pressable, StyleSheet, Text } from "react-native";

import Button from "../Button";
import React from "react";

const Item = ({item,selectItem}) => {
  return (
    <Button title={item.name}
    styleTextButton={styles.textItem}
    styleButtonType={styles.containerItem}
    onPress={() => {
      selectItem(item)
    }}/>
  );
};

export default Item;

const styles = StyleSheet.create({containerItem: {
    padding: 10,
    backgroundColor: "#00b5fd",
    width: 317,
    borderRadius: 5,
    shadowColor:"black",
    borderWidth: 1,
    borderColor: "#adacac",
    marginVertical: 5,
  },
  textItem:{
    color: "white",
    textAlign: "center",
  }});
