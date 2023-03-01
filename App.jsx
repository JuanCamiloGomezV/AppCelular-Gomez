import "react-native-get-random-values";

import {
  Image,
  Keyboard,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
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
  const completedItem = (id) => {
    const itemChange = items.find((item) => item.id == id);
    itemChange.completed = !itemChange.completed;
    setItems((oldArry) => oldArry.filter((item) => item.id !== id));
    setSelectedItem(null);
    setModalVisible(!modalVisible);
    setItems(items);
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor="white"
          barStyle="dark-content"
        />
        <Image
          style={styles.logo}
          source={{
            uri: "https://media2.giphy.com/media/1Pn9VCFR6LxWDJaTvq/giphy.gif?cid=ecf05e47j8n1rhy4qplknwo28cbqnlwi9k2atf45377lky4x&rid=giphy.gif&ct=s",
          }}
        />
        <InputItems
          onChangeText={onChangeText}
          itemText={itemText}
          addItem={addItem}
        />
        <List items={items} selectItem={selectItem} />
        <ModalItem
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          removeItem={removeItem}
          completedItem={completedItem}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height:"100%",
    width:"100%",
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
});
