import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/main.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router';
import { store } from './store'

const app = createApp(App)
app.use(store);
app.use(router);
app.mount('#app')
