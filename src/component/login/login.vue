<template>
    <div>这里是login</div>
</template>

<script>
    

    export default{
        data () {
            return {
                
            }
        },
        //生命周期函数，组件初始化完毕后自动调用
            created() {
            this.$axios.get(this.$api.islogin).then(src=>{
                console.log(src);
            })
        }
    }
   
</script>
<!-- scoped,表示该元素/结构只能在当前页面起作用 -->
<style scoped>

</style>