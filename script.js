window.addEventListener("keydown", function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add("active");
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
});

window.addEventListener("keyup", function(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.remove("active");
});

const keys = document.querySelectorAll(".key");
const audio = document.querySelectorAll("audio[data-key]");
keys.forEach((key, index) => {
    key.addEventListener("click", function() {
        audio[index].currentTime = 0;
        audio[index].play();
    })
});