import { createApp } from 'vue'
import App from './App.vue'
import Navi from "@/components/naviPage";
import router from "@/router/router";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import axios from "axios";

const app = createApp(App)
const navi = createApp(Navi)

/*전역설정 추후 간소화 필요*/
app.config.globalProperties.$axios = axios
navi.config.globalProperties.$axios = axios

app.use(router).mount('#app')
navi.use(router).mount("#navi")