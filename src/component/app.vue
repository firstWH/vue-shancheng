<template>
    <div>
        这里是app上部
        <router-view></router-view>
        这里是app下部
    </div>
    
</template>

<script>
    export default{
        data () {
            return {
                value:2,
            }
        }
</script>