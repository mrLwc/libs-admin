import Vue from 'vue'
import App from './App.vue'
// import pack from '../packages/index';
import libs from 'vue-libs-test';
// 注册组件库
Vue.use(libs);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
