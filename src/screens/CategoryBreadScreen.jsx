import { FlatList, StyleSheet, Text, View } from "react-native";

import { BREADS } from "../data/breads";
import BreadItem from "../components/BreadItem";
import React from "react";

const CategoryBreadScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;
  const products = [];
  BREADS.map((item) =>
    item.category.map((category) => {
      if (category == categoryId) {
        products.push(item);
      }
    })
  );
  const onSelectBreadItem = (item) => {
    navigation.navigate("Detail", {
      bread: item,
    });
  };
  const renderBreadItem = ({ item }) => (
    <BreadItem item={item} onSelect={onSelectBreadItem} />
  );
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={renderBreadItem}
      numColumns={1}
    />
  );
};

export default CategoryBreadScreen;
