import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { useDispatch } from "react-redux"
import { DARKSLATE, Font12, MIDNIGHTBLUE, WHITE } from "../../../helpers/globalStyles"
import { handleResponse } from "../../../helpers/toastMessage"
import actionsAPI from "../../../redux/actions/actionAPI/seller"
import HeaderNav from "../../fragment/header"

export default function DetailSeller({navigation, route}) {
  const dispacth = useDispatch()
  const [detailSeller, setDetailSeller] = useState({})
  const {idSeller} = route.params

  useEffect(() => {
    detailSellerAPI()
  }, [])

  const detailSellerAPI = () => {
    dispacth(actionsAPI.get_detail_seller(idSeller))
    .then((res) => {
      // console.log('resss---', res)
      if (res.code == 200) setDetailSeller(res.data)
      handleResponse(res)
    })
  }

  console.log('idSeller', route, detailSeller)

  return(
    <View style={{flex: 1}}>
      <HeaderNav title={'Detail seller'} navigation={navigation} />
      <View style={{flexDirection: 'row', padding: 10}}>
        <View style={{flex: 1, backgroundColor: MIDNIGHTBLUE, paddingVertical: 5}}>
          <Text style={styles.textWhite}>Nama</Text>
          <Text style={styles.textWhite}>Kota</Text>
          <Text style={styles.textWhite}>Jenis</Text>
          <Text style={styles.textWhite}>Tahun Berdiri</Text>
        </View>
        <View style={{flex: 1, backgroundColor: WHITE, paddingVertical: 5}}>
          <Text style={styles.textLatte}>{detailSeller.nama}</Text>
          <Text style={styles.textLatte}>{detailSeller.kota}</Text>
          <Text style={styles.textLatte}>{detailSeller.jenis == null ? '-' : detailSeller.jenis}</Text>
          <Text style={styles.textLatte}>{detailSeller.tahunBerdiri == null ? '-' : detailSeller.tahunBerdiri}</Text>
        </View>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create ({
  textWhite: {
    ...Font12('OpenSans-Bold', WHITE),
    paddingHorizontal: 10,
    paddingVertical: 2
  },
  textLatte: {
    ...Font12('OpenSans-Regular', DARKSLATE),
    paddingHorizontal: 10,
    paddingVertical: 2
  }
})