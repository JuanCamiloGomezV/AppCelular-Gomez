import Colors from '../constants/Colors';
import OrdersScreen from '../screens/OrdersScreen';
import React from 'react'
import { StyleSheet } from 'react-native'
import TextStyle from '../constants/TextStyle';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const OrdersNavigator = () => {
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
        name="Orders"
        component={OrdersScreen}
        options={{
          title: "Mascotalandia",
          headerTitleStyle: {
            fontFamily: TextStyle.titlePrincipal,
            fontSize: 25,
          },
        }}
      />
    </Stack.Navigator>
  )
}

export default OrdersNavigator

const styles = StyleSheet.create({})