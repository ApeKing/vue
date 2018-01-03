import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import SonOne from './components/SonOne.vue'
import SonTwo from './components/SonTwo.vue'
import SonThree from './components/SonThree.vue'
import SonFour from './components/SonFour.vue'
// 给每个路由规则中的组件实例(this)添加两个属性
// (this.$router)
// (this.$route)
Vue.use(VueRouter) 

// 配置规则
const router = new VueRouter({
  routes: [
    {
      name: 'index',
      path: '/',
      redirect: '/home'
    },
    {
      name: 'home',
      path: '/home',
      component: Home,
      children: [
        {
          name: 'son1',
          path: '/son1',
          component: SonOne
        },
        {
          name: 'son2',
          path: '/son2',
          component: SonTwo
        },
        {
          name: 'son3',
          path: '/son3',
          component: SonThree
        },
        {
          name: 'son4',
          path: '/son4',
          component: SonFour
        },
    ]
    }
  ]

})

export default router