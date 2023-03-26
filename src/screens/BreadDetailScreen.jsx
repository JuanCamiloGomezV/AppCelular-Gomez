import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import BreadTableInfo from "../components/BreadTableInfo";
import Colors from "../constants/Colors";
import TextStyle from "../constants/TextStyle";
import { useSelector } from "react-redux";

const BreadDetailScreen = () => {
  const bread = useSelector(state => state.breads.selected)
  const [control, setControl] = useState(0);
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.containerImage}>
        <Image
          source={{
            uri: bread.image,
          }}
          style={{ width: 200, height: 200 }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.containerInfo}>
        <Text style={styles.title}>{bread.name}</Text>
        <Text style={{ flex: 1, fontFamily: TextStyle.titleRegular, fontSize:15}}>$ {bread.price[control]}</Text>
        <View style={{ flexDirection: "row" }}>
          {bread.weight.map((weight, index) => (
            <TouchableOpacity
              style={
                index == control
                  ? styles.buttonWeightActive
                  : styles.buttonWeightInactive
              }
              key={index}
              onPress={() => setControl(index)}
            >
              <Text
                style={
                  index == control
                    ? styles.textButtonActive
                    : styles.textButtonInactive
                }
              >
                {weight}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={{ padding: 20, marginBottom:95 }}>
        <Text style={styles.titleDescription}>Descripción:</Text>
        <Text style={{marginBottom:20}}>{bread.description}</Text>
        <Text style={styles.titleDescription}>Información del Producto:</Text>
        <BreadTableInfo bread={bread}/>
      </View>
    </ScrollView>
  );
};

export default BreadDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingBottom: 200,
  },
  containerImage: {
    alignItems: "center",
    justifyContent: "center",
    height: 280,
    width: "100%",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 8,
  },
  containerInfo: {
    padding: 20,
    height: 220,
    alignItems: "stretch",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 8,
  },
  title: {
    fontSize: 20,
    fontFamily: TextStyle.textRegular,
    flex: 1,
  },
  buttonWeightActive: {
    padding: 8,
    backgroundColor: Colors.accent,
    marginRight: 5,
    borderRadius: 6,
    minWidth: 40,
  },
  buttonWeightInactive: {
    padding: 8,
    marginRight: 5,
    borderRadius: 6,
    borderColor: Colors.accent,
    borderWidth: 1,
    minWidth: 40,
  },
  textButtonActive: {
    color: "white",
    fontFamily: TextStyle.textRegular,
    textAlign: "center",
  },
  textButtonInactive: {
    color: "black",
    fontFamily: TextStyle.textRegular,
    textAlign: "center",
  },
  titleDescription: {
    fontFamily: TextStyle.titleRegular,
    fontSize: 20,
    color: Colors.primary,
    marginBottom:20
  },
});
