"use strict";

import Request from "./request";

const requestToDizzer = new Request();

export default class Player {

    constructor() {
        this.initPlayer();
    }

    initPlayer() {

        // data for player
        let listSongs = [3135556, 106506522, 70322130];
        let listSongsLength = listSongs.length - 1;
        let i = 0;

        // tag elements
        let playerMain = document.getElementById("player");
        let playerAudio = document.getElementById("player-audio");
        let playerBtnAll = document.querySelectorAll('.player__btn');

        // simple checking music items
        if (listSongsLength > 1) {
            playerBtnAll.forEach(btn => btn.removeAttribute('disabled'));
        }

        // player controls btn - "Play, Stop, Next and Prev"
        this._playBtn(listSongs[i], playerMain, playerAudio);
        this._stopBtn(playerMain , playerAudio);

        this._otherControlsBtn("next", i, listSongsLength, listSongs, playerMain , playerAudio);
        this._otherControlsBtn("prev", i, listSongsLength, listSongs, playerMain , playerAudio);
    }


    _playBtn(melody, playerBody, playerAudio) {

        let btnPlay = document.querySelector('.player__btn--playing');

        btnPlay.addEventListener("click", function () {
            playerBody.classList.add("active");
            playerAudio.play();
        });

        requestToDizzer.getFetch(melody);
    }

    _stopBtn(playerBody, playerAudio) {

        let btnStop = document.querySelector('.player__btn--stop');

        btnStop.addEventListener("click", function () {
            playerBody.classList.remove("active");
            playerAudio.pause();
        });
    }

    _otherControlsBtn(typeBtn, count, listLength, musicItems, playerBody, playerAudio) {

        let self = this;
        let otherBtn = document.getElementsByClassName("player__btn--" + typeBtn)[0];

        otherBtn.addEventListener("click", function () {

            // checking which type of other button we need, prev or next
            if (typeBtn === "prev") {
                count--;

                if (count < 0) {
                    count = listLength;
                }
            } else {
                count++;

                if (count > listLength) {
                    count = 0;
                }
            }

            self._stopBtn(playerBody , playerAudio);
            self._playBtn(musicItems[count], playerBody, playerAudio);
        });
    }
}
