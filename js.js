 var players = [];

function onYouTubeIframeAPIReady() {

var predefined_players = document.getElementsByClassName("yt_videos")[0].getElementsByTagName('iframe');

console.log("number of players: " + predefined_players.length);

for(var i = 0; i < predefined_players.length; i++){
predefined_players[i].id = "player" + i;
  players[i] = new YT.Player("player" + i, {
    events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
    }
});
}
}


function onPlayerReady() {
//console.log("hey Im ready");
// players[1].playVideo();
    }

    function onPlayerStateChange(event) {
        var link = event.target.a.id;
        var newstate = event.data;
//        console.log("I am " + link + " My state changed to " + newstate);
if (newstate == YT.PlayerState.PLAYING) {
    players.forEach(function(item, i) {
        if (item.a.id != link) item.pauseVideo();
    });
}
}