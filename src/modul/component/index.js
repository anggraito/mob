import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { BG_SET, WHITE } from '../../helpers/globalStyles'
import HeaderNav from '../fragment/header'
import ListBoxes from '../fragment/listBoxes'

export default function HomeScreen({navigation}) {
  return (
    <View style={BG_SET}>
      <HeaderNav colorStatus={WHITE} title="Pokemon App" />
      <View style={{paddingHorizontal: 20, paddingVertical: 15}}>
        <ListBoxes textName='List Pokemon' pressAction={() => navigation.navigate('Pokemon')} />
        <ListBoxes textName='List Item' pressAction={() => navigation.navigate('Potion')} />
      </View>
    </View>
  )
}