<template>
    <div class="container">
        <div class="container">
            <div class="well well-sm">
                <strong>All Games</strong>
                <div class="btn-group">
                    <a href="#" id="list" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-th-list">
                    </span>List</a> <a href="#" id="grid" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-th"></span>Grid</a>
                </div>
            </div>
            <div id="products" class="row list-group">
                <div class="item  col-xs-4 col-md-4 col-md-4 col-lg-4" v-for="pd in pdList">
                        <div class="score-box">
                            <span class="icon-holder"><i class="fa fa-star"></i></span>
                            <span class="score-holder">{{pd.score}}</span>
                        </div>
                        <div class="thumbnail">
                            <img class="group list-group-image" src="../assets/images/tomb-raider.jpg" alt="" />
                            <div class="caption">
                                <div class="title-box">
                                    <a href="/games/wwe-13/ps3-127917" class="game-title">
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
                pdList:[
                    {
                        "title": "LittleBigPlanet PS Vita",
                        "url": "/games/littlebigplanet-vita/vita-98907",
                        "platform": "PlayStation Vita",
                        "score": 9,
                        "genre": "Platformer",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "LittleBigPlanet PS Vita -- Marvel Super Hero Edition",
                        "url": "/games/littlebigplanet-ps-vita-marvel-super-hero-edition/vita-20027059",
                        "platform": "PlayStation Vita",
                        "score": 9,
                        "genre": "Platformer",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Splice: Tree of Life",
                        "url": "/games/splice/ipad-141070",
                        "platform": "iPad",
                        "score": 8.5,
                        "genre": "Puzzle",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "NHL 13",
                        "url": "/games/nhl-13/xbox-360-128182",
                        "platform": "Xbox 360",
                        "score": 8.5,
                        "genre": "Sports",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "NHL 13",
                        "url": "/games/nhl-13/ps3-128181",
                        "platform": "PlayStation 3",
                        "score": 8.5,
                        "genre": "Sports",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Total War Battles: Shogun",
                        "url": "/games/total-war-battles-shogun/mac-142565",
                        "platform": "Macintosh",
                        "score": 7,
                        "genre": "Strategy",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Double Dragon: Neon",
                        "url": "/games/double-dragon-neon/xbox-360-131320",
                        "platform": "Xbox 360",
                        "score": 3,
                        "genre": "Fighting",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Guild Wars 2",
                        "url": "/games/guild-wars-2/pc-896298",
                        "platform": "PC",
                        "score": 9,
                        "genre": "RPG",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Double Dragon: Neon",
                        "url": "/games/double-dragon-neon/ps3-131321",
                        "platform": "PlayStation 3",
                        "score": 3,
                        "genre": "Fighting",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Total War Battles: Shogun",
                        "url": "/games/total-war-battles-shogun/pc-142564",
                        "platform": "PC",
                        "score": 7,
                        "genre": "Strategy",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Tekken Tag Tournament 2",
                        "url": "/games/tekken-tag-tournament-2/ps3-124584",
                        "platform": "PlayStation 3",
                        "score": 7.5,
                        "genre": "Fighting",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Tekken Tag Tournament 2",
                        "url": "/games/tekken-tag-tournament-2/xbox-360-124581",
                        "platform": "Xbox 360",
                        "score": 7.5,
                        "genre": "Fighting",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Wild Blood",
                        "url": "/games/wild-blood/iphone-139363",
                        "platform": "iPhone",
                        "score": 7,
                        "genre": "",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Mark of the Ninja",
                        "url": "/games/mark-of-the-ninja-135615/xbox-360-129276",
                        "platform": "Xbox 360",
                        "score": 9,
                        "genre": "Action, Adventure",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Mark of the Ninja",
                        "url": "/games/mark-of-the-ninja-135615/pc-143761",
                        "platform": "PC",
                        "score": 9,
                        "genre": "Action, Adventure",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Home: A Unique Horror Adventure",
                        "url": "/games/home-a-unique-horror-adventure/mac-20014750",
                        "platform": "Macintosh",
                        "score": 6.5,
                        "genre": "Adventure",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Home: A Unique Horror Adventure",
                        "url": "/games/home-a-unique-horror-adventure/pc-137135",
                        "platform": "PC",
                        "score": 6.5,
                        "genre": "Adventure",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Avengers Initiative",
                        "url": "/games/avengers-initiative/iphone-141579",
                        "platform": "iPhone",
                        "score": 8,
                        "genre": "Action",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Way of the Samurai 4",
                        "url": "/games/way-of-the-samurai-4/ps3-23516",
                        "platform": "PlayStation 3",
                        "score": 5.5,
                        "genre": "Action, Adventure",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "JoJo's Bizarre Adventure HD",
                        "url": "/games/jojos-bizarre-adventure/xbox-360-137717",
                        "platform": "Xbox 360",
                        "score": 7,
                        "genre": "Fighting",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "JoJo's Bizarre Adventure HD",
                        "url": "/games/jojos-bizarre-adventure/ps3-137896",
                        "platform": "PlayStation 3",
                        "score": 7,
                        "genre": "Fighting",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Mass Effect 3: Leviathan",
                        "url": "/games/mass-effect-3-leviathan/xbox-360-138918",
                        "platform": "Xbox 360",
                        "score": 7.5,
                        "genre": "RPG",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Mass Effect 3: Leviathan",
                        "url": "/games/mass-effect-3-leviathan/ps3-138915",
                        "platform": "PlayStation 3",
                        "score": 7.5,
                        "genre": "RPG",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Mass Effect 3: Leviathan",
                        "url": "/games/mass-effect-3-leviathan/pc-138919",
                        "platform": "PC",
                        "score": 7.5,
                        "genre": "RPG",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Dark Souls (Prepare to Die Edition)",
                        "url": "/games/dark-souls-prepare-to-die-edition/pc-131930",
                        "platform": "PC",
                        "score": 9,
                        "genre": "Action, RPG",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Symphony",
                        "url": "/games/symphony/pc-136470",
                        "platform": "PC",
                        "score": 7,
                        "genre": "Shooter",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Bastion",
                        "url": "/games/bastion/ipad-140874",
                        "platform": "iPad",
                        "score": 9,
                        "genre": "Action, RPG",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Tom Clancy's Ghost Recon Phantoms",
                        "url": "/games/tom-clancys-ghost-recon-online/pc-109114",
                        "platform": "PC",
                        "score": 7.5,
                        "genre": "Shooter",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Thirty Flights of Loving",
                        "url": "/games/thirty-flights-of-loving/pc-138374",
                        "platform": "PC",
                        "score": 8,
                        "genre": "Adventure",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Legasista",
                        "url": "/games/legasista/ps3-127147",
                        "platform": "PlayStation 3",
                        "score": 6.5,
                        "genre": "Action, RPG",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "The Walking Dead: The Game -- Episode 3: Long Road Ahead",
                        "url": "/games/the-walking-dead-season-1-episode-3/mac-135875",
                        "platform": "Macintosh",
                        "score": 9,
                        "genre": "Adventure",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "World of Warcraft: Mists of Pandaria",
                        "url": "/games/world-of-warcraft-mists-of-pandaria/pc-114681",
                        "platform": "PC",
                        "score": 8.7,
                        "genre": "RPG",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Hell Yeah! Wrath of the Dead Rabbit",
                        "url": "/games/hell-yeah-wrath-of-the-dead-rabbit/ps3-129409",
                        "platform": "PlayStation 3",
                        "score": 4.9,
                        "genre": "Platformer",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Pokemon White Version 2",
                        "url": "/games/pokemon-white-version-2/nds-129228",
                        "platform": "Nintendo DS",
                        "score": 9.6,
                        "genre": "RPG",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "War of the Roses",
                        "url": "/games/war-of-the-roses-140577/pc-115849",
                        "platform": "PC",
                        "score": 7.3,
                        "genre": "Action",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Pokemon Black Version 2",
                        "url": "/games/pokemon-black-version-2/nds-129224",
                        "platform": "Nintendo DS",
                        "score": 9.6,
                        "genre": "RPG",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Drakerider",
                        "url": "/games/drakerider/iphone-135745",
                        "platform": "iPhone",
                        "score": 6.5,
                        "genre": "RPG",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "The Walking Dead: The Game -- Episode 3: Long Road Ahead",
                        "url": "/games/the-walking-dead-season-1-episode-3/xbox-360-135872",
                        "platform": "Xbox 360",
                        "score": 9,
                        "genre": "Adventure",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "The Walking Dead: The Game -- Episode 3: Long Road Ahead",
                        "url": "/games/the-walking-dead-season-1-episode-3/pc-135874",
                        "platform": "PC",
                        "score": 9,
                        "genre": "Adventure",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "The Walking Dead: The Game -- Episode 3: Long Road Ahead",
                        "url": "/games/the-walking-dead-season-1-episode-3/ps3-135873",
                        "platform": "PlayStation 3",
                        "score": 9,
                        "genre": "Adventure",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Rock Band Blitz",
                        "url": "/games/rock-band-blitz/xbox-360-131273",
                        "platform": "Xbox 360",
                        "score": 8.5,
                        "genre": "Music",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Counter-Strike: Global Offensive",
                        "url": "/games/counter-strike-global-offensive/mac-116695",
                        "platform": "Macintosh",
                        "score": 8,
                        "genre": "Shooter",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Worms Revolution",
                        "url": "/games/worms-revolution/ps3-131184",
                        "platform": "PlayStation 3",
                        "score": 8.5,
                        "genre": "Strategy",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Worms Revolution",
                        "url": "/games/worms-revolution/pc-131183",
                        "platform": "PC",
                        "score": 8.5,
                        "genre": "Strategy",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Worms Revolution",
                        "url": "/games/worms-revolution/xbox-360-131185",
                        "platform": "Xbox 360",
                        "score": 8.5,
                        "genre": "Strategy",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Bad Piggies",
                        "url": "/games/bad-piggies/iphone-141455",
                        "platform": "iPhone",
                        "score": 9.2,
                        "genre": "Action",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Resident Evil 6",
                        "url": "/games/resident-evil-6/ps3-85710",
                        "platform": "PlayStation 3",
                        "score": 7.9,
                        "genre": "Action, Adventure",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Resident Evil 6",
                        "url": "/games/resident-evil-6/xbox-360-117995",
                        "platform": "Xbox 360",
                        "score": 7.9,
                        "genre": "Action, Adventure",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Shad'O",
                        "url": "/games/shado/pc-141293",
                        "platform": "PC",
                        "score": 7,
                        "genre": "Adventure",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Demon's Score",
                        "url": "/games/demons-score/iphone-118050",
                        "platform": "iPhone",
                        "score": 6.9,
                        "genre": "Action",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "NBA 2K13",
                        "url": "/games/nba-2k13/xbox-360-132080",
                        "platform": "Xbox 360",
                        "score": 9.1,
                        "genre": "Sports",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Counter-Strike: Global Offensive",
                        "url": "/games/counter-strike-global-offensive/pc-115451",
                        "platform": "PC",
                        "score": 8,
                        "genre": "Shooter",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "The World Ends with You: Solo Remix",
                        "url": "/games/the-world-ends-with-you-solo-remix/ipad-140661",
                        "platform": "iPad",
                        "score": 9.5,
                        "genre": "RPG",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Counter-Strike: Global Offensive",
                        "url": "/games/counter-strike-global-offensive/ps3-115453",
                        "platform": "PlayStation 3",
                        "score": 8,
                        "genre": "Shooter",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "The World Ends with You: Solo Remix",
                        "url": "/games/the-world-ends-with-you-solo-remix/iphone-140269",
                        "platform": "iPhone",
                        "score": 9.5,
                        "genre": "RPG",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Counter-Strike: Global Offensive",
                        "url": "/games/counter-strike-global-offensive/xbox-360-115452",
                        "platform": "Xbox 360",
                        "score": 8,
                        "genre": "Shooter",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Madden NFL 13",
                        "url": "/games/madden-nfl-2013/vita-128100",
                        "platform": "PlayStation Vita",
                        "score": 6,
                        "genre": "Sports",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Madden NFL 13",
                        "url": "/games/madden-nfl-2013/ps3-128098",
                        "platform": "PlayStation 3",
                        "score": 9,
                        "genre": "Sports",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Madden NFL 13",
                        "url": "/games/madden-nfl-2013/xbox-360-128097",
                        "platform": "Xbox 360",
                        "score": 9,
                        "genre": "Sports",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Hoodwink",
                        "url": "/games/hoodwink/pc-136672",
                        "platform": "PC",
                        "score": 2.5,
                        "genre": "Adventure",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "NBA 2K13",
                        "url": "/games/nba-2k13/ps3-132077",
                        "platform": "PlayStation 3",
                        "score": 9.1,
                        "genre": "Sports",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "NBA 2K13",
                        "url": "/games/nba-2k13/pc-140490",
                        "platform": "PC",
                        "score": 9.1,
                        "genre": "Sports",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Lili: Child of Geos",
                        "url": "/games/lili/iphone-138013",
                        "platform": "iPhone",
                        "score": 7,
                        "genre": "Adventure",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Marvel vs. Capcom Origins",
                        "url": "/games/marvel-vs-capcom-origins/xbox-360-137157",
                        "platform": "Xbox 360",
                        "score": 8.2,
                        "genre": "Fighting",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Marvel vs. Capcom Origins",
                        "url": "/games/marvel-vs-capcom-origins/ps3-137160",
                        "platform": "PlayStation 3",
                        "score": 8.2,
                        "genre": "Fighting",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Dead or Alive 5",
                        "url": "/games/dead-or-alive-5/ps3-117918",
                        "platform": "PlayStation 3",
                        "score": 8.8,
                        "genre": "Fighting",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Dead or Alive 5",
                        "url": "/games/dead-or-alive-5/xbox-360-866449",
                        "platform": "Xbox 360",
                        "score": 8.8,
                        "genre": "Fighting",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Medal of Honor Warfighter",
                        "url": "/games/medal-of-honor-warfighter/pc-101082",
                        "platform": "PC",
                        "score": 4,
                        "genre": "Shooter",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Professor Layton and the Miracle Mask",
                        "url": "/games/professor-layton-and-the-mask-of-miracle/3ds-77742",
                        "platform": "Nintendo 3DS",
                        "score": 8.7,
                        "genre": "Adventure",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Hotline Miami",
                        "url": "/games/hotline-miami/pc-139657",
                        "platform": "PC",
                        "score": 8.8,
                        "genre": "Action",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Edna & Harvey: Harvey's New Eyes",
                        "url": "/games/edna-harvey-harveys-new-eyes/pc-145776",
                        "platform": "PC",
                        "score": 6,
                        "genre": "Adventure",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Medal of Honor Warfighter",
                        "url": "/games/medal-of-honor-warfighter/ps3-101085",
                        "platform": "PlayStation 3",
                        "score": 4,
                        "genre": "Shooter",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Medal of Honor Warfighter",
                        "url": "/games/medal-of-honor-warfighter/xbox-360-101086",
                        "platform": "Xbox 360",
                        "score": 4,
                        "genre": "Shooter",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Transformers: Fall of Cybertron",
                        "url": "/games/transformers-fall-of-cybertron/xbox-360-92426",
                        "platform": "Xbox 360",
                        "score": 8.5,
                        "genre": "Shooter",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Transformers: Fall of Cybertron",
                        "url": "/games/transformers-fall-of-cybertron/ps3-92425",
                        "platform": "PlayStation 3",
                        "score": 8.5,
                        "genre": "Shooter",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Hero Academy",
                        "url": "/games/hero-academy-136971/pc-122908",
                        "platform": "PC",
                        "score": 9,
                        "genre": "Board",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Hero Academy",
                        "url": "/games/hero-academy-136971/iphone-122803",
                        "platform": "iPhone",
                        "score": 9,
                        "genre": "Strategy",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Puzzle Craft",
                        "url": "/games/puzzlecraft/iphone-134348",
                        "platform": "iPhone",
                        "score": 9,
                        "genre": "Puzzle",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Realms Of Ancient War",
                        "url": "/games/realms-of-ancient-war/xbox-360-111182",
                        "platform": "Xbox 360",
                        "score": 5.5,
                        "genre": "Action",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Realms Of Ancient War",
                        "url": "/games/realms-of-ancient-war/ps3-111181",
                        "platform": "PlayStation 3",
                        "score": 5.5,
                        "genre": "Action",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Anomaly: Warzone Earth",
                        "url": "/games/anomaly-warzone-earth/ps3-138479",
                        "platform": "PlayStation 3",
                        "score": 8.2,
                        "genre": "Action",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Darksiders II",
                        "url": "/games/darksiders-2/pc-91963",
                        "platform": "PC",
                        "score": 7.5,
                        "genre": "Action",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Left 4 Dead 2: Cold Stream",
                        "url": "/games/left-4-dead-2-cold-stream/mac-140189",
                        "platform": "Macintosh",
                        "score": 7,
                        "genre": "Shooter",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Left 4 Dead 2: Cold Stream",
                        "url": "/games/left-4-dead-2-cold-stream/pc-140187",
                        "platform": "PC",
                        "score": 7,
                        "genre": "Shooter",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Puzzle Craft",
                        "url": "/games/puzzlecraft/android-134352",
                        "platform": "Android",
                        "score": 9,
                        "genre": "Puzzle",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Left 4 Dead 2: Cold Stream",
                        "url": "/games/left-4-dead-2-cold-stream/xbox-360-140188",
                        "platform": "Xbox 360",
                        "score": 7,
                        "genre": "Shooter",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Horn",
                        "url": "/games/horn/iphone-136814",
                        "platform": "iPhone",
                        "score": 9,
                        "genre": "Action, Adventure",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Forza Horizon",
                        "url": "/games/forza-horizon/xbox-360-129564",
                        "platform": "Xbox 360",
                        "score": 9,
                        "genre": "Racing",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "FIFA Soccer 13",
                        "url": "/games/fifa-2013/vita-115689",
                        "platform": "PlayStation Vita",
                        "score": 4,
                        "genre": "Sports",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Mugen Souls",
                        "url": "/games/mugen-souls/ps3-120256",
                        "platform": "PlayStation 3",
                        "score": 3.9,
                        "genre": "Strategy, RPG",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Crazy Taxi",
                        "url": "/games/crazy-taxi/iphone-144755",
                        "platform": "iPhone",
                        "score": 7.1,
                        "genre": "Racing, Action",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "New Little King's Story",
                        "url": "/games/new-kings-story/vita-116369",
                        "platform": "PlayStation Vita",
                        "score": 5.8,
                        "genre": "RPG",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Fable: The Journey",
                        "url": "/games/fable-the-journey/xbox-360-27948",
                        "platform": "Xbox 360",
                        "score": 7.2,
                        "genre": "Action, RPG",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "The Lord of the Rings Online: Riders of Rohan",
                        "url": "/games/the-lord-of-the-rings-online-riders-of-rohan/pc-127207",
                        "platform": "PC",
                        "score": 8.3,
                        "genre": "RPG",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Doom 3: BFG Edition",
                        "url": "/games/doom-3/xbox-360-135333",
                        "platform": "Xbox 360",
                        "score": 7.6,
                        "genre": "RPG",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Rugby League Live 2",
                        "url": "/games/rugby-league-live-2/xbox-360-136983",
                        "platform": "Xbox 360",
                        "score": 6,
                        "genre": "Sports",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Rugby League Live 2",
                        "url": "/games/rugby-league-live-2/ps3-136984",
                        "platform": "PlayStation 3",
                        "score": 6,
                        "genre": "Sports",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Doom 3: BFG Edition",
                        "url": "/games/doom-3/ps3-135329",
                        "platform": "PlayStation 3",
                        "score": 7.6,
                        "genre": "RPG",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Punch Quest",
                        "url": "/games/punch-quest/iphone-136667",
                        "platform": "iPhone",
                        "score": 9.3,
                        "genre": "Action",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "He-Man: The Most Powerful Game in the Universe",
                        "url": "/games/he-man-the-most-powerful-game-in-the-universe/iphone-144763",
                        "platform": "iPhone",
                        "score": 6.8,
                        "genre": "Action",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Doom 3: BFG Edition",
                        "url": "/games/doom-3/pc-135338",
                        "platform": "PC",
                        "score": 7.6,
                        "genre": "RPG",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Dokuro",
                        "url": "/games/dokuro/vita-130906",
                        "platform": "PlayStation Vita",
                        "score": 8.8,
                        "genre": "Puzzle",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Naughty Bear: Panic in Paradise",
                        "url": "/games/naughty-bear-panic-in-paradise/xbox-360-135404",
                        "platform": "Xbox 360",
                        "score": 2.3,
                        "genre": "Action",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Naughty Bear: Panic in Paradise",
                        "url": "/games/naughty-bear-panic-in-paradise/ps3-135407",
                        "platform": "PlayStation 3",
                        "score": 2.3,
                        "genre": "Action",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Borderlands 2: Captain Scarlett and her Pirate's Booty",
                        "url": "/games/borderlands-2-captain-scarlett-and-her-pirates-booty/ps3-145419",
                        "platform": "PlayStation 3",
                        "score": 7.5,
                        "genre": "Shooter, RPG",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Skylanders Giants",
                        "url": "/games/skylanders-giants/ps3-128142",
                        "platform": "PlayStation 3",
                        "score": 8,
                        "genre": "Action, Adventure",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Borderlands 2: Captain Scarlett and her Pirate's Booty",
                        "url": "/games/borderlands-2-captain-scarlett-and-her-pirates-booty/pc-145418",
                        "platform": "PC",
                        "score": 7.5,
                        "genre": "Shooter, RPG",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Rayman: Jungle Run",
                        "url": "/games/rayman-jungle-run/iphone-141641",
                        "platform": "iPhone",
                        "score": 8.8,
                        "genre": "Platformer",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "FIFA Soccer 13",
                        "url": "/games/fifa-2013/pc-115688",
                        "platform": "PC",
                        "score": 9,
                        "genre": "Sports",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "FIFA Soccer 13",
                        "url": "/games/fifa-2013/ps3-115679",
                        "platform": "PlayStation 3",
                        "score": 9,
                        "genre": "Sports",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Torchlight II",
                        "url": "/games/torchlight-ii/pc-82633",
                        "platform": "PC",
                        "score": 9.1,
                        "genre": "Action, RPG",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "FIFA Soccer 13",
                        "url": "/games/fifa-2013/xbox-360-115691",
                        "platform": "Xbox 360",
                        "score": 9,
                        "genre": "Sports",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "The Sims 3: Supernatural",
                        "url": "/games/the-sims-3-supernatural/pc-136180",
                        "platform": "PC",
                        "score": 4.5,
                        "genre": "Simulation",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Retro/Grade",
                        "url": "/games/retrograde-138590/ps3-21766",
                        "platform": "PlayStation 3",
                        "score": 7,
                        "genre": "",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Iron Brigade",
                        "url": "/games/iron-brigade/pc-121033",
                        "platform": "PC",
                        "score": 9,
                        "genre": "Action",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Cafeteria Nipponica",
                        "url": "/games/cafeteria-nipponica/iphone-139633",
                        "platform": "iPhone",
                        "score": 6,
                        "genre": "Simulation",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Sleeping Dogs",
                        "url": "/games/sleeping-dogs/xbox-360-14279324",
                        "platform": "Xbox 360",
                        "score": 8.5,
                        "genre": "Action",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Sleeping Dogs",
                        "url": "/games/sleeping-dogs/ps3-55068",
                        "platform": "PlayStation 3",
                        "score": 8.5,
                        "genre": "Action",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Darksiders II",
                        "url": "/games/darksiders-2/ps3-14336767",
                        "platform": "PlayStation 3",
                        "score": 7.5,
                        "genre": "Action",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Papo & Yo",
                        "url": "/games/papo-and-yo/ps3-110267",
                        "platform": "PlayStation 3",
                        "score": 4,
                        "genre": "Adventure",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "The Walking Dead: The Game -- Episode 4: Around Every Corner",
                        "url": "/games/the-walking-dead-season-1-episode-4/pc-135879",
                        "platform": "PC",
                        "score": 7.5,
                        "genre": "Adventure",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "The Walking Dead: The Game -- Episode 4: Around Every Corner",
                        "url": "/games/the-walking-dead-season-1-episode-4/ipad-135882",
                        "platform": "iPad",
                        "score": 7.5,
                        "genre": "Adventure",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "The Walking Dead: The Game -- Episode 4: Around Every Corner",
                        "url": "/games/the-walking-dead-season-1-episode-4/ps3-135880",
                        "platform": "PlayStation 3",
                        "score": 7.5,
                        "genre": "Adventure",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Cortex Command",
                        "url": "/games/cortex-command/pc-14333880",
                        "platform": "PC",
                        "score": 5,
                        "genre": "Action, Simulation",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "The Walking Dead: The Game -- Episode 4: Around Every Corner",
                        "url": "/games/the-walking-dead-season-1-episode-4/xbox-360-135881",
                        "platform": "Xbox 360",
                        "score": 7.5,
                        "genre": "Adventure",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Derrick the Deathfin",
                        "url": "/games/derrick-the-deathfin-133942/ps3-129921",
                        "platform": "PlayStation 3",
                        "score": 7.4,
                        "genre": "Action",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "The Walking Dead: The Game -- Episode 4: Around Every Corner",
                        "url": "/games/the-walking-dead-season-1-episode-4/mac-135878",
                        "platform": "Macintosh",
                        "score": 7.5,
                        "genre": "Adventure",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "XCOM: Enemy Unknown",
                        "url": "/games/xcom-enemy-unknown/xbox-360-126074",
                        "platform": "Xbox 360",
                        "score": 8.2,
                        "genre": "Strategy",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "XCOM: Enemy Unknown",
                        "url": "/games/xcom-enemy-unknown/pc-126070",
                        "platform": "PC",
                        "score": 8.2,
                        "genre": "Strategy",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Silent Hill: Book of Memories",
                        "url": "/games/silent-hill-book-of-memories/vita-110040",
                        "platform": "PlayStation Vita",
                        "score": 6,
                        "genre": "Adventure",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Diaspora: Shattered Armistice",
                        "url": "/games/diaspora-shattered-armistice/pc-145951",
                        "platform": "PC",
                        "score": 7.4,
                        "genre": "Flight, Action",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Pocket Clothier",
                        "url": "/games/pocket-clothier/iphone-145621",
                        "platform": "iPhone",
                        "score": 6.6,
                        "genre": "Strategy",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Pocket Clothier",
                        "url": "/games/pocket-clothier/android-145958",
                        "platform": "Android",
                        "score": 6.6,
                        "genre": "Strategy",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Ravaged",
                        "url": "/games/ravaged-135376/pc-128650",
                        "platform": "PC",
                        "score": 6.7,
                        "genre": "Shooter",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "True Skate",
                        "url": "/games/true-skate/iphone-145482",
                        "platform": "iPhone",
                        "score": 6.7,
                        "genre": "Sports",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Zero Escape: Virtue's Last Reward",
                        "url": "/games/virtues-last-reward/3ds-116383",
                        "platform": "Nintendo 3DS",
                        "score": 9.5,
                        "genre": "Adventure",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Zero Escape: Virtue's Last Reward",
                        "url": "/games/virtues-last-reward/vita-116380",
                        "platform": "PlayStation Vita",
                        "score": 9.5,
                        "genre": "Adventure",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "The Walking Dead: The Game -- Episode 3: Long Road Ahead",
                        "url": "/games/the-walking-dead-season-1-episode-3/ipad-135871",
                        "platform": "iPad",
                        "score": 9,
                        "genre": "Adventure",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Skylanders Giants",
                        "url": "/games/skylanders-giants/xbox-360-128140",
                        "platform": "Xbox 360",
                        "score": 8,
                        "genre": "Action, Adventure",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Skylanders Giants",
                        "url": "/games/skylanders-giants/wii-128141",
                        "platform": "Wii",
                        "score": 8,
                        "genre": "Action, Adventure",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Borderlands 2: Captain Scarlett and her Pirate's Booty",
                        "url": "/games/borderlands-2-captain-scarlett-and-her-pirates-booty/xbox-360-145420",
                        "platform": "Xbox 360",
                        "score": 7.5,
                        "genre": "Shooter, RPG",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Devil's Attorney",
                        "url": "/games/devils-attorney/android-145462",
                        "platform": "Android",
                        "score": 8.3,
                        "genre": "Strategy",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Devil's Attorney",
                        "url": "/games/devils-attorney/iphone-145099",
                        "platform": "iPhone",
                        "score": 8.3,
                        "genre": "Strategy",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Code of Princess",
                        "url": "/games/code-of-princess-135813/3ds-125676",
                        "platform": "Nintendo 3DS",
                        "score": 6.9,
                        "genre": "Action, RPG",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "SunFlowers",
                        "url": "/games/sun-flowers-134128/vita-132435",
                        "platform": "PlayStation Vita",
                        "score": 8,
                        "genre": "Puzzle",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "007 Legends",
                        "url": "/games/007-legends/xbox-360-132394",
                        "platform": "Xbox 360",
                        "score": 4.5,
                        "genre": "Action",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Super Hexagon",
                        "url": "/games/super-hexagon/iphone-143440",
                        "platform": "iPhone",
                        "score": 9,
                        "genre": "Action",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Machinarium",
                        "url": "/games/machinarium/ps3-110942",
                        "platform": "PlayStation 3",
                        "score": 8,
                        "genre": "Adventure",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Final Fantasy Dimensions",
                        "url": "/games/final-fantasy-dimensions/iphone-135306",
                        "platform": "iPhone",
                        "score": 8,
                        "genre": "RPG",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "They Bleed Pixels",
                        "url": "/games/they-bleed-pixels/pc-141012",
                        "platform": "PC",
                        "score": 8.2,
                        "genre": "Platformer",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Jet Set Radio",
                        "url": "/games/jet-set-radio/vita-135073",
                        "platform": "PlayStation Vita",
                        "score": 7.5,
                        "genre": "Action",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Jet Set Radio",
                        "url": "/games/jet-set-radio/ps3-129168",
                        "platform": "PlayStation 3",
                        "score": 7.5,
                        "genre": "Action",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Jet Set Radio",
                        "url": "/games/jet-set-radio/xbox-360-129165",
                        "platform": "Xbox 360",
                        "score": 7.5,
                        "genre": "Action",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Pro Evolution Soccer 2013",
                        "url": "/games/pro-evolution-soccer-2013/xbox-360-133009",
                        "platform": "Xbox 360",
                        "score": 8.5,
                        "genre": "Sports",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "F1 2012",
                        "url": "/games/f1-2012/pc-130383",
                        "platform": "PC",
                        "score": 9,
                        "genre": "Racing",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Darksiders II",
                        "url": "/games/darksiders-2/xbox-360-14336768",
                        "platform": "Xbox 360",
                        "score": 7.5,
                        "genre": "Action",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Pitfall",
                        "url": "/games/pitfall-working-title/iphone-137420",
                        "platform": "iPhone",
                        "score": 7,
                        "genre": "Platformer",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Dust: An Elysian Tail",
                        "url": "/games/dust-an-elysian-tail-139696/xbox-360-77719",
                        "platform": "Xbox 360",
                        "score": 8.5,
                        "genre": "Platformer",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Hybrid",
                        "url": "/games/hybrid-140542/xbox-360-37860",
                        "platform": "Xbox 360",
                        "score": 8,
                        "genre": "Shooter",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "The Dark Knight Rises",
                        "url": "/games/the-dark-knight-rises/iphone-130653",
                        "platform": "iPhone",
                        "score": 5.5,
                        "genre": "Action",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": 10000000,
                        "url": "/games/10000000/iphone-139135",
                        "platform": "iPhone",
                        "score": 7.5,
                        "genre": "",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "The Political Machine 2012",
                        "url": "/games/the-political-machine-2012/pc-131306",
                        "platform": "PC",
                        "score": 6.5,
                        "genre": "Strategy",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Sound Shapes",
                        "url": "/games/sound-shapes-queasy-games/ps3-135578",
                        "platform": "PlayStation 3",
                        "score": 9,
                        "genre": "Platformer",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Sound Shapes",
                        "url": "/games/sound-shapes-queasy-games/vita-110145",
                        "platform": "PlayStation Vita",
                        "score": 9,
                        "genre": "Platformer",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "One Piece: Pirate Warriors",
                        "url": "/games/one-piece-pirate-warriors/ps3-116782",
                        "platform": "PlayStation 3",
                        "score": 6,
                        "genre": "Action",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "XCOM: Enemy Unknown",
                        "url": "/games/xcom-enemy-unknown/ps3-126073",
                        "platform": "PlayStation 3",
                        "score": 8.2,
                        "genre": "Strategy",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Dishonored",
                        "url": "/games/dishonored/xbox-360-112932",
                        "platform": "Xbox 360",
                        "score": 9.2,
                        "genre": "Action",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Dishonored",
                        "url": "/games/dishonored/pc-112928",
                        "platform": "PC",
                        "score": 9.2,
                        "genre": "Action",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Dishonored",
                        "url": "/games/dishonored/ps3-112931",
                        "platform": "PlayStation 3",
                        "score": 9.2,
                        "genre": "Action",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Angry Birds Trilogy",
                        "url": "/games/angry-birds-trilogy/3ds-82424",
                        "platform": "Nintendo 3DS",
                        "score": 7,
                        "genre": "Puzzle, Action",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Angry Birds Trilogy",
                        "url": "/games/angry-birds-trilogy/xbox-360-88826",
                        "platform": "Xbox 360",
                        "score": 7,
                        "genre": "Puzzle, Action",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Angry Birds Trilogy",
                        "url": "/games/angry-birds-trilogy/ps3-135852",
                        "platform": "PlayStation 3",
                        "score": 7,
                        "genre": "Puzzle, Action",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Girls Like Robots",
                        "url": "/games/girls-like-robots/iphone-145093",
                        "platform": "iPhone",
                        "score": 8.5,
                        "genre": "Puzzle",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Happy Wars",
                        "url": "/games/happy-wars/xbox-360-64840",
                        "platform": "Xbox 360",
                        "score": 4,
                        "genre": "Action",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "007 Legends",
                        "url": "/games/007-legends/ps3-132391",
                        "platform": "PlayStation 3",
                        "score": 4.5,
                        "genre": "Action",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Funky Smugglers",
                        "url": "/games/funky-smugglers/iphone-145106",
                        "platform": "iPhone",
                        "score": 9,
                        "genre": "Action",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Colour Bind",
                        "url": "/games/colour-bind/pc-143757",
                        "platform": "PC",
                        "score": 6.2,
                        "genre": "",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "WRC 3 FIA World Rally Championship",
                        "url": "/games/wrc-3-fia-world-rally-championship/xbox-360-131357",
                        "platform": "Xbox 360",
                        "score": 5,
                        "genre": "Racing",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "WRC 3 FIA World Rally Championship",
                        "url": "/games/wrc-3-fia-world-rally-championship/pc-131360",
                        "platform": "PC",
                        "score": 5,
                        "genre": "Racing",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Retro City Rampage",
                        "url": "/games/retro-city-rampage/ps3-128971",
                        "platform": "PlayStation 3",
                        "score": 5.3,
                        "genre": "Action, Adventure",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Retro City Rampage",
                        "url": "/games/retro-city-rampage/pc-129032",
                        "platform": "PC",
                        "score": 5.3,
                        "genre": "Action, Adventure",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Dance Central 3",
                        "url": "/games/dance-central-3/xbox-360-135601",
                        "platform": "Xbox 360",
                        "score": 8,
                        "genre": "Music",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "WRC 3 FIA World Rally Championship",
                        "url": "/games/wrc-3-fia-world-rally-championship/ps3-131361",
                        "platform": "PlayStation 3",
                        "score": 5,
                        "genre": "Racing",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Snapshot",
                        "url": "/games/snapshot/pc-143174",
                        "platform": "PC",
                        "score": 5,
                        "genre": "Platformer",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "F1 2012",
                        "url": "/games/f1-2012/ps3-130382",
                        "platform": "PlayStation 3",
                        "score": 9,
                        "genre": "Racing",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Pro Evolution Soccer 2013",
                        "url": "/games/pro-evolution-soccer-2013/ps3-133012",
                        "platform": "PlayStation 3",
                        "score": 8.5,
                        "genre": "Sports",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "F1 2012",
                        "url": "/games/f1-2012/xbox-360-130379",
                        "platform": "Xbox 360",
                        "score": 9,
                        "genre": "Racing",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Pro Evolution Soccer 2013",
                        "url": "/games/pro-evolution-soccer-2013/pc-133014",
                        "platform": "PC",
                        "score": 8.5,
                        "genre": "Sports",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Borderlands 2",
                        "url": "/games/borderlands-2/xbox-360-94188",
                        "platform": "Xbox 360",
                        "score": 9,
                        "genre": "Shooter, RPG",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Borderlands 2",
                        "url": "/games/borderlands-2/pc-94190",
                        "platform": "PC",
                        "score": 9,
                        "genre": "Shooter, RPG",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Joe Danger: The Movie",
                        "url": "/games/joe-danger-the-movie/xbox-360-115463",
                        "platform": "Xbox 360",
                        "score": 8,
                        "genre": "Action",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Borderlands 2",
                        "url": "/games/borderlands-2/ps3-94189",
                        "platform": "PlayStation 3",
                        "score": 9,
                        "genre": "Shooter, RPG",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Sound Shapes",
                        "url": "/games/sound-shapes-queasy-games/ps4-20007461",
                        "platform": "PlayStation 4",
                        "score": 9,
                        "genre": "Platformer",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Persona 4 Arena",
                        "url": "/games/persona-4-arena/ps3-116910",
                        "platform": "PlayStation 3",
                        "score": 9,
                        "genre": "Fighting",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Persona 4 Arena",
                        "url": "/games/persona-4-arena/xbox-360-116913",
                        "platform": "Xbox 360",
                        "score": 9,
                        "genre": "Fighting",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Hell Yeah! Wrath of the Dead Rabbit",
                        "url": "/games/hell-yeah-wrath-of-the-dead-rabbit/pc-129413",
                        "platform": "PC",
                        "score": 4.9,
                        "genre": "Platformer",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Hell Yeah! Wrath of the Dead Rabbit",
                        "url": "/games/hell-yeah-wrath-of-the-dead-rabbit/xbox-360-129412",
                        "platform": "Xbox 360",
                        "score": 4.9,
                        "genre": "Platformer",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Retro City Rampage",
                        "url": "/games/retro-city-rampage/vita-128972",
                        "platform": "PlayStation Vita",
                        "score": 5.3,
                        "genre": "Action, Adventure",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "The Unfinished Swan",
                        "url": "/games/the-unfinished-swan/ps3-133433",
                        "platform": "PlayStation 3",
                        "score": 9,
                        "genre": "Puzzle",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Tokyo Jungle",
                        "url": "/games/tokyo-jungle-139049/ps3-85484",
                        "platform": "PlayStation 3",
                        "score": 8,
                        "genre": "Adventure",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Halo 4",
                        "url": "/games/halo-4/xbox-360-110563",
                        "platform": "Xbox 360",
                        "score": 9.8,
                        "genre": "Shooter",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Halo 4 (Limited Edition)",
                        "url": "/games/halo-4/xbox-360-134637",
                        "platform": "Xbox 360",
                        "score": 9.8,
                        "genre": "Shooter",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Zone of the Enders HD Collection",
                        "url": "/games/zone-of-the-enders-hd-collection/ps3-110049",
                        "platform": "PlayStation 3",
                        "score": 7,
                        "genre": "Action, Compilation",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Harvest Moon: A New Beginning",
                        "url": "/games/harvest-moon-hajimari-no-daichi/3ds-120299",
                        "platform": "Nintendo 3DS",
                        "score": 8.3,
                        "genre": "Adventure",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Zone of the Enders HD Collection",
                        "url": "/games/zone-of-the-enders-hd-collection/xbox-360-110060",
                        "platform": "Xbox 360",
                        "score": 7,
                        "genre": "Action, Compilation",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Borderlands Legends",
                        "url": "/games/borderlands-legends/iphone-145721",
                        "platform": "iPhone",
                        "score": 6.5,
                        "genre": "Action, RPG",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Borderlands Legends",
                        "url": "/games/borderlands-legends/ipad-145832",
                        "platform": "iPad",
                        "score": 6.5,
                        "genre": "Action, RPG",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Okami HD",
                        "url": "/games/okami/ps3-136378",
                        "platform": "PlayStation 3",
                        "score": 9.4,
                        "genre": "Adventure",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Ragnarok Odyssey",
                        "url": "/games/ragnarok-odyssey/vita-117348",
                        "platform": "PlayStation Vita",
                        "score": 5,
                        "genre": "RPG",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Need for Speed Most Wanted",
                        "url": "/games/need-for-speed-most-wanted-2012/iphone-135825",
                        "platform": "iPhone",
                        "score": 6.9,
                        "genre": "Racing, Action",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Pid",
                        "url": "/games/pid/xbox-360-124089",
                        "platform": "Xbox 360",
                        "score": 7.8,
                        "genre": "Platformer",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Pid",
                        "url": "/games/pid/pc-124085",
                        "platform": "PC",
                        "score": 7.8,
                        "genre": "Platformer",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Pid",
                        "url": "/games/pid/ps3-124088",
                        "platform": "PlayStation 3",
                        "score": 7.8,
                        "genre": "Platformer",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Need for Speed Most Wanted",
                        "url": "/games/need-for-speed-most-wanted-2012/ps3-126560",
                        "platform": "PlayStation 3",
                        "score": 9,
                        "genre": "Racing, Action",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Assassin's Creed III",
                        "url": "/games/assassins-creed-iii/xbox-360-128701",
                        "platform": "Xbox 360",
                        "score": 8.5,
                        "genre": "Action, Adventure",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Need for Speed Most Wanted",
                        "url": "/games/need-for-speed-most-wanted-2012/xbox-360-135486",
                        "platform": "Xbox 360",
                        "score": 9,
                        "genre": "Racing, Action",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "Assassin's Creed III: Liberation",
                        "url": "/games/assassins-creed-vita/vita-115670",
                        "platform": "PlayStation Vita",
                        "score": 7.2,
                        "genre": "Action",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Smart As...",
                        "url": "/games/smart-as-135038/vita-98920",
                        "platform": "PlayStation Vita",
                        "score": 8.5,
                        "genre": "Educational, Puzzle",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Assassin's Creed III",
                        "url": "/games/assassins-creed-iii/ps3-128700",
                        "platform": "PlayStation 3",
                        "score": 8.5,
                        "genre": "Action, Adventure",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Need for Speed Most Wanted",
                        "url": "/games/need-for-speed-most-wanted-2012/pc-135628",
                        "platform": "PC",
                        "score": 9,
                        "genre": "Racing, Action",
                        "editors_choice": "Y",
                        "release_year": 2012
                    },
                    {
                        "title": "WWE '13",
                        "url": "/games/wwe-13/ps3-127917",
                        "platform": "PlayStation 3",
                        "score": 8.4,
                        "genre": "Wrestling",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Street Fighter x Tekken",
                        "url": "/games/street-fighter-x-tekken/vita-110720",
                        "platform": "PlayStation Vita",
                        "score": 6.6,
                        "genre": "Fighting",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "WWE '13",
                        "url": "/games/wwe-13/xbox-360-127923",
                        "platform": "Xbox 360",
                        "score": 8.4,
                        "genre": "Wrestling",
                        "editors_choice": "N",
                        "release_year": 2012
                    },
                    {
                        "title": "Chivalry: Medieval Warfare",
                        "url": "/games/chivalry-medieval-warfare-142591/pc-75122",
                        "platform": "PC",
                        "score": 7.9,
                        "genre": "Adventure",
                        "editors_choice": "N",
                        "release_year": 2012
                    }
                ]
            }
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