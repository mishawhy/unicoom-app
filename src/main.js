import Vue from 'vue';
import Axios from 'axios';
import './plugins/vuex';
import store from '@/store';
import './plugins/vuex-router-sync';
import BootstrapVue from 'bootstrap-vue';
import '@/scss/custom.scss';
import VuePlyr from 'vue-plyr';
import 'vue-plyr/dist/vue-plyr.css';
import VueTouch from 'vue-touch';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue2TouchEvents from 'vue2-touch-events';
import VuePhoneNumberInput from 'vue-phone-number-input';
import App from './App.vue';
import { router } from './plugins/vue-router';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';

Vue.component('vue-phone-number-input', VuePhoneNumberInput);
Vue.use(Vue2TouchEvents, { name: 'v-touch' });
Axios.defaults.baseURL = process.env.API_ENDPOINT;

library.add(faCoffee);
Vue.component('font-awesome-icon', FontAwesomeIcon);
// Vue.use(VueTouch);
Vue.use(VuePlyr);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
