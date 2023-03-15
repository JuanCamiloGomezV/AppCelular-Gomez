import { StyleSheet, Text, View } from 'react-native'

import BreadDetailScreen from '../screens/BreadDetailScreen'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryBreadScreen from '../screens/CategoryBreadScreen'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={CategoriesScreen}/>
            <Stack.Screen name='Products' component={CategoryBreadScreen} />
            <Stack.Screen name='Detail' component={BreadDetailScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ShopNavigator

const styles = StyleSheet.create({})