import React, { useRef, useState } from 'react'
import { FlatList, TextInput, TouchableOpacity, View, Text, Modal, ActivityIndicator } from 'react-native'
import IconFe from 'react-native-vector-icons/Feather'
import { useDispatch, useSelector } from 'react-redux'
import {Picker} from '@react-native-picker/picker'
import { BG_SET, BORDERLINE, Font16, ITEM_CENTER, OPACITY_BLACK_5, SCREEN_WIDTH, 
  STEELBLUE, WHITE, Font12, Font10, ORANGE_TOMATO, LIGHTLATE } from '../../../helpers/globalStyles'
import { normalize } from '../../../helpers/scallingSize'
import { showToast } from '../../../helpers/toastMessage'
import actionsAPI from '../../../redux/actions/actionAPI/seller'
import HeaderNav from '../../fragment/header'
import { ScrollView } from 'react-native-gesture-handler'
import { checkNumber } from '../../../helpers/checkerFunction'
import actions from '../../../redux/actions'

export default function AddProduct({navigation}) {
  //"id penjual", "nama", “satuan", "harga satuan", dan "deskripsi"
  const [createLoading, setCreateLoading] = useState('')
  const [idSeller, setIdSeller] = useState(0)
  const [nameVal, setNameVal] = useState('')
  const [item, setItem] = useState('')
  const [price, setPrice] = useState(0)
  const [desc, setDesc] = useState('')

  const pickerRef = useRef()
  const dispacth = useDispatch()
  const listSeller = useSelector(state => state.seller)

  const validationSubmit = () => {
    if (idSeller == 0) {showToast('Pilih seller dahulu');return false}
    else if (nameVal === '') { showToast('Isi kolom nama produk ');return false}
    else if (item === '') { showToast('Tentukan satuan produk, exp "kg", "gr');return false}
    else if (!checkNumber(price) ) { showToast('Isi harga hanya dengan angka');return false}
    else if (desc.length < 40) {showToast('Berikan deskripsi minimal 40 karakter');return false}
    else AddProductAPI()
  }

  const AddProductAPI = () => {
    setCreateLoading(true)
    const body = {
      sellerId: idSeller,
      nama: nameVal,
      satuan: item,
      hargaSatuan: price,
      deskripsi: desc
    } 
    dispacth(actions.productAPI.post_item_product(body))
    .then(async(res) => {
      if (res.code == 200) {
        setIdSeller(0);setNameVal('');setItem('')
        setPrice(0);setDesc('')
        await dispacth(actions.productRdx.set_list_produk(res.data, true))
        setTimeout(() => {
          showToast('Berhasil menambah produk')
        },500)
      }
      setCreateLoading(false)
      handleResponse(res)
    }).catch(e => showToast(e.message))
  }

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }


  return (
    <View style={BG_SET}>
      <HeaderNav colorStatus={WHITE} title={'Tambah Produk'} navigation={navigation} />
      <ScrollView>
        <View style={{margin: 20, flex: 1}}>

          <Picker
            ref={pickerRef}
            selectedValue={idSeller}
            style={{backgroundColor: BORDERLINE}}
            onValueChange={(itemValue, itemIndex) =>
              setIdSeller(itemValue)
            }>
              <Picker.Item label='Pilih seller...' value={0} />
              {listSeller.data.map((item, idx) => <Picker.Item label={item.nama} value={item.id} key={idx.toString()} />)}
          </Picker>
          {listSeller.data.length === 0 && <Text style={Font10('OpenSans-Light', ORANGE_TOMATO)}>Jika seller kosong, input seller terlebih dahulu di menu seller</Text>}
          
          <TextInput placeholder={'nama produk'}
            style={{borderWidth: 0.8, borderColor: BORDERLINE, paddingHorizontal: 15, borderRadius: 8, marginVertical: 5}}
            value={nameVal} onChangeText={(text) => setNameVal(text)} />

          <TextInput placeholder={'satuan, exp "kg", "gr"'}
            style={{borderWidth: 0.8, borderColor: BORDERLINE, paddingHorizontal: 15, borderRadius: 8, marginVertical: 5}}
            value={item} onChangeText={(text) => setItem(text)} />

          <TextInput placeholder={'harga produk'} keyboardType={'numeric'}
            style={{borderWidth: 0.8, borderColor: BORDERLINE, paddingHorizontal: 15, borderRadius: 8, marginVertical: 5}}
            value={price} onChangeText={(text) => setPrice(text)} />

          <TextInput placeholder={'deskripsi produk'} multiline={true}
            maxLength={150} numberOfLines={4} 
            style={{borderWidth: 0.8, borderColor: BORDERLINE, textAlignVertical: 'top', paddingHorizontal: 15, borderRadius: 8, marginVertical: 5}}
            value={desc} onChangeText={(text) => setDesc(text)} />

          {/* <TextInput placeholder={'kota'}
          style={{borderWidth: 0.8, borderColor: BORDERLINE, paddingHorizontal: 15, borderRadius: 8, marginVertical: 5}}
          value={cityVal} onChangeText={(text) => setCityVal(text)} /> */}
        </View>
      </ScrollView>
      
      <View style={{height: normalize(60), justifyContent: 'flex-end'}}>
        <TouchableOpacity onPress={() => validationSubmit()} style={{backgroundColor: STEELBLUE, ...ITEM_CENTER, flex: 1}}>
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