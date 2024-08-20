const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const volumeSlider = document.getElementById('volume');
const seekbar = document.getElementById('seekbar');
const lyricsContainer = document.getElementById('lyrics-container');

const lyrics = [
    { time: 16, text: "Her name was Lola, she was a showgirl" },
    { time: 20, text: "With yellow feathers in her hair and a dress cut down to there" },
    { time: 24, text: "She would merengue and do the cha-cha" },
    { time: 29, text: "And while she tried to be a star" },
    { time: 31, text: "Tony always tended bar" },
    { time: 33, text: "Across the crowded floor, they worked from 8 till 4" },
    { time: 37, text: "They were young and they had each other" },
    { time: 39, text: "Who could ask for more?" },
    { time: 41, text: "At the Copa (Copacabana)" },
    { time: 46, text: "The hottest spot north of Havana" },
    { time: 49, text: "At the Copa (Copacabana)" },
    { time: 53, text: "Music and passion were always in fashion" },
    { time: 58, text: "At the Copa, they fell in love" },
    { time: 63, text: "(Copa, Copacabana)" },
    { time: 70, text: "His name was Rico, he wore a diamond" },
    { time: 74, text: "He was escorted to his chair, he saw Lola dancing there" },
    { time: 78, text: "And when she finished, he called her over" },
    { time: 81, text: "But Rico went a bit too far" },
    { time: 84, text: "Tony sailed across the bar" },
    { time: 86, text: "And then the punches flew and chairs were smashed in two" },
    { time: 90, text: "There was blood and a single gunshot" },
    { time: 92, text: "But just who shot who?" },
    { time: 95, text: "At the Copa (Copacabana)" },
    { time: 99, text: "The hottest spot north of Havana" },
    { time: 103, text: "At the Copa (Copacabana)" },
    { time: 107, text: "Music and passion were always in fashion" },
    { time: 111, text: "At the Copa, she lost her love" },
    { time: 116, text: "(Copa, Copacabana)" },
    { time: 124, text: "(Copa, Copacabana, Copacabana)" },
    { time: 136, text: "Music and pasion always in fasion" },
    { time: 152, text: "Her name is Lola, she was a showgirl" },
    { time: 156, text: "But that was 30 years ago, when they used to have a show" },
    { time: 160, text: "Now it's a disco, but not for Lola" },
    { time: 164, text: "Still in the dress she used to wear" },
    { time: 166, text: "Faded feathers in her hair" },
    { time: 169, text: "She sits there so refined, and drinks herself half-blind" },
    { time: 172, text: "She lost her youth and she lost her Tony" },
    { time: 175, text: "Now she's lost her mind!" },
    { time: 177, text: "At the Copa (Copacabana)" },
    { time: 181, text: "The hottest spot north of Havana" },
    { time: 185, text: "At the Copa (Copacabana)" },
    { time: 190, text: "Music and passion were always in fashion" },
    { time: 193, text: "At the Copa, don't fall in love" },
    { time: 199, text: "(Copa)" },
    { time: 200, text: "don't fall in love (Copacabana)" },
    { time: 205, text: "(Copacabana, Copacabana)" },
    { time: 214, text: "...." },
    { time: 222, text: "(Copa, Copacabana, Copacabana, Copacabana)" }
];

playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.classList.add('pause');
        playPauseButton.classList.remove('play');
    } else {
        audio.pause();
        playPauseButton.classList.add('play');
        playPauseButton.classList.remove('pause');
    }
});

volumeSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value;
});

seekbar.addEventListener('input', (e) => {
    const newTime = (e.target.value / 100) * audio.duration;
    audio.currentTime = newTime;
});

audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const progress = (currentTime / duration) * 100;
    seekbar.value = progress;

    let currentLyrics = lyrics.find(lyric => lyric.time <= currentTime && (lyrics[lyrics.indexOf(lyric) + 1] ? lyrics[lyrics.indexOf(lyric) + 1].time > currentTime : true));
    if (currentLyrics) {
        lyricsContainer.textContent = currentLyrics.text;
        lyricsContainer.style.opacity = 1;
    } else {
        lyricsContainer.textContent = '';
        lyricsContainer.style.opacity = 0;
    }
});