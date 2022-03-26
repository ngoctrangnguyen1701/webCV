import { createStore } from "vuex"
import navbarList from "../data/navbarList"

const store = createStore({
  state() {
    return {
      language: 'vietnamese'
    }
  },
  getters: {
    navbarList(state) {
      return state.language === 'vietnamese' ? navbarList.vietnamese : navbarList.english
    }
  },
  mutations: {
    changeLanguge(state, payload) {
      state.language = payload
    }
  }
})

export default store