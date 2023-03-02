import { createApp } from 'vue'
import App from './App.vue'
import Navi from "@/components/NaviPage";
import router from "@/router/router";
import globals from './global'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App)
const navi = createApp(Navi)

app.use(globals).use(router).mount('#app')
navi.use(globals).use(router).mount("#navi")