import { Pressable, StyleSheet, Text } from "react-native";

import Button from "../Button";
import React from "react";

const Item = ({item,selectItem}) => {
  return (
    <Button title={item.name}
    styleTextButton={item.completed ? styles.textItemCompleted :styles.textItemIncompleted}
    styleButtonType={item.completed ? styles.containerItemCompleted :styles.containerItemIncompleted}
    onPress={() => {
      selectItem(item)
    }}/>
  );
};

export default Item;

const styles = StyleSheet.create({
  containerItemIncompleted: {
    padding: 10,
    backgroundColor: "#00b5fd",
    width: 317,
    borderRadius: 5,
    borderWidth:1,
    borderColor:"#00648b",
    marginVertical: 5,
  },
  containerItemCompleted: {
    padding: 10,
    backgroundColor: "grey",
    width: 317,
    borderRadius: 5,
    borderWidth:1,
    borderColor:"#505050",
    marginVertical: 5,
  },
  textItemCompleted:{
    color: "white",
    textAlign: "center",
    textDecorationLine:'line-through'
  },
  textItemIncompleted:{
    color: "white",
    textAlign: "center",
    fontWeight: "bold"
  }
});
