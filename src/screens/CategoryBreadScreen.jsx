import React, { useEffect } from "react";
import { filterBreads, selectBread } from "../store/actions/breads.action";
import { useDispatch, useSelector } from "react-redux";

import BreadItem from "../components/BreadItem";
import { FlatList } from "react-native";

const CategoryBreadScreen = ({ navigation }) => {
  const categoryBreads = useSelector((state) => state.breads.filteredBreads);
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categories.selected);
  useEffect(() => {
    dispatch(filterBreads(category.id));
  }, []);

  const onSelectBreadItem = (item) => {
    dispatch(selectBread(item.id));
    navigation.navigate("Detail", {
      bread: item,
    });
  };
  const renderBreadItem = ({ item }) => (
    <BreadItem item={item} onSelect={onSelectBreadItem} />
  );
  return (
    <FlatList
      data={categoryBreads}
      keyExtractor={(item) => item.id}
      renderItem={renderBreadItem}
      numColumns={1}
    />
  );
};

export default CategoryBreadScreen;
