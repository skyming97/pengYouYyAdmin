import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import { Notification, MessageBox, Loading } from 'element-ui'
import api from '@/api/index'             // 导入api

// 引入v-charts折线图
import VeLine from 'v-charts/lib/line.common'
Vue.component(VeLine.name, VeLine)
import 'v-charts/lib/style.css'

Vue.config.productionTip = true
Vue.prototype.$notify = Notification        // 将elementui中的notification挂载到vue原型
Vue.prototype.$confirm = MessageBox.confirm // 将ele中确认框挂载到vue原型
Vue.prototype.$loading = Loading.service    // 将ele中服务型loading提示挂载到vue原型
Vue.prototype.$api = api                    // 将api挂在到vue原型

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
