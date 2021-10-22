import React, { useState } from 'react'
import { FlatList, TextInput, TouchableOpacity, View } from 'react-native'
import { BG_SET, WHITE } from '../../helpers/globalStyles'
import HeaderNav from '../fragment/header'
// import ListBoxes from '../fragment/listBoxes'

export default function HomeScreen({navigation}) {
  const [searchProduk, setSearchProduk] = useState('')
  const [listProduk, setListProduk] = useState([])
  const [loadData, setLoadData] = useState(false)

  return (
    <View style={BG_SET}>
      <HeaderNav colorStatus={WHITE} title="Mob App" />
      <View style={{paddingHorizontal: 20, paddingVertical: 15}}>
        <TextInput placeholder='cari produk'
          value={searchProduk} onChangeText={(val) => setSearchProduk(val)}
        />

        <FlatList data={listProduk}
        renderItem={(item, index) => (
          <View>
            <Text>ceritanya</Text>
          </View>
        )} />
        
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity>
            <Text>+</Text>
            <Text>Penjual</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text>+</Text>
            <Text>Penjual</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}