//导入组件
import login from '../component/login/login.vue'
import admin from '../component//admin/admin.vue';

//对外导出路由设置
export default {
    //routes是一个数组
    routes:[
        //登录页面
        {name:'login' ,path:'/login',component:login},
        //后台管理页面
        {name:'admin',path:'/admin',component:admin}
    ]
}