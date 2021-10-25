import React, { useState } from 'react'
import { FlatList, TextInput, TouchableOpacity, View, Text } from 'react-native'
import IconFe from 'react-native-vector-icons/Feather'
import { BG_SET, BORDERLINE, Font45, ITEM_CENTER, LIGHTLATE, SCREEN_WIDTH, SHADOW_LIGHT, WHITE } from '../../helpers/globalStyles'
import { normalize } from '../../helpers/scallingSize'
import HeaderNav from '../fragment/header'
// import ListBoxes from '../fragment/listBoxes'

export default function HomeScreen({navigation}) {
  const [searchProduk, setSearchProduk] = useState('')
  const [listProduk, setListProduk] = useState([1,2,3,4,5])
  const [loadData, setLoadData] = useState(false)

  return (
    <View style={BG_SET}>
      <HeaderNav colorStatus={WHITE} title="Mob App" />
      <View style={{paddingHorizontal: 20, paddingVertical: 15}}>
        <View style={{marginBottom: 15}}>
          <TextInput placeholder='cari produk' style={{height: normalize(52), backgroundColor: WHITE, borderWidth: 0.8, borderColor: BORDERLINE, borderRadius: 8, paddingRight: 15, paddingLeft: 45}}
            value={searchProduk} onChangeText={(val) => setSearchProduk(val)} />
          <IconFe name='search' size={20} color={LIGHTLATE} style={{position: 'absolute', top: normalize(15), left: 15}} />
        </View>

        <FlatList data={listProduk} horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={({item, index}) => index}
        renderItem={({item, index}) => (
          <View key={index.toString()}
          style={{height: normalize(185), width: normalize(150), ...SHADOW_LIGHT, marginHorizontal: 5, backgroundColor: WHITE, borderRadius: 8}}>
            <Text>{item}</Text>
          </View>
        )} />
        
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
          <TouchableOpacity onPress={() => console.log('lala')}
          style={{flex: 1, ...SHADOW_LIGHT, backgroundColor: WHITE, height: normalize(90), width: SCREEN_WIDTH/3, borderRadius: 8, marginHorizontal: 5, ...ITEM_CENTER}}>
            <Text style={Font45('OpenSans-SemiBold')}>+</Text>
            <Text>Produk</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('AddSellerScreen')}
          style={{flex: 1, ...SHADOW_LIGHT, backgroundColor: WHITE, height: normalize(90), width: SCREEN_WIDTH/3, borderRadius: 8, marginHorizontal: 5, ...ITEM_CENTER}}>
            <Text>+</Text>
            <Text>Penjual</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}