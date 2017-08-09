import Vue from 'vue';
import Vuex from 'vuex';
import Hello from "../components/Hello";
import Router from 'vue-router';
import routes from '../router/router';
import Store from '../store';

Vue.use(Router);
Vue.use(Vuex);
console.log("Store",Store);
const router = new Router({routes});
const store = new Vuex.Store(Store);
console.log("store",store);
new Vue({
    // template: '<Hello/>',
    router,
    store,
}).$mount('#app');
