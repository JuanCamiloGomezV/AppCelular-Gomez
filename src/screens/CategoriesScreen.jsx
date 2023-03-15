import { StyleSheet, Text, View } from "react-native";

import Button from "../components/Button";
import Colors from "../constants/Colors";
import React from "react";

const CategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Ir a productos"
        color={Colors.primary}
        colorText="white"
        onPress={() => {
          navigation.navigate("Products");
        }}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
