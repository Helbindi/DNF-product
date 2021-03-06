// Trailer Modal
var modal = document.getElementById("trailer-modal");
var openBtn = document.getElementById("btn-modal");
var closeBtn = document.getElementsByClassName("close")[0];

// On button click, open the Modal
openBtn.onclick = () => {
  modal.style.display = "block";
};

// On span (x button) click, close the Modal
closeBtn.onclick = function () {
  stopVideo();
  modal.style.display = "none";
};

// Youtube iframe API: https://developers.google.com/youtube/iframe_api_reference
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", { videoId: "gf0ZlqM1yfQ" });
}

function stopVideo() {
  player.stopVideo();
}

// Scroll To Top
const scrollToTop = document.querySelector(".scroll-to-top");
const heroSection = document.querySelector(".hero-section");
const options = {
  root: null,
  threshold: 0.3,
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      scrollToTop.style.display = "none";
    } else {
      scrollToTop.style.display = "block";
    }
  });
}, options);

observer.observe(heroSection);
