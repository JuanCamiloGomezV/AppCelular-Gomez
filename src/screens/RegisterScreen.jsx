import {
  ActivityIndicator,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Colors from "../constants/Colors";
import LoginScreen from "./LoginScreen";
import React from "react";
import TextStyle from "../constants/TextStyle";
import { useState } from "react";

const RegisterScreen = () => {
  const [controlOptions, setControlOptions] = useState("register");
  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior="padding"
      keyboardVerticalOffset={-60}
    >
      <View
        style={{
          backgroundColor: Colors.primary,
          height: "50%",
          width: "100%",
          position: "absolute",
          top: 0,
        }}
      />
      <View style={styles.options}>
        <Text style={styles.textLogo}>Mascotalandia</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={
              controlOptions == "register" ? styles.buttonFocus : styles.button
            }
            onPress={() => setControlOptions("register")}
          >
            <Text
              style={
                controlOptions == "register"
                  ? styles.buttonTextFocus
                  : styles.buttonText
              }
            >
              Regístrarse
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              controlOptions == "login" ? styles.buttonFocus : styles.button
            }
            onPress={() => setControlOptions("login")}
          >
            <Text
              style={
                controlOptions == "login"
                  ? styles.buttonTextFocus
                  : styles.buttonText
              }
            >
              Iniciar Sesión
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {controlOptions == "register" ? (
        <View style={styles.container}>
          <Text style={styles.title}>Regístrate</Text>

          <View style={styles.form}></View>
          <TouchableOpacity style={styles.buttonConfirm}>
            <Text style={styles.buttonTextFocus}>Crear Cuenta</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <LoginScreen />
      )}
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
  textLogo: {
    color: "white",
    fontFamily: TextStyle.titlePrincipal,
    fontSize: 30,
  },
  container: {
    backgroundColor: "white",
    height: "70%",
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    padding: 30,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: Colors.primary,
  },
  title: {
    color: Colors.primary,
    fontFamily: TextStyle.titleRegular,
    fontSize: 30,
    marginBottom: 20,
  },
  form: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "white",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    marginBottom: 13,
    borderWidth: 1,
    borderColor: "#ccc",
    fontFamily: TextStyle.textRegular,
    fontSize: 16,
  },
  buttonConfirm: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  options: {
    height: "30%",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
  buttonContainer: {
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderRadius: 10,
  },
  button: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    width: "40%",
    alignItems: "center",
  },
  buttonFocus: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 10,
    width: "40%",
    alignItems: "center",
  },
  buttonText: {
    color: Colors.primary,
    fontFamily: TextStyle.textRegular,
    fontSize: 16,
  },
  buttonTextFocus: {
    color: "white",
    fontFamily: TextStyle.textRegular,
    fontSize: 16,
  },
});
