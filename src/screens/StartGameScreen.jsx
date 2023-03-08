import { StyleSheet, Text, View } from 'react-native'

import Card from '../components/Card'
import React from 'react'

const StartGameScreen = () => {
  return (
    <View>
      <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <Text>Hola</Text>
        </Card>
      </View>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
    cardContainer:{
        justifyContent: "center",
        alignItems: "center",
        marginTop:10,
      },
      card:{backgroundColor:"white"}
})