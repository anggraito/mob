import React from 'react'
import { Text, View } from 'react-native'
import { priceSeparator } from '../../helpers/checkerFunction'
import { BORDERLINE, Font12, SNOW } from '../../helpers/globalStyles'

export default function CardList({item, idx, bottomSpace}) {
  return (
    <View key={idx} style={[{backgroundColor: BORDERLINE, flexDirection: 'row', padding: 5}, 
    idx%2 !== 0 && {backgroundColor: SNOW}, bottomSpace && {marginBottom: 25}  ]} >
      <Text style={{flex: 0.5, ...Font12('OpenSans-Regular'), textAlign: 'center'}}>{idx+1}</Text>
      <Text style={{flex: 1, ...Font12('OpenSans-Regular')}}>{item.nama}</Text>
      <Text style={{flex: 2.5, ...Font12('OpenSans-Regular')}}>{item.deskripsi}</Text>
      <Text style={{flex: 0.5, ...Font12('OpenSans-Regular'), textAlign: 'center'}}>{item.satuan}</Text>
      <Text style={{flex: 1.5, ...Font12('OpenSans-Regular'), textAlign: 'right'}}>Rp{priceSeparator(item.hargaSatuan)}</Text>
    </View>
  )
}