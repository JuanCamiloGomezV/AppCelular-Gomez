import { FlatList, ScrollView, StyleSheet, View } from "react-native";

import { CATEGORIES } from "../data/categories";
import Colors from "../constants/Colors";
import GridItem from "../components/GridItem";
import React from "react";

const CategoriesScreen = ({ navigation }) => {
  const onSelectGridItem = (item) => {
    navigation.navigate("Products", {
      categoryId: item.id,
      categoryName: item.title,
    });
  };
  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelect={() => onSelectGridItem(item)} />
  );
  return (
    <View style={{flex:1}}>
      <View style={{backgroundColor:'white', marginTop:7}}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderGridItem}
        numColumns={2}
        style={{padding:10}}
      />
      </View>
    </View>
  );
};

export default CategoriesScreen;
