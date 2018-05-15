<template>
    <nav aria-label="Page navigation">
        <ul class="pagination">
            <li v-on:click="changeCurrentPage(currentPage - 1)">
            <a href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </a>
            </li>
            <li class="active" v-on:click="changeCurrentPage(currentPage)"><a href="#">{{currentPage}}</a></li>
            <li v-on:click="changeCurrentPage(currentPage + 1)"><a href="#">{{currentPage + 1}}</a></li>
            <li v-on:click="changeCurrentPage(currentPage + 2)"><a href="#">{{currentPage + 2}}</a></li>
            <li v-on:click="changeCurrentPage(currentPage + 1)">
                <a href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>

    export default {
        props:['currentPage'],
        data(){
            return {
                appName:"Game Lister"
            }
        },
        methods:{
            changeCurrentPage: function(newPage){
                this.$emit('updatePage',newPage);
            }
        }
    }
</script>

<style>
    
</style>