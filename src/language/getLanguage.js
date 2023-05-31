import store from '@/vuex/store'

import vn from './vn'
import en from './en'


function getLanguage(string) {
  const lang = store.state.language
  if(lang == 'vietnamese') {
    return vn[string] || `vn.${string}`
  }
  return en[string] || `en.${string}`
}

export default getLanguage