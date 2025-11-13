import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.scss'
// 导入自定义的store入口文件
import pinia from './store'
// import { createPinia } from 'pinia'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')