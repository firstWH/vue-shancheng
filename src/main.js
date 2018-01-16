//导入默认初始化样式
import 'normalize.css';
//导入自己写的全局样式
import './less/index.less';

//导入vue第三方包
import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//启动VueRouter
Vue.use(VueRouter);
//先看第三方包是否是基于vue的，不是的，不用手动启动
Vue.use(ElementUI);

//导入自己写的根组件
import App from './component/app.vue';

//导入路由配置
import routerConfig from './router/index.js';

//非vue第三方包，不用依赖vue
import axios from 'axios';
//为了方便使用，添加到原型里,一般添加的原型对象以$开头
Vue.prototype.$axios=axios;
axios.defaults.baseURL = 'http://157.122.54.189:9095';//配置后，所有的请求都会默认使用这个域名

//导入api配置项,也添加到原型中
import api from './js/api-config.js';
Vue.prototype.$api=api;




new Vue({
    el: '#app',
    render: function(createElement) {
        return createElement(App);
    },
    router: new VueRouter(routerConfig)
});
