import React, { useRef, useState } from 'react'
import { FlatList, TextInput, TouchableOpacity, View, Text, Modal, ActivityIndicator } from 'react-native'
import IconFe from 'react-native-vector-icons/Feather'
import {Picker} from '@react-native-picker/picker'
import { useDispatch } from 'react-redux'
import { BG_SET, BORDERLINE, Font16, ITEM_CENTER, OPACITY_BLACK_5, SCREEN_WIDTH, 
  STEELBLUE, WHITE, Font12 } from '../../../helpers/globalStyles'
import { normalize } from '../../../helpers/scallingSize'
import { showToast } from '../../../helpers/toastMessage'
import actionsAPI from '../../../redux/actions/actionAPI/seller'
import HeaderNav from '../../fragment/header'

export default function AddProduct({navigation}) {
  //"id penjual", "nama", “satuan", "harga satuan", dan "deskripsi"
  const [idSeller, setIdSeller] = useState(null)
  const [nameVal, setNameVal] = useState('')
  const [satuan, setSatuan] = useState('')
  const [price, setPrice] = useState(0)
  const [desc, setDesc] = useState('')

  const pickerRef = useRef()
  const dispacth = useDispatch()

  const AddProductAPI = () => {
    // if (nameVal === '' || cityVal === '') {
    //   showToast('Isi kolom nama dan kota terlebih dahulu')
    //   return false
    // }
    setCreateLoading(true)
    // const body = {
    //   nama: nameVal,
    //   kota: cityVal
    // } 
    // dispacth(actionsAPI.post_seller(body))
    // .then((res) => {
    //   console.log('----->est', res)
    //   if (res.code == 200) {
    //     showToast('Berhasil menambah penjual')
    //     setNameVal('')
    //     setCityVal('')
    //   }
    //   setCreateLoading(false)
    //   handleResponse(res)
    // })
  }

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  const getSeller = () => {
    //dispacth()
  }

  return (
    <View style={BG_SET}>
      <HeaderNav colorStatus={WHITE} title={'Tambah Produk'} navigation={navigation} />
      <View style={{margin: 20, flex: 1}}>
        <Text>Add Product</Text>

        <Picker
          ref={pickerRef}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setIdSeller(itemValue)
          }>
          {/* <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" /> */}
        </Picker>
        
        <TextInput placeholder={'nama'}
        style={{borderWidth: 0.8, borderColor: BORDERLINE, paddingHorizontal: 15, borderRadius: 8, marginVertical: 5}}
        value={nameVal} onChangeText={(text) => setNameVal(text)} />

        <TextInput placeholder={'kota'}
        style={{borderWidth: 0.8, borderColor: BORDERLINE, paddingHorizontal: 15, borderRadius: 8, marginVertical: 5}}
        value={cityVal} onChangeText={(text) => setCityVal(text)} />
      </View>
      <View style={{height: normalize(60), justifyContent: 'flex-end'}}>
        <TouchableOpacity onPress={() => AddProductAPI()} style={{backgroundColor: STEELBLUE, ...ITEM_CENTER, flex: 1}}>
          <Text style={Font16('OpenSans-SemiBold', WHITE)}>Tambah</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={createLoading} transparent>
        <View style={{...ITEM_CENTER, flex: 1}}>
          <View style={{...ITEM_CENTER, backgroundColor: OPACITY_BLACK_5, width: normalize(SCREEN_WIDTH/2), height: normalize(170), borderRadius: 8}}>
            <ActivityIndicator size="large" color={STEELBLUE} style={{marginBottom: 5}} />
            <Text style={Font12('OpenSans-SemiBold', WHITE)}>Tunggu sebentar</Text>
          </View>
        </View>
      </Modal>
    </View>
  )
}