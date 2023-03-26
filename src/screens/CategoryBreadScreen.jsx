import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { filterBreads, selectBread } from "../store/actions/breads.action";
import { useDispatch, useSelector } from "react-redux";

import BreadItem from "../components/BreadItem";

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

  const renderHeader = () => {
    return <View style={styles.header}></View>;
  };

  const renderFooter = () => {
    return <View style={styles.footer}></View>;
  };

  const renderSeparator = () => {
    return <View style={styles.separator}></View>;
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categoryBreads}
        keyExtractor={(item) => item.id}
        renderItem={renderBreadItem}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        ItemSeparatorComponent={renderSeparator}
        numColumns={1}
        style={{ paddingBottom: 120, flex: 1 }}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    margin: 10,
  },
  separator: {
    margin: 10,
  },
  footer: {
    margin: 60,
  },
});
export default CategoryBreadScreen;
