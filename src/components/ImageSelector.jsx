import * as ImagePicker from "expo-image-picker";

import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import TextStyle from "../constants/TextStyle";

const ImageSelector = ({ onImage, savePlaceHandler }) => {
  const [pickedUri, setPickedUri] = useState();

  const VerifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    console.log(status);
    if (status !== "granted") {
      Alert.alert("Permisos insuficientes");
      return false;
    }
    return true;
  };

  const handlerTakeImage = async () => {
    const isCameraOk = await VerifyPermissions();
    if (!isCameraOk) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8,
    });
    console.log(image.assets);
    setPickedUri(image.assets[0].uri);
    onImage(image.assets[0].uri);
  };

  return (
    <View style={styles.container}>
      {pickedUri && (
        <View style={styles.preview}>
          <Image style={styles.image} source={{ uri: pickedUri }} />
        </View>
      )}
      {pickedUri && (
        <TouchableOpacity onPress={savePlaceHandler} style={styles.button}>
          <View style={styles.containerIcon}>
            <AntDesign name="check" size={20} color="black" />
          </View>
          <Text style={styles.textButton}>Guardar</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={handlerTakeImage} style={styles.button}>
        <View style={styles.containerIcon}>
          <AntDesign name="camera" size={20} color="black" />
        </View>
        <Text style={styles.textButton}>Tomar foto de perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  preview: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.primary,
    borderWith: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  button: {
    backgroundColor: "white",
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    marginTop:10
  },
  textButton: {
    color: "black",
    fontFamily: TextStyle.textRegular,
    fontWeight: "bold",
    fontSize: 16,
  },
  containerIcon: {
    backgroundColor: "#F2F2F2",
    padding: 10,
    borderRadius: 50,
    marginRight: 10,
  },
});
