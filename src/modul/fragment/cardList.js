import React from 'react'
import { Text, View } from 'react-native'

export default function CardList({item}) {
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  )
}