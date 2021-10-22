import { Dimensions } from "react-native"
import { normalize } from "./scallingSize"

export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height
export const defaultPadding = { paddingHorizontal: 20, paddingVertical: 15 }

export const WHITE = '#ffffff'
export const WHITESMOKE = '#f7f7f7'
export const GAINSBORO = '#e6e6e6'
export const MIDNIGHTBLUE = '#21386e'
export const DARKGOLDEN = '#c09b05'
export const GOLD = '#fecb07'
export const STEELBLUE = "#3a5ea9"
export const SNOW = '#FCFCFD'
export const DARKSLATE = '#252B42'
export const LIGHTLATE = '#7c7c7c'

export const SHADOW_OPC = {
  shadowColor: DARKSLATE,
  shadowOffset: { width: 0, height: 4 },
  shadowRadius: 8,
  shadowOpacity: 0.1,
  elevation: 1
}

export const SHADOW_LIGHT = {
  shadowColor: DARKSLATE,
  shadowOffset: { width: 0, height: 1},
  shadowOpacity: 0.22,
  shadowRadius: 2.22,
  elevation: 3,
}

export const SHADOW_BOTTOM = {
  shadowColor: DARKSLATE,
  shadowOffset: { width: 0, height: 4 },
  shadowRadius: 6,
  shadowOpacity: 0.2,
  elevation: 3
  //add parent with overflow: 'hidden'
}

export const BG_SET = {flex: 1, backgroundColor: SNOW}

export const ROW_BETWEEN_CENTER = {
  flexDirection: 'row', 
  justifyContent: 'space-between', 
  alignItems: 'center',
}

export const ITEM_CENTER = {
  justifyContent: 'center', 
  alignItems: 'center',
}

export const Font8 = (font, color) => ({
  fontFamily: font,
  fontSize: normalize(8),
  color: color ? color : DARKSLATE, 
  includeFontPadding: false
})

export const Font9 = (font, color) => ({
  fontFamily: font,
  fontSize: normalize(9),
  color: color ? color : DARKSLATE, 
  includeFontPadding: false
})

export const Font10 = (font, color) => ({
  fontFamily: font,
  fontSize: normalize(10),
  color: color ? color : DARKSLATE, 
  includeFontPadding: false
})

export const Font12 = (font, color) => ({
  fontFamily: font,
  fontSize: normalize(12),
  color: color ? color : DARKSLATE, 
  includeFontPadding: false
})

export const Font14 = (font, color) => ({
  fontFamily: font,
  fontSize: normalize(14),
  color: color ? color : DARKSLATE, 
  includeFontPadding: false
})

export const Font16 = (font, color) => ({
  fontFamily: font,
  fontSize: normalize(16),
  color: color ? color : DARKSLATE, 
  includeFontPadding: false
})

export const Font18 = (font, color) => ({
  fontFamily: font,
  fontSize: normalize(18),
  color: color ? color : DARKSLATE, 
  includeFontPadding: false
})

export const Font20 = (font, color) => ({
  fontFamily: font,
  fontSize: normalize(20),
  color: color ? color : DARKSLATE, 
  includeFontPadding: false
})