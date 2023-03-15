import { StyleSheet, Text, View } from "react-native";

import Button from "../components/Button";
import Colors from "../constants/Colors";
import React from "react";

const CategoryBreadScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Ir a detalle"
        color={Colors.accent}
        colorText="white"
        onPress={() => {
          navigation.navigate("Detail");
        }}
      />
    </View>
  );
};

export default CategoryBreadScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
