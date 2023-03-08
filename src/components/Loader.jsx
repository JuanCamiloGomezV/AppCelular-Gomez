import { ActivityIndicator, StyleSheet, View } from 'react-native'

import Colors from '../constants/Colors'
import React from 'react'

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.accent} />
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
    }
})