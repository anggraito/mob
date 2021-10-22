import { PixelRatio, Platform } from "react-native"
import { SCREEN_WIDTH } from "./globalStyles"

var scale = SCREEN_WIDTH / 375

export function normalize(size) {
  // return size
  const newSize = size * scale
  if (Platform.OS == 'ios') return Math.round(PixelRatio.roundToNearestPixel(newSize))
  else return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1
}