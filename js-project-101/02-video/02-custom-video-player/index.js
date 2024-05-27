// 💡 https://github.com/erumcoding/js-101-part-1
// 👉 이 아래 코드를 작성하세요.


const video = document.querySelector('video');
const playButton = document.querySelector('.play-pause');
const rateButtons = document.querySelectorAll('.rate');
const volumeBar = document.querySelector('input');

const formatting = (time) =>{
    const sec = Math.floor(time % 60); // 60초가 넘지 않도록
    const min = Math.floor(time / 60) % 60; // 60분이 넘지 않도록
    const hour = Math.floor(time / 3600);

    const fSec = sec < 10 ? `0${sec}` : sec;
    const fMin = min < 10 ? `0${min}` : min;
    const fHour = hour < 10 ? `0${hour}` : hour;

    return `${fHour}:${fMin}:${fSec}`;
}

const play = () => {
    playButton.innerText = '||';
    video.play();
}

const pause = () => {
    playButton.innerText = '▶';
    video.pause();    
}

const togglePlay = () => {
    video.paused ? play() : pause();
    // if(video.paused){
    //     play();
    // } else {
    //     pause();
    // }
}

const setRate = (event) => {
    // console.log(event.target.dataset)
    const {rate} = event.target.dataset;
    video.playbackRate = rate;
}

const setVolume = (event) => {
    // console.log(event.target.value);
    video.volume = event.target.value;
}

const updateTime = () => {
    const current = document.querySelector('.current');
    const duration = document.querySelector('.duration');
    
    current.innerText = formatting(video.currentTime);
    duration.innerText = formatting(video.duration);
}

const updateProgress = () => {
    // console.log((video.currentTime / video.duration) * 100);
    const percent = (video.currentTime / video.duration) * 100;
    const progressBar = document.querySelector('.bar');
    progressBar.style.width = `${percent}%`;

    if (video.ended){
        pause();
    }
}

playButton.addEventListener('click', togglePlay);
rateButtons.forEach((button) => {
    button.addEventListener('click', setRate);
})
volumeBar.addEventListener('change', setVolume);

video.addEventListener('timeupdate', updateTime);

video.addEventListener('timeupdate', updateProgress);