let songs = [
    {
        name: "Have a Nice Day",
        artist: "Bon Jovi",
        image: "/resources/images/Have_a_Nice_Day.jpg",
        location: "/resources/songs/HAVEANICEDAY.mp3"
    },
    {
        name: "Send Me An Angel",
        artist: "Scorpions",
        image: "/resources/images/ScorpionsCrazyWorld.jpg",
        location: "/resources/songs/Scorpions - Send Me An Angel.mp3"
    },
    {
        name: "Rock you like a Hurricane",
        artist: "Scorpions",
        image: "/resources/images/The_Scorpions_LatFS.jpg",
        location: "/resources/songs/Scorpions - Rock you like a Hurricane.mp3"
    }
];

const songName = document.getElementById("song-name");
const artistName = document.getElementById("artist-name");
const cover = document.getElementById("cover");
const audio = document.getElementById("audio");

songName.innerText = songs[0].name;
artistName.innerText = songs[0].artist;
cover.src = songs[0].image;
audio.src = songs[0].location;

let playing = false;
let repeatSwitch = false;
let shuffleSwitch = false;
let playQueueIndex = 0;

play.addEventListener("click", () => {
    if (playing) {
        play.querySelector(".bi").classList.add("bi-play-circle-fill");
        play.querySelector(".bi").classList.remove("bi-pause-circle-fill");
        audio.pause();
        playing = false;
    } else {
        play.querySelector(".bi").classList.remove("bi-play-circle-fill");
        play.querySelector(".bi").classList.add("bi-pause-circle-fill");
        audio.play();
        playing = true;
    }

});

next.addEventListener('click', () => {

    if (songs[playQueueIndex + 1]) {
        playQueueIndex += 1;
        playSong();
    } else {
        playQueueIndex = 0;
        songName.innerText = songs[playQueueIndex].name;
        artistName.innerText = songs[playQueueIndex].artist;
        cover.src = songs[playQueueIndex].image;
        audio.src = songs[playQueueIndex].location;
        console.log(repeatSwitch);
        if (repeatSwitch) {
            playSong(); 
        } else {
        audio.pause();
        }
    }
});

previous.addEventListener('click', () => {
    playQueueIndex -= 1;
    playSong();
});

repeat.addEventListener('click', () => {
    let repeatButton = document.getElementById('repeat');
    if (repeatSwitch) {
        repeatButton.classList.remove('green-button');
        repeatSwitch = false;
    }
    else {
        repeatButton.classList.add('green-button');
        repeatSwitch = true;
    }
});

function playSong() {
    audio.pause();
    songName.innerText = songs[playQueueIndex].name;
    artistName.innerText = songs[playQueueIndex].artist;
    cover.src = songs[playQueueIndex].image;
    audio.src = songs[playQueueIndex].location;
    audio.play();
}
