import { Platform, StyleSheet, Text, View } from "react-native";

import BreadDetailScreen from "../screens/BreadDetailScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryBreadScreen from "../screens/CategoryBreadScreen";
import Colors from "../constants/Colors";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import TextStyle from "../constants/TextStyle";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
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
          name="Home"
          component={CategoriesScreen}
          options={{
            title: "Mascotalandia",
            headerTitleStyle: {
              fontFamily: TextStyle.titlePrincipal,
              fontSize: 25,
            },
          }}
        />
        <Stack.Screen
          name="Products"
          component={CategoryBreadScreen}
          options={({ route }) => ({ title: route.params.categoryName })}
        />
        <Stack.Screen
          name="Detail"
          component={BreadDetailScreen}
          options={({ route }) => ({ title: route.params.bread.name })}
        />
      </Stack.Navigator>
  );
};

export default ShopNavigator;

const styles = StyleSheet.create({});
