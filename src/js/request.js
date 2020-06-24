export default class Request {

    constructor() {
        this.getFetch();
    }

    loadData(fetchData) {
        let playerAudio = document.getElementById("player-audio");
        let playerAudioName = document.querySelector('.player__artist');

        if (fetchData) {
            playerAudioName.innerHTML = `${fetchData.contributors[0].name} - ${fetchData.title}`;
            playerAudio.setAttribute('src', `${fetchData.preview}`);
        }
    }

    async getFetch(songs) {
        let self = this;

        try {
            await fetch(
                'https://cors-anywhere.herokuapp.com/http://api.deezer.com/track/' + songs + '/',
                {
                    method: 'GET', // *GET, POST, PUT, DELETE, etc.
                    mode: 'cors', // no-cors, *cors, same-origin
                    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    dataType: "json",
                    headers: {
                        "X-Requested-With": "XMLHttpRequest",
                    },
                })
                .then((res) => {
                    // console.log(res);
                    return res.json();
                })
                .then((data) => {
                    if (data.preview) {
                        self.loadData(data);
                        return data;
                    }
                })
        } catch (err) {
            alert(err); // TypeError: failed to fetch
        }
    }
}
