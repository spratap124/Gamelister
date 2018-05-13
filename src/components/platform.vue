<template>
    <span class="platform-icon">
        <span class="icon" v-if="platform==='PC'"><img src="../assets/images/pc.svg" /></span>
        <span class="icon" v-else-if="platform==='Macintosh' || platform==='iPad' || platform==='iPhone'"><img src="../assets/images/mac.svg" /></span>
        <span class="icon" v-else-if="platform==='PlayStation Vita' || platform==='PlayStation 3' || platform==='PlayStation 4'"><img src="../assets/images/playstation.svg" /></span>
        <span class="icon" v-else-if="platform==='Xbox 360'"><img src="../assets/images/xbox.svg" /></span>
        <span class="icon" v-else><img src="../assets/images/unknown.svg" /></span>
    </span>
</template>
PlayStation 3
<script>

    export default {
        props:['platform'],
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