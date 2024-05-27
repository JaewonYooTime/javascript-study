// canvas를 사용하기 위한 코드

const canvas = document.querySelector('canvas');
const color = document.querySelector('#color');
const width = document.querySelector('#width');
const clear = document.querySelector('.clear');
const save = document.querySelector('.save');

const ctx = canvas.getContext('2d');
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

let isPainting = false; //그려지는 중인지 판단하는 변수
let lineWidth = 5;      // 선의 기본 두께

// 저장 기능
save.addEventListener('click', () => {
    // 이미지로 저장, toBlob() 함수는 blob객체를 제공함, 그거 활용해서 저장 가능
    canvas.toBlob((blob) => {
        const a = document.createElement('a');


        // URL.createObjectURL는 특정파일을 넣어주면 URL을 만들어줌.
        a.href = URL.createObjectURL(blob);
        a.download = 'erumcoding.jpg';
        a.click();
    });
})

// Clear 버튼 클릭 시, 다 날아가도록
clear.addEventListener('click', () =>{
    // 사각형 형태 날아가는 함수, ctx.clearRect(x좌표, y좌표, x크기, y크기)
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
})

// 선의 굵기 변경
width.addEventListener('change', (event)=>{
    // event.target.value; // 5, 6, 7 이런식
    lineWidth = event.target.value; // 선 굵기 변경
})

// 선의 색 변경
color.addEventListener('change', (event) => {
    // console.log(event.target.value)
    // ctx.strokeStyle는 선의 색깔을 정하는 속성
    ctx.strokeStyle = event.target.value;
})

// 마우스가 캔버스 벗어나면 isPainting이 false되도록 설정.
canvas.addEventListener('mouseout', (event) =>{
    isPainting = false;
}) 

canvas.addEventListener('mousemove', (event) =>{
    // console.log(event);
    if(!isPainting){
        return;
    }
    ctx.lineWidth = lineWidth; // 선 두께 결정
    ctx.lineCap = 'round'; // 선 끝부분 동그랗게, 부드럽게 설정
    // 선을 그림, 이전 경로부터 지정된 위치까지 선을 그림
    ctx.lineTo(event.offsetX, event.offsetY); 
    ctx.stroke(); // 윤곽선 렌더링, lineTo만으로는 선이 그려지지 않음
}) 

canvas.addEventListener('mousedown', (event) => {
    // console.log(event); // offsetX,Y가 마우스 위치 
    isPainting = true;
    ctx.beginPath(); // 새로운 경로 시작
    ctx.moveTo(event.offsetX, event.offsetY);
});

canvas.addEventListener('mouseup', (event) => {
    isPainting = false;
});

