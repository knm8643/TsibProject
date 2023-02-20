import axios from 'axios'
export default {
    install (vue) {
        vue.config.globalProperties.$axios = axios
    }
}
