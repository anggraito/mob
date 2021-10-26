import React, { useEffect, useRef, useState } from 'react'
import { FlatList, TextInput, TouchableOpacity, View, Text } from 'react-native'
import IconFe from 'react-native-vector-icons/Feather'
import {Picker} from '@react-native-picker/picker'
import { useDispatch, useSelector } from 'react-redux'
import { BG_SET, BORDERLINE, Font10, Font12, Font14, ITEM_CENTER, LIGHTLATE, 
  ORANGE_TOMATO, 
  SCREEN_WIDTH, SHADOW_LIGHT, WHITE } from '../../helpers/globalStyles'
import { normalize } from '../../helpers/scallingSize'
import CardList from '../fragment/cardList'
import actions from '../../redux/actions'
import HeaderNav from '../fragment/header'
import { handleResponse } from '../../helpers/toastMessage'

export default function HomeScreen({navigation}) {
  const [searchProduk, setSearchProduk] = useState('')
  const [listProduk, setListProduk] = useState([])
  const [loadData, setLoadData] = useState(false)
  const [idSeller, setIdSeller] = useState(0)

  const pickerRef = useRef()
  const dispacth = useDispatch()
  const listSeller = useSelector(state => state.seller)
  
  useEffect(() => {
    getListProductAPI()
  }, [idSeller])

  const getListProductAPI = () => {
    const query = `/listProductBySellerId?seller_id=${idSeller}`
    dispacth(actions.productAPI.get_list_product(query))
    .then(res => {
      console.log('--INI RES------', res)
      handleResponse(res)
    })
  }

  return (
    <View style={BG_SET}>
      <HeaderNav colorStatus={WHITE} title="Mob App" headerVal   />
      <View style={{paddingHorizontal: 20, paddingVertical: 15}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15}}>
          <TouchableOpacity onPress={() => navigation.navigate('AddSellerScreen')}
          style={{flex: 1, ...SHADOW_LIGHT, backgroundColor: WHITE, height: normalize(90), width: SCREEN_WIDTH/3, borderRadius: 8, marginHorizontal: 5, ...ITEM_CENTER}}>
            <IconFe name='plus' size={30} />
            <Text style={Font14('OpenSans-SemiBold')}>Penjual</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AddProductScreen')}
          style={{flex: 1, ...SHADOW_LIGHT, backgroundColor: WHITE, height: normalize(90), width: SCREEN_WIDTH/3, borderRadius: 8, marginHorizontal: 5, ...ITEM_CENTER}}>
            <IconFe name='plus' size={30} />
            <Text style={Font14('OpenSans-SemiBold')}>Produk</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginBottom: 15}}>
          <TextInput placeholder='cari produk' style={{height: normalize(52), backgroundColor: WHITE, borderWidth: 0.8, borderColor: BORDERLINE, borderRadius: 8, paddingRight: 15, paddingLeft: 45}}
            value={searchProduk} onChangeText={(val) => setSearchProduk(val)} />
          <IconFe name='search' size={20} color={LIGHTLATE} style={{position: 'absolute', top: normalize(15), left: 15}} />
        </View>

        <Picker
          ref={pickerRef}
          selectedValue={idSeller}
          style={{backgroundColor: BORDERLINE}}
          onValueChange={(itemValue, itemIndex) =>{
            setIdSeller(itemValue)
          }}>
            <Picker.Item label='Pilih penjual...' value={0} />
            {listSeller.data.map((item, idx) => <Picker.Item label={item.nama} value={item.id} key={idx.toString()} />)}
        </Picker>
        {listSeller.data.length === 0 && <Text style={Font10('OpenSans-Light', ORANGE_TOMATO)}>Jika penjual kosong, input terlebih dahulu di menu penjual</Text>}
        <TouchableOpacity onPress={() => getListProductAPI()}>
          <Text style={[Font14('OpenSans-Regular'), {marginVertical: 10}]}>Daftar List Produk</Text>
        </TouchableOpacity>
        {listProduk.length === 0 ?
        <View style={{marginTop: SCREEN_WIDTH/3, alignItems: 'center'}}>
          <Text style={[Font12('OpenSans-Regular'), {textAlign: 'center'}]}>{`Belum ada produk\n silakan tambah produk`}</Text>
        </View>
        : <FlatList data={listProduk} horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={({item, index}) => index}
        renderItem={({item, index}) => (
          <CardList item={item} />
        )} />}
      </View>
    </View>
  )
}