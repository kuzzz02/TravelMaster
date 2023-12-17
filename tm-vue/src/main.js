import { createApp } from "vue"
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

const requireComponent = require.context('./', true, /\.vue$/)
const install = (Vue) => {
  if (install.installed) return // 如果组件被注册就返回,没有就注册
  install.installed = true
  requireComponent.keys().forEach(filename => { // filename 文件
    const config = requireComponent(filename) // 第i个组件
    const componentName = config.default.name // 组件名
    Vue.component(componentName, config.default || config) // 循环注册组件
  })
}

app.use(router).use(ElementPlus).mount('#app')