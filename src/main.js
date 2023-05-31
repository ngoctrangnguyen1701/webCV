import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import store from './vuex/store'
import getLanguage from './language/getLanguage'


const app = createApp(App)
app.config.globalProperties.$t = getLanguage

app.use(router)
app.use(store)
app.mount('#app')
