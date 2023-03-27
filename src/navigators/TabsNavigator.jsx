import { StyleSheet, Text, View } from "react-native";

import CartNavigator from "./CartNavigator";
import Colors from "../constants/Colors";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import ProfileNavigator from "./ProfileNavigator";
import React from "react";
import ShopNavigator from "./ShopNavigator";
import TextStyle from "../constants/TextStyle";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";

const BottomTabs = createBottomTabNavigator();

const TabsNavigator = () => {
  const quantity = useSelector((state) => state.cart.amount);
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTabs.Screen
        name="Shop-tab"
        component={ShopNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Entypo
                name="home"
                size={24}
                color={focused ? Colors.primary : "#748C94"}
              />
              <Text
                style={{
                  color: focused ? "#7F5DF0" : "#748C94",
                  fontFamily: TextStyle.textRegular,
                  fontSize: 13,
                }}
              >
                Inicio
              </Text>
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="Cart-tab"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Ionicons
                  name="cart"
                  size={24}
                  color={focused ? Colors.primary : "#748C94"}
                />
                {quantity > 0 && (
                  <View style={styles.quantityContainer}>
                    <Text style={styles.quantity}>{quantity}</Text>
                  </View>
                )}
              </View>
              <Text
                style={{
                  color: focused ? "#7F5DF0" : "#748C94",
                  fontFamily: TextStyle.textRegular,
                  fontSize: 13,
                }}
              >
                Carrito
              </Text>
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="Profile-tab"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <FontAwesome
                name="user"
                size={24}
                color={focused ? Colors.primary : "#748C94"}
              />
              <Text
                style={{
                  color: focused ? "#7F5DF0" : "#748C94",
                  fontFamily: TextStyle.textRegular,
                  fontSize: 13,
                }}
              >
                Perfil
              </Text>
            </View>
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default TabsNavigator;

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5,
    position: "absolute",
    bottom: 25,
    backgroundColor: "#fff",
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
  },
  tabBarIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityContainer: {
    borderWidth: 1,
    borderRadius: 300,
    height: 16.5,
    width: 16.5,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    left: 16,
    bottom: 16,
    borderColor:'#ac0000',
    backgroundColor:'#ac0000'
  },
  quantity: {
    color: "white",
    fontFamily: TextStyle.textRegular,
    fontSize: 11,
  },
});
