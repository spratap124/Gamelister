<template>
    <nav class="navbar navbar-inverse navbar-static-top example6">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar6">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#"><i class="fa fa-gamepad" style="font-size:24px;color:red;margin-right:5px"></i>Game Lister</a>
            </div>
            <div id="navbar6" class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li class="active"><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <!--/.nav-collapse -->
        </div>
        <!--/.container-fluid -->
    </nav>
</template>

<script>

    export default {
        data(){
            return {
                appName:"Game Lister"
            }
        }
    }
</script>

<style>
    
</style>