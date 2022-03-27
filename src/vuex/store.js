import { createStore } from "vuex"
import navbarList from "../data/navbarList"
import titleList from "../data/titleList"
import infoList from "../data/infoList"
import educationList from "../data/educationList"
import certificateList from "../data/certificateList"
import workList from "../data/workList"
import skillList from "../data/skillList"
import projectList from "../data/projectList"
import wishList from "../data/wishList"

const store = createStore({
  state() {
    return {
      language: 'vietnamese',
      list: {
        navbarList,
        titleList,
        infoList,
        educationList,
        certificateList,
        workList,
        skillList,
        projectList,
        wishList,
      }
    }
  },
  getters: {
    getTitle: state => title => state.list.titleList[state.language][title],
    getList: state => nameList => state.list[nameList][state.language]
  },
  mutations: {
    changeLanguage(state, payload) {
      state.language = payload
    }
  }
})

export default store