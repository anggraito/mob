import Snackbar from 'react-native-snackbar'
import { DARKSLATE } from './globalStyles'

export const showToast = (text) => {
    Snackbar.show({
      text: `${text}`,
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: DARKSLATE,
    })
}

export const handleResponse = (res) => {
  if (!res) showToast('Pastikan anda terhubung internet')
  else if (!res.code ) showToast('Tidak ada respon')
  else {
      if (res.code == 200 || res.code == 201) null
      else showToast(res.message) //showToast(`${res.message}`)
  }
}