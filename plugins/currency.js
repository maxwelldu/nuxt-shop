import Vue from 'vue'
import { currency } from '~/util/currency'
// 注册全局的过滤器currency
Vue.filter('currency', currency)
