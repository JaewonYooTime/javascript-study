// 💡 https://github.com/erumcoding/js-101-part-1
// 👉 이 아래 코드를 작성하세요.
// 무료비디오 구하는 사이트: pexel.com/search/videos/1920's


const button = document.querySelector('button');

const togglePlay = () => {
    const video = document.querySelector('video');
    // console.log(video.paused); // 정지되면 true, 재생중이면 falue
    if (video.paused){
        button.innerText = 'Pause';
        video.play();
    } else {
        button.innerText = 'Play';
        video.pause();
    }
}

button.addEventListener('click', togglePlay);