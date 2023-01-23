import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { createPinia, PiniaVuePlugin } from 'pinia'

Vue.use(VueCompositionAPI)
Vue.config.productionTip = false
Vue.use(PiniaVuePlugin)

const pinia = createPinia()

new Vue({
  vuetify,
  pinia,
  render: h => h(App)
}).$mount('#app')
