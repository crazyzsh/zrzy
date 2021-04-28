import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import axios from 'axios'
// 导入全局组件1
import Navigation from './views/mini/Navigation.vue'
Vue.component("navigation",Navigation)
// 引入cesium插件（适用于vue3）
// import Cesium from 'cesium/Cesium'
// import 'cesium/Widgets/widgets.css'
// Vue.prototype.Cesium = Cesium
// 导入VueCesium
import VueCesium from 'vue-cesium'
Vue.use(VueCesium,{cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js'})
// 引入esri-loader
// import { loadModules } from 'esri-loader';
// 配置请求根路径
axios.defaults.baseURL='http://localhost:3000/'
// 进行配置=>方便Vue中每个组件均可以使用this直接访问到$http进行网络请求
Vue.prototype.$http=axios

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
