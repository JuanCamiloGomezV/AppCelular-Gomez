import { FlatList, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import GridItem from "../components/GridItem";
import React from "react";
import { selectCategory } from "../store/actions/category.action";

const CategoriesScreen = ({ navigation }) => {
  
  const categories = useSelector(state=>state.categories.categories)
  const dispatch = useDispatch()

  const onSelectGridItem = (item) => {
    dispatch(selectCategory(item.id))
    navigation.navigate("Products",{categoryName:item.title})
  };
  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelect={() => onSelectGridItem(item)} />
  );
  return (
    <View style={{flex:1}}>
      <View style={{backgroundColor:'white', marginTop:7}}>
      <FlatList
        data={categories}
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

