import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
// import router from "./components/02.start/router";
// import router from "./components/03.plus/router";
import router from "./components/04.params/router";

const app = createApp(App)
app.use(router)
app.mount('#app')
