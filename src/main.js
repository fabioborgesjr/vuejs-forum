import Vue from 'vue';
import App from '@/App';
import router from '@/router';

import '@/assets/styles/_bootstrap.scss'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
