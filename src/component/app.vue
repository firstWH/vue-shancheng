<template>
    <div>
        <router-view></router-view>
    </div>
    
</template>

<script>
    export default {
      
    }
</script>

<!-- scoped,表示该元素/结构只能在当前页面起作用 -->
<style scoped>
    div{
        height: 100%;
        background-color: rgb(170, 215, 233);
    }
</style>