import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
Axios.defaults.baseURL = 'http://localhost:3000'
Axios.defaults.withCredentials = true
Vue.use(VueAxios, Axios)
