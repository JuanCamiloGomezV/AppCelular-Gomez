import {
  ActivityIndicator,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Colors from "../constants/Colors";
import LoginScreen from "./LoginScreen";
import React from "react";
import TextStyle from "../constants/TextStyle";
import { signUp } from "../store/actions/auth.action";
import { useState } from "react";

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const [controlOptions, setControlOptions] = useState("register");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  const validateForm = () => {
    if (email == "" || password == "") {
      alert("Todos los campos son obligatorios");
      return false;
    }
    if (password != confirmPassword) {
      alert("Las contraseñas no coinciden");
      return false;
    }
    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return false;
    }
    if (!validateEmail(email)) {
      alert("El correo electrónico no es válido");
      return false;
    }
    return true;
  };
  const onHandleRegister = () => {
    if (!validateForm()) {
      return;
    }
    dispatch(signUp(email, password));
  };
  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior="padding"
      keyboardVerticalOffset={-220}
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

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Correo Electrónico"
              placeholderTextColor="#ccc"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              returnKeyType="next"
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              placeholderTextColor="#ccc"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="default"
              returnKeyType="next"
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder="Confirmar Contraseña"
              placeholderTextColor="#ccc"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="default"
              returnKeyType="done"
              onChangeText={(text) => setConfirmPassword(text)}
              secureTextEntry
            />
          </View>
          <TouchableOpacity
            style={styles.buttonConfirm}
            onPress={() => onHandleRegister()}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text style={styles.buttonTextFocus}>Crear Cuenta</Text>
            )}
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
