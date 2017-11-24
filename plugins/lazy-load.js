import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  loading: '/loading-svg/loading-bars.svg',
  try: 3
})
