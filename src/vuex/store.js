import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      language: 'vietnamese'
    }
  },
  mutations: {
    changeLanguge(state, payload) {
      // console.log(state)
      // console.log(payload);
      state.language = payload
    }
  }
})

export default store