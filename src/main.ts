import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import TDesign from 'tdesign-mobile-vue';
import 'tdesign-mobile-vue/es/style/index.css';

createApp(App).use(TDesign).mount('#app')
