<template>
    <div class="container">
        <div class="container">
            
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="row">
                        <div class="col-md-3">
                            <div class="grid-container">
                                <strong>All Games</strong>
                                <div class="btn-group">
                                    <a href="#" id="list" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-th-list">
                                </span>List</a> <a href="#" id="grid" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-th"></span>Grid</a>
                                </div>
                            </div>
                            
                        </div>
                        <div class="col-md-8">
                            <form class="navbar-form navbar-left">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Search" v-model="search">
                                </div>
                            </form>
                            <ul class="nav navbar-nav navbar-right">
                                
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Sort <span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        <li v-on:click="sortByScore"><a href="#">Score</a></li>
                                        <li v-on:click="sortByPlatform"><a href="#">Platforme</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Genre <span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        <li v-on:click="filterByGenre('Adventure')"><a href="#">Adventure</a></li>
                                        <li v-on:click="filterByGenre('Platformer')"><a href="#">Platformer</a></li>
                                        <li v-on:click="filterByGenre('RPG')"><a href="#">RPG</a></li>
                                        <li v-on:click="filterByGenre('Action')"><a href="#">Action</a></li>
                                        <li v-on:click="filterByGenre('Shooter')"><a href="#">Shooter</a></li>
                                        <li v-on:click="filterByGenre('Strategy')"><a href="#">Strategy</a></li>
                                        <li v-on:click="filterByGenre('Action, Adventure')"><a href="#">Action, Adventure</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <!-- Collect the nav links, forms, and other content for toggling -->
                    </div>
                    <!-- /.navbar-collapse -->
                </div>
                <!-- /.container-fluid -->
                </nav>

            <div id="products" class="row list-group">
                <div class="loading" v-if="loading">
                    <img src="../assets/images/loading.gif">
                </div>
                <div class="item  col-xs-4 col-md-4 col-md-4 col-lg-4" v-for="pd in pdList">
                        <div class="score-box">
                            <span class="icon-holder"><i class="fa fa-star"></i></span>
                            <span class="score-holder">{{pd.score}}</span>
                        </div>
                        <div class="thumbnail">
                            <img class="group list-group-image" src="../assets/images/tomb-raider.jpg" alt="" />
                            <div class="caption">
                                <div class="title-box">
                                    <a v-bind:href="pd.url" class="game-title">
                                        <span class="group inner list-group-item-heading ">{{pd.title}}</span>
                                    </a>
                                    <span class="game-year text-danger">({{pd.release_year}})</span>
                                </div>
                                <div class="genre-box">
                                    <a href="#" class="game-ganre">
                                        <span class="group inner list-group-item-heading ">{{pd.genre}}</span>
                                    </a>
                                </div>
                                <div class="other-details">
                                     <div class="platform-box col-md-3">
                                        <platform v-bind:platform="pd.platform"></platform>
                                    </div>
                                    <div class="editor-box col-md-3 pull-right">
                                        <editorsChoice v-bind:choice="pd.editors_choice"></editorsChoice>
                                    </div>
                                </div>
                            </div> 
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    // $(document).ready(function () {
    //     $('#list').click(function (event) { event.preventDefault(); $('#products .item').addClass('list-group-item'); });
    //     $('#grid').click(function (event) { event.preventDefault(); $('#products .item').removeClass('list-group-item'); $('#products .item').addClass('grid-group-item'); });
    // });

    export default {
        data(){
            return {
                appName:"Game Lister",
                pdList:[],
                search:"",
                loading:true
            }
        },
        computed:{ 
            
        },
        methods:{
            filterGames:function(){
                console.log("called")
                if(typeof this.search !== 'undefined'){
                    this.pdList.filter(function(pd){
                    return pd.title.indexOf(this.search) > -1;
                })
                }
                
            },
            sortByScore:function(){
                this.pdList.sort(function(a,b){
                    
                    var scoreA=a.score, scoreB=b.score
                    if (scoreA < scoreB) //sort string ascending
                        return -1 
                    if (scoreA > scoreB)
                        return 1
                    return 0 //default return value (no sorting)
                });
            },
            sortByPlatform:function(){
                return this.pdList.sort(function(a,b){
                    var paltformA=a.platform.toLowerCase(), paltformB=b.platform.toLowerCase()
                    if (paltformA < paltformB) //sort string ascending
                        return -1 
                    if (paltformA > paltformB)
                        return 1
                    return 0 //default return value (no sorting)
                });
                
            },
            filterByGenre:function(filterby){

                if(filterby == "Adventure"){
                    return this.pdList.filter(function(game){
                        return game.genre == "Adventure";
                    });
                }else if(filterby == "Platformer"){
                    return this.pdList.filter(function(game){
                        return game.genre == "Platformer";
                    });
                }else if(filterby == "Action, Adventure"){
                    return this.pdList.filter(function(game){
                        return game.genre == "Action, Adventure";
                    });
                }else if(filterby == "Shooter"){
                    return this.pdList.filter(function(game){
                        return game.genre == "Shooter";
                    });
                }else if(filterby == "Strategy"){
                    return this.pdList.filter(function(game){
                        return game.genre == "Strategy";
                    });
                }else if(filterby == "Action"){
                    return this.pdList.filter(function(game){
                        return game.genre == "Action";
                    });
                }else if(filterby == "RPG"){
                    return this.pdList.filter(function(game){
                        return game.genre == "RPG";
                    });
                }

            }
        },
        created(){
            this.$http.get('http://starlord.hackerearth.com/gamesext').then(function(data){
                this.loading = false;
                this.pdList = data.body.splice(0,30);
            });
        }
    }
</script>

<style scoped>
.glyphicon { margin-right:5px; }
.thumbnail
{   min-height:350px;
    margin-bottom: 20px;
    padding: 0px;
    -webkit-border-radius: 0px;
    -moz-border-radius: 0px;
    border-radius: 0px;
}

.grid-container{
    padding: 9px;
}

.loading{
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
}


.item.list-group-item
{
    float: none;
    width: 100%;
    background-color: #fff;
    margin-bottom: 10px;
}
.item.list-group-item:nth-of-type(odd):hover,.item.list-group-item:hover
{
    background: #428bca;
}

.item.list-group-item .list-group-image
{
    margin-right: 10px;
}
.item.list-group-item .thumbnail
{
    margin-bottom: 0px;
}
.item.list-group-item .caption
{
    padding: 9px 9px 0px 9px;
}
.item.list-group-item:nth-of-type(odd)
{
    background: #eeeeee;
}

.item.list-group-item:before, .item.list-group-item:after
{
    display: table;
    content: " ";
}

.item.list-group-item img
{
    float: left;
}
.item.list-group-item:after
{
    clear: both;
}
.list-group-item-text
{
    margin: 0 0 11px;
}

.caption .game-title{
    font-size: 20px;
    color: #5f5e5e;
}
.title-box{
    margin: 2px 0px;
}

.caption .genre-box{
 margin-top: -7px;
}

.caption .game-ganre{
    color: #616161;
    font-size: 12px;
   
}
.score-box{
    position: absolute;
    right: 20px;
    top: 0px;
    color: #fff;
    
}

.score-box .icon-holder{
 font-size: 40px;
}

.score-box .score-holder{
    position: absolute;
    font-size: 10px;
    color: tomato;
    left: 14px;
    top: 23px;
}

.other-details{
    position:absolute;
    bottom:30px;
}

</style>