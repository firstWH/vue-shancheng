//导入组件
import login from '../component/login/login.vue';
import register from '../component/register/register.vue';

//对外导出路由设置
export default {
    //routes是一个数组
    routes:[
        {name:'login' ,path:'/login',component:login},
        {name:'register' ,path:'/register',component:register},
    ]
}