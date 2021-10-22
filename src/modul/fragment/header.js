import React from 'react'
import { StatusBar, View, Text, Image, TouchableOpacity } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { normalize } from '../../helpers/scallingSize'
import { defaultPadding, ROW_BETWEEN_CENTER, SHADOW_OPC, WHITE } from '../../helpers/globalStyles'

export default function HeaderNav({colorStatus, title, hidden, iconCancel}) {

  const isFocused = useIsFocused()

  return (
    <View>
      {/* <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />  */}
      {isFocused ? <StatusBar hidden={hidden} barStyle={colorStatus === WHITE ? "dark-content" : "light-content"} backgroundColor={colorStatus} /> : null}
      {!hidden && <View style={{backgroundColor: WHITE, ...SHADOW_OPC, ...ROW_BETWEEN_CENTER, ...defaultPadding}}>
        <Text>{title}</Text>
      </View>}
      {iconCancel && <Image />}
    </View>
  )
}