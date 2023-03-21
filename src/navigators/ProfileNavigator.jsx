import Colors from "../constants/Colors";
import ProfileScreen from "../screens/ProfileScreen";
import React from "react";
import { StyleSheet } from "react-native";
import TextStyle from "../constants/TextStyle";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
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
        component={ProfileScreen}
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

export default ProfileNavigator;

const styles = StyleSheet.create({});
