import { StyleSheet, Text, TextInput, View } from 'react-native'

import React from 'react'

const Input = ({style}) => {
  return (
    
    <TextInput style={{...styles.input,...style}} />
  )
}

export default Input

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10,
        textAlign:'center'
      },
})