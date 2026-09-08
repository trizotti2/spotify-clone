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

play.addEventListener("click", () => {
    audio.play();
});