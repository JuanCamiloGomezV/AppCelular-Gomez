import { Platform, StyleSheet, Text, View } from "react-native";

import CartScreen from "../screens/CartScreen";
import Colors from "../constants/Colors";
import React from "react";
import TextStyle from "../constants/TextStyle";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "white",
        },
        headerTintColor: Colors.primary,
        statusBarStyle: "dark",
        headerTitleStyle: {
          fontFamily: TextStyle.titleRegular,
          fontSize: 20,
        },
      }}
    >
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: "Mascotalandia",
          headerTitleStyle: {
            fontFamily: TextStyle.titlePrincipal,
            fontSize: 25,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default CartNavigator;

const styles = StyleSheet.create({});
