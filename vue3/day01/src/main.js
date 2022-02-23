import { createApp } from 'vue'
import App from './App.vue'

//createApp(App).mount('#app')
//修改之后的代码

import Axios from 'axios'
import storage from './models/storage'
import baseMixin from './components/NewsView.vue'


const app = createApp(App)

app.config.globalProperties.Axios = Axios //this.Axios 访问
app.config.globalProperties.Storage = storage //this.Storage 访问

app.mixin(baseMixin)        //配置全局的 mixin 使用方法
app.mount('#app')