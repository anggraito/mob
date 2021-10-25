import React, { useState } from 'react'
import { FlatList, TextInput, TouchableOpacity, View, Text, Modal, ActivityIndicator } from 'react-native'
import IconFe from 'react-native-vector-icons/Feather'
import { useDispatch } from 'react-redux'
import { BG_SET, BORDERLINE, Font16, ITEM_CENTER, OPACITY_BLACK_5, SCREEN_WIDTH, 
  STEELBLUE, WHITE, Font12 } from '../../../helpers/globalStyles'
import { normalize } from '../../../helpers/scallingSize'
import { showToast, handleResponse } from '../../../helpers/toastMessage'
// import actions from '../../../redux/actions'
import actionsAPI from '../../../redux/actions/actionAPI/seller'
import actionsReducer from '../../../redux/actions/actionRedux/seller'
import HeaderNav from '../../fragment/header'

export default function AddSeller({navigation}) {
  const [nameVal, setNameVal] = useState('')
  const [cityVal, setCityVal] = useState('')
  const [createLoading, setCreateLoading] = useState('')

  const dispacth = useDispatch()

  const saveSellerAPI = () => {
    if (nameVal === '' || cityVal === '') {
      showToast('Isi kolom nama dan kota terlebih dahulu')
      return false
    }
    setCreateLoading(true)
    const body = {
      nama: nameVal,
      kota: cityVal
    } 
    dispacth(actionsAPI.post_seller(body, dispacth))
    .then((res) => {
      console.log('----->est', res)
      if (res.code == 200) {
        // dispacth(actionsReducer.set_list_seller(res.data))
        // {"code": 200, "data": {"id": 64, "kota": "Jakarta", "nama": "Seli"}, "message": "", "status": "Success"}
        showToast('Berhasil menambah penjual')
        setNameVal('')
        setCityVal('')
      }
      setCreateLoading(false)
      handleResponse(res)
    })
  }

  return (
    <View style={BG_SET}>
      <HeaderNav colorStatus={WHITE} title={'Tambah Seller'} navigation={navigation} />
      <View style={{margin: 20, flex: 1}}>
        <Text>Add Seller</Text>
        
        <TextInput placeholder={'nama'}
        style={{borderWidth: 0.8, borderColor: BORDERLINE, paddingHorizontal: 15, borderRadius: 8, marginVertical: 5}}
        value={nameVal} onChangeText={(text) => setNameVal(text)} />

        <TextInput placeholder={'kota'}
        style={{borderWidth: 0.8, borderColor: BORDERLINE, paddingHorizontal: 15, borderRadius: 8, marginVertical: 5}}
        value={cityVal} onChangeText={(text) => setCityVal(text)} />
      </View>
      <View style={{height: normalize(60), justifyContent: 'flex-end'}}>
        <TouchableOpacity onPress={() => saveSellerAPI()} style={{backgroundColor: STEELBLUE, ...ITEM_CENTER, flex: 1}}>
          <Text style={Font16('OpenSans-SemiBold', WHITE)}>Simpan</Text>
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