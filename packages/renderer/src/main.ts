import { createApp } from 'vue'
import App from './App.vue'
import 'uno.css'
import './samples/node-api'

createApp(App).mount('#app').$nextTick(window.removeLoading)
