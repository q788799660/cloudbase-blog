// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Cloudbase from "@cloudbase/vue-provider";
import config from "../cloudbaserc";
/* eslint-disable no-new */
Vue.config.productionTip = false;

Vue.use(Cloudbase, {
  env: config.envId,
});


new Vue({
  el: '#app',
  router,
  render: h => h(App) 
})
