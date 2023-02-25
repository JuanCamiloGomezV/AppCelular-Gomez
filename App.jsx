import "react-native-get-random-values";

import { Button, Modal, StyleSheet, Text, View } from "react-native";
import { InputItems, List, ModalItem } from "./src/components";
import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const onChangeText = (t) => {
    setItemText(t);
  };

  const addItem = () => {
    setItems([...items, { name: itemText, id: uuidv4(), completed: false }]);
    setItemText("");
  };

  const selectItem = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };
  const removeItem = (id) => {
    setModalVisible(!modalVisible);
    setItems((oldArry) => oldArry.filter((item) => item.id !== id));
    setSelectedItem(null);
  };
  return (
    <View style={styles.container}>
      <InputItems
        onChangeText={onChangeText}
        itemText={itemText}
        addItem={addItem}
      />
      <List items={items} selectItem={selectItem} />
      <View>
        <ModalItem
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          removeItem={removeItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    paddingHorizontal: 10,
  },
});
