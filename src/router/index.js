import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home.vue'
import Search from "../components/Search/Search.vue"
import WenZhang from "../components/WenZhang/WenZhang.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'Home' }
    },
    {
      path:"/home",
      name: 'Home',
      component:Home
    },
    {
      path:"/search",
      name:"Search",
      component:Search
    },
    {
      path:"/wenzhang/:id",
      name:"WenZhang",
      component:WenZhang
    }
  ]
})
