import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import 'lib-flexible/flexible.js'
import mgjUI from './components'
import 'normalize.css/normalize.css'
import '@/style/index.scss'
import 'vant/lib/toast/style'
import '@/mock'

createApp(App)
    .use(mgjUI)
    .use(store)
    .use(router)
    .mount('#app')
