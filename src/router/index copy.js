import Vue from "vue";
import Router from "vue-router";
import Login from "../components/Login.vue";
import Home from "../components/Home.vue";
import Welcome from "../views/welcome/Welcome.vue";
// import Simulation from "../views/simulation/Simulation.vue";
// import Abouts from "../views/abouts/Abouts.vue";
// import Simulations from "../views/simulation/Simulations.vue";
// import DataManage from "../views/datamanage/DataManage.vue";
import Layers from "../views/layers/Layers.vue";
import Precision from "../views/3d/Precision.vue";
import Measure from "../views/measure/Measure.vue";
// import Ditu from "../views/layers/Ditu.vue"



Vue.use(Router);
const router = new Router({
  routes: [{
      path: "/login",
      component: Login,
    }, {
      path: "/",
      redirect: '/login'
    },
    {
      path: "/home",
      component: Home,
      redirect:"/welcome",
      children:[
        {
          path:'/welcome',
          component:Welcome,
        },
        {
          path:'/1-1',
          component:Layers,
        },
        {
          path:'/2-1',
          component:Layers,
        },
        {
          path:'/3-1',
          component:Precision,
        },
        {
          path:'/3-2',
          component:Precision,
        },
        {
          path:'/4-1',
          component:Measure,
        },]
    },
  ]
})
// 路由导航守卫设置(根据设置的sessionstorage值来判断是否进行了进行了登入操作，如果没有进行登入的话就无法通过直接输入相应的url地址进行访问)
router.beforeEach((to, from, next) => {
  // to表示即将要跳转到的页面
  // from表示从哪个页面进行跳转
  // next是一个函数，表示放行，next('/login')表示强制跳转
  if (to.path === '/login') {
     next()
  }
  var token = window.sessionStorage.getItem('token')
   if (token===null) {
    return next('/login')
  } else {
    next()
  }
})
// 解决Vue-Router升级导致的Uncaught(in promise) navigation guard问题
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

export default router;