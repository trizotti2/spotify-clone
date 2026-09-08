let songs = [
    {
        name: "Have a Nice Day",
        artist: "Bon Jovi",
        image: "/resources/images/Have_a_Nice_Day.jpg",
        location: "/resources/songs/HAVEANICEDAY.mp3",
        liked: false
    },
    {
        name: "Send Me An Angel",
        artist: "Scorpions",
        image: "/resources/images/ScorpionsCrazyWorld.jpg",
        location: "/resources/songs/Scorpions - Send Me An Angel.mp3",
        liked: false
    },
    {
        name: "Rock you like a Hurricane",
        artist: "Scorpions",
        image: "/resources/images/The_Scorpions_LatFS.jpg",
        location: "/resources/songs/Scorpions - Rock you like a Hurricane.mp3",
        liked: false
    }
];

const songName = document.getElementById("song-name");
const artistName = document.getElementById("artist-name");
const cover = document.getElementById("cover");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress")
const progressContainer = document.getElementById("progress-container");
const songTime = document.getElementById("song-time");
const totalTime = document.getElementById("total-time");

songName.innerText = songs[0].name;
artistName.innerText = songs[0].artist;
cover.src = songs[0].image;
audio.src = songs[0].location;

let playing = false;
let sortedPlaylist = [...songs];
let repeatSwitch = false;
let shuffleSwitch = false;
let playQueueIndex = 0;

function nextSong() {
    if (sortedPlaylist[playQueueIndex + 1]) {
        playQueueIndex += 1;
        playSong();
    } else {
        playQueueIndex = 0;
        songName.innerText = sortedPlaylist[playQueueIndex].name;
        artistName.innerText = sortedPlaylist[playQueueIndex].artist;
        cover.src = sortedPlaylist[playQueueIndex].image;
        audio.src = sortedPlaylist[playQueueIndex].location;
        if (repeatSwitch) {
            playSong();
        } else {
            audio.pause();
        }
    }
}

function shuffleArray(preShuffledArray) {
    let size = preShuffledArray.length;
    let currentIndex = size - 1;
    while (currentIndex > 0) {
        let randomIndex = Math.floor(Math.random() * size);
        let aux = preShuffledArray[currentIndex];
        preShuffledArray[currentIndex] = preShuffledArray[randomIndex];
        preShuffledArray[randomIndex] = aux;
        currentIndex -= 1;
    }
}

function toHHMMSS(number) {
    let hours = Math.floor(number / 3600);
    let minutes = Math.floor((number - hours * 3600) / 60);
    let seconds = Math.floor(number - hours * 3600 - minutes * 60);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

function playSong() {
    audio.pause();
    songName.innerText = sortedPlaylist[playQueueIndex].name;
    artistName.innerText = sortedPlaylist[playQueueIndex].artist;
    cover.src = sortedPlaylist[playQueueIndex].image;
    audio.src = sortedPlaylist[playQueueIndex].location;
    audio.play();
}

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
    nextSong();    
});

previous.addEventListener('click', () => {
    if (playQueueIndex === 0) {
        playQueueIndex = sortedPlaylist.length - 1;
    } else {
        playQueueIndex -= 1;
    }
    playSong();
    if(sortedPlaylist[playQueueIndex].liked) {
        like.querySelector(".bi").classList.remove("bi-heart");
        like.querySelector(".bi").classList.add("bi-heart-fill");
    }
    else{
        like.querySelector(".bi").classList.remove("bi-heart-fill");
        like.querySelector(".bi").classList.add("bi-heart");
    }
});

repeat.addEventListener('click', () => {
    let repeatButton = document.getElementById('repeat');
    if (repeatSwitch) {
        repeatButton.classList.remove('active-button');
        repeatSwitch = false;
    }
    else {
        repeatButton.classList.add('active-button');
        repeatSwitch = true;
    }
});

shuffle.addEventListener('click', () => {
    if (!shuffleSwitch) {
        shuffleSwitch = true;
        shuffleArray(sortedPlaylist);
        shuffle.classList.add('active-button');
    } else {
        shuffleSwitch = false;
        sortedPlaylist = [...songs];
        shuffle.classList.remove('active-button');
    }

})

audio.addEventListener('timeupdate', () => {
    const barWidth = (audio.currentTime / audio.duration) * 100;
    progress.style.setProperty('--progress', `${barWidth}%`);
    songTime.innerText = toHHMMSS(audio.currentTime);
});
audio.addEventListener('ended', nextSong);
audio.addEventListener('loadedmetadata', () => {
    totalTime.innerText = toHHMMSS(audio.duration);
})

progressContainer.addEventListener('click', (event) => {
    const width = progressContainer.clientWidth;
    const clickPosition = event.offsetX;
    const jumpToTime = (clickPosition / width) * audio.duration;
    audio.currentTime = jumpToTime;
P});

like.addEventListener('click', () => {
    let likeButton = document.getElementById('like');

    if (songs[playQueueIndex].liked) {
        likeButton.querySelector(".bi").classList.remove("bi-heart-fill");
        likeButton.querySelector(".bi").classList.add("bi-heart");
        songs[playQueueIndex].liked = false;
    }
    else {
        likeButton.querySelector(".bi").classList.remove("bi-heart");
        likeButton.querySelector(".bi").classList.add("bi-heart-fill");
        songs[playQueueIndex].liked = true;
    }
});