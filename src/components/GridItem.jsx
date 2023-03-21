import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import TextStyle from "../constants/TextStyle";

const GridItem = ({ item, onSelect }) => {
  return (
    <TouchableOpacity onPress={() => onSelect(item)} style={[styles.grid,{ backgroundColor: item.color }]}>
      <View style={[styles.container, { backgroundColor: item.color }]}>
        <View
          style={{ alignItems: "stretch", justifyContent: "flex-end" }}
        >
          <Image
            source={{ uri: item.image }}
            style={{ width: 80, height: 80 }}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GridItem;

const styles = StyleSheet.create({
  grid: {
    flex:1,
    alignItems:'center',
    margin:8,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    elevation: 3,
    width: 172,
    height:155
  },
  container: {
    height: 90,
    width: 90,
    borderRadius: 300,

    padding: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: TextStyle.titleRegular,
    color: "white",
    fontSize: 18,
  },
});
