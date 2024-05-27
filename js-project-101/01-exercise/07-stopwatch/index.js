const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

let timerID;

let [msec, sec, min] = [0,0,0]; // 구조분해할당
// let msec = 0;
// lec sec = 0;
// let min = 0;


const displayTimer = () =>{
    const time = document.querySelector('.time');

    const fMin = min < 10 ? `0${min}` : min;
    const fSec = sec < 10 ? `0${sec}` : sec;
    const fMsec = msec < 10 ? `0${msec}` : msec;
    time.innerText = `${fMin} : ${fSec} : ${fMsec}`;
}
const timer = () => {
    msec++; //0.01초씩 증가, 100 -> 1초
    if (msec === 100) {
        msec = 0;
        sec++;
    }
    if (sec === 60) {
        sec = 0;
        min++;
    }
    displayTimer();
};

const start = () => {
    timerID = setInterval(timer, 10);
};

const stop = () => {
    clearInterval(timerID);
};

const reset = () => {
    stop();
    [msec, sec, min] = [0,0,0];
    displayTimer();
};

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);