import { createApp } from 'vue';
import App from './App'
import router from './router'
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

// 此处新写法
createApp(App).use(router).use(store).mount('#app')
