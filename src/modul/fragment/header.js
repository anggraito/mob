import React from 'react'
import { StatusBar, View, Text, Image, TouchableOpacity } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import IconFe from 'react-native-vector-icons/Feather'
import { DARKSLATE, defaultPadding, Font16, ROW_BETWEEN_CENTER, SHADOW_OPC, WHITE } from '../../helpers/globalStyles'
import { normalize } from '../../helpers/scallingSize'

export default function HeaderNav({colorStatus, title, hidden, headerVal, iconCancel, navigation}) {

  const isFocused = useIsFocused()

  return (
    <View>
      {/* <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />  */}
      {isFocused ? <StatusBar hidden={hidden} barStyle={colorStatus === WHITE ? "dark-content" : "light-content"} backgroundColor={colorStatus} /> : null}
      {!hidden && <View style={{backgroundColor: WHITE, ...SHADOW_OPC, ...ROW_BETWEEN_CENTER, ...defaultPadding}}>
        {headerVal ? <View style={{width: 10}}/>
        : <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconFe name='arrow-left' size={22} color={DARKSLATE} />
        </TouchableOpacity>}
        <Text style={Font16('OpenSans-SemiBold')}>{title}</Text>
        <View style={{width: 20}}/>
      </View>}
      {iconCancel && <Image />}
    </View>
  )
}