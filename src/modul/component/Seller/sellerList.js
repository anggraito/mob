import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import IconFE from 'react-native-vector-icons/Feather';
import { BORDERLINE, DARKSLATE, Font12, MIDNIGHTBLUE, WHITE } from "../../../helpers/globalStyles";
import { handleResponse } from "../../../helpers/toastMessage";
import actionsAPI from "../../../redux/actions/actionAPI/seller";
import HeaderNav from "../../fragment/header"


export default function SellerList({navigation}){
  const dispatch = useDispatch()
  const [sellerList, setSellerList] = useState([])
  const [loadList, setLoadList] = useState(false)
  
  useEffect(() => {
    setLoadList(true)
    listSellerAPI()
  }, [])

  const listSellerAPI = () => {
    dispatch(actionsAPI.get_list_seller())
    .then((res) => {
      if(res.code == 200) setSellerList(res.data)
      setLoadList(false)
      handleResponse(res)
    })
  }

  return(
    <View style={{flex: 1, backgroundColor: WHITE}}>
      <HeaderNav title={'Daftar Penjual'} navigation={navigation} />
      {loadList ?
        <ActivityIndicator size='small' color={MIDNIGHTBLUE} />
      : sellerList.length > 0 ? 
        <View>
          <View style={{backgroundColor: MIDNIGHTBLUE, flexDirection: 'row', padding: 5, borderBottomColor: WHITE, borderBottomWidth: 1}}>
            <Text style={{flex: 0.5, ...Font12('OpenSans-Bold', WHITE), textAlign: 'center'}}>No</Text>
            <Text style={{flex: 2, ...Font12('OpenSans-Bold', WHITE)}}>Nama</Text>
            <Text style={{flex: 2, ...Font12('OpenSans-Bold', WHITE)}}>Kota</Text>
            <Text style={{flex: 1, ...Font12('OpenSans-Bold', WHITE)}}>Jenis</Text>
            <Text style={{flex: 1, ...Font12('OpenSans-Bold', WHITE), textAlign: 'center'}}>Tahun Berdiri</Text>
            <Text style={{flex: 0.5, textAlign: 'left'}}></Text>
          </View>
          <FlatList data={sellerList}
            renderItem={({item, index}) => (
            <TouchableOpacity onPress={() => navigation.navigate('DetailSellerScreen', {idSeller: item.id})}
            style={{flexDirection: 'row', borderBottomColor: BORDERLINE, borderBottomWidth: 0.8, paddingVertical: 10}}>
              <Text style={{flex: 0.5, textAlign: 'center'}}>{index+1}</Text>
              <Text style={{flex: 2}}>{item.nama}</Text>
              <Text style={{flex: 2}}>{item.kota}</Text>
              <Text style={{flex: 1}}>{item.jenis}</Text>
              <Text style={{flex: 1, textAlign: 'center'}}>{item.tahunBerdiri}</Text>
              <IconFE style={{flex: 0.5}} name='arrow-right' size={15} color={DARKSLATE} />
            </TouchableOpacity>
          )} />
        </View>
      : <View>
          <Text>Tidak ada daftar seller</Text>
        </View>}
    </View>
  )
}