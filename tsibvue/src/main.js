import { createApp } from 'vue'
import App from './App.vue'
import Navi from "@/components/naviPage";
import router from "@/router/router";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

createApp(App).use(router).mount('#app')
createApp(Navi).use(router).mount("#navi")