const buttonPlay = document.getElementById("playvideo");
const myVideo = document.getElementById("video")

function playVideo() {
    myVideo.play();
    buttonPlay.style.display = 'none';
    myVideo.controls = true;
}