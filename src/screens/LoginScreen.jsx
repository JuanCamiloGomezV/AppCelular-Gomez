import React,{useState} from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import Colors from "../constants/Colors";
import TextStyle from "../constants/TextStyle";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicia Sesión</Text>

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
      </View>
      <TouchableOpacity
        style={styles.buttonConfirm}
        onPress={() => {}}
      >
        <Text style={styles.buttonTextFocus}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
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
  buttonTextFocus: {
    color: "white",
    fontFamily: TextStyle.textRegular,
    fontSize: 16,
  },
});
