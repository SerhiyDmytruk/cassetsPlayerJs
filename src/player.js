// import request from "./request";

export default function player() {
  const playerMain = document.getElementById("player");

  const playerAudio = document.getElementById("player-audio");

  const btnPlayStop = document.getElementsByClassName(
    "player__btn--play-stop"
  )[0];

  // const player = new Player();

  btnPlayStop.addEventListener("click", function() {
    // checking class
    if (playerMain.classList.contains("active")) {
      playerMain.classList.remove("active");
      playerAudio.pause();
    } else {
      playerMain.classList.add("active");
      playerAudio.play();
    }
  });
}
