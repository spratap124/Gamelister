<template>
    <span class="platform-icon">
        <span class="icon" v-if="choice==='Y'"><img src="../assets/images/thumbsup.svg" /></span>
        <span class="icon" v-else><img src="../assets/images/thumbsdown.svg" /></span>
    </span>
</template>
PlayStation 3
<script>

    export default {
        props:['choice'],
        data(){
            return {
                appName:"Game Lister"
            }
        }
    }
</script>

<style scoped>
.platform-icon{
    margin-top:20px;
}
    .icon img{
        height:20px;
    }
</style>