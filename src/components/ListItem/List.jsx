import { FlatList, Pressable, StyleSheet, Text } from 'react-native'

import Item from './Item'
import React from 'react'

const List = ({items,selectItem}) => {
  return (
    <FlatList
          data={items}
          renderItem={({ item }) => (
            <Item item={item} selectItem={selectItem}/>
          )}
          keyExtractor={(item) => item.id}
        />
  )
}

export default List

const styles = StyleSheet.create({})