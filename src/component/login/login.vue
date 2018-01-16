<template>
    <div class='login'>
        <h1>后台管理</h1>
        <!-- model用来关联表单数据, rules用来指定校验规则 -->
        <el-form label-position="left" label-width="80px" ref="ruleForm2" 
        :model="formLabelAlign" :rules="rules">
            <!-- 如果要表单进行校验与重置，必须加prop -->
            <el-form-item label="账号" prop="uname">
                <el-input v-model="formLabelAlign.uname"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop='upwd'>
                <el-input v-model="formLabelAlign.upwd"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
    export default{
        //测试---------------------------------------------------
        // data () {
        //     return {

        //     }
        // },
        // //生命周期函数，组件初始化完毕后自动调用
        //     created() {
        //     this.$axios.get(this.$api.islogin).then(src=>{
        //         console.log(src);
        //     })
        // }
        //-------------------------------------------------------
        data() {
            function unameFn (rule,value,callback){
                if(value===''){
                    callback(new Error('账号不能为空'));
                }else{
                    callback();
                }
            }
            function upwd (rule,value,callback){
                if(value===''){
                    callback(new Error('密码不能为空'));
                }else{
                    callback();
                }
            }
            return {
                // 表单提交的数据
                formLabelAlign: {
                    uname: '',
                    upwd: '',
                },

                // 校验登录信息
                rules: {
                    uname: [
                        { validator:unameFn, trigger: 'blur' }
                    ],
                    upwd:[
                        { validator:upwd, trigger: 'blur' }
                    ]
                },
            };
        },
        //methods,和data平级，写到data里面无法获取template里传来的事件、函数。：如click
        methods: {
            //登录,发送请求验证登录信息
            login(){
                //$axios.post(请求数据的路径，输入的表单内容)
                this.$axios.post(this.$api.login,this.formLabelAlign).then(res=>{
                    //返回值data，一般都有status属性
                    if(res.data.status==0){
                        // 使用了路由插件后, 就会拥有$router对象
                        this.$router.push({name:'admin'})
                    }else{
                        this.$alert(res.data.message);
                    }
                })
            },

            //表单验证
            submitForm(fromName) {
                this.$refs[fromName].validate(valid=>{
                    if(valid){
                        //注意：要加this，element调用方法前面要加 $ 
                        this.login()
                    }else{
                        this.$alert("验证失败，请重新登录")
                    }
                })
            }
        },
    }
   
</script>
<!-- scoped,表示该元素/结构只能在当前页面起作用 -->
<style scoped lang=less>
    .login{
        width: 400px;
        height: 200px;
        margin:0 auto;
        padding:20px;
        border: 2px solid yellow;
        position: relative;
        top:50%;
        transform: translateY(-50%);
    }
    h1{
        position: absolute;
        top: -60px;
        width: 100%;
        text-align: center;
        font-size: 20px;
        color: #fff;
        
    }
    
</style>