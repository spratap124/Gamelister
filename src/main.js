import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import header from './components/header.vue'
import productList from './components/productList.vue'
import platform from './components/platform.vue'
import editorsChoice from './components/editorsChoice.vue'

Vue.use(VueResource);


//componensts
Vue.component('Header',header);
Vue.component('ProductList',productList);
Vue.component('platform', platform);
Vue.component('editorsChoice', editorsChoice);



new Vue({
  el: '#app',
  render: h => h(App)
})
