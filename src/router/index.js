import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home/Home'
import Login from '@/view/Login/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/Home',
      name: 'Home',
      component: Home
    },{
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ],
  data () {
    return {
      radio: '1'
    };
  }
})
