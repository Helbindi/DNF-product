var modal = document.getElementById('trailer-modal');
var btn = document.getElementById('btn-modal');
var span = document.getElementsByClassName("close")[0];

// On button click, open the Modal
btn.onclick = () => {
    modal.style.display = 'block';
}

// On span (x button) click, close the Modal
span.onclick = function () {
    stopVideo();
    modal.style.display = 'none';
}


var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', { videoId: 'gf0ZlqM1yfQ' });
}

function stopVideo() {
    player.stopVideo();
}