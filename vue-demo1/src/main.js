import Vue from 'vue'
import VueRouter from 'vue-router'

import 'animate.css'
import routerConfig from './router-config.js'
import App from './App.vue'

Vue.use(VueRouter)

const router = new VueRouter(routerConfig);

new Vue({
    router: router,
    el: '#app',
    render: h => h(App)
})