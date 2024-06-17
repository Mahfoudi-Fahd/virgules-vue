import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
// import Vue from 'vue';
import Notification from './components/Notification.vue';



const app = createApp(App)

app.use(router)

app.mount('#app')
