const canvas = document.querySelector('canvas');
const imageFile = document.querySelector('#image-file');
const textInputs = document.querySelectorAll('.text');

const topTextInput = document.querySelector('#top-text');
const bottomTextInput = document.querySelector('#bottom-text');

const ctx = canvas.getContext('2d');

let image;
let width;
let height;

let topText = '';
let bottomText = '';

// 그림 위에 텍스트 추가, topText, bottomText 동시에 추가함
const drawText = () =>{
    const offsetY = height / 20;
    const fontSize = width / 10;

    ctx.font = `${fontSize}px sans-serif`
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.strokeStyle = 'black'; // 글자의 외곽선
    ctx.lineWidth = fontSize / 5; // 외곽선 두께
    ctx.lineJoin = 'round'; // 선이 꺾이는 부분 부드럽게

    // 하나는 위쪽에 하나는 아래쪽에 글자 배치할 것임
    // strokeText가 fillText보다 먼저 와야 외곽선 그리고, 내부를 채움
    ctx.textBaseline = 'top';
    ctx.strokeText(topText, width / 2, offsetY);
    ctx.fillText(topText, width / 2, offsetY);

    ctx.textBaseline = 'bottom';
    ctx.strokeText(bottomText, width / 2, height - offsetY);
    ctx.fillText(bottomText, width / 2, height - offsetY);
}


// TopText 추가
const updateTopText = (event) => {
    topText = event.target.value;
    // console.log(topText);
    drawText();
}

// BottomText 추가
const updateBottomText = (event) => {
    bottomText = event.target.value;
    // console.log(bottomText);
    drawText();
}

const showInputs = () => {
    textInputs.forEach((input) => {
        input.style.display = 'flex';
    })
}

const uploadImage = () => {
    width = image.width;
    height = image.height;

    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(image, 0, 0);
    showInputs();
}

const createImage = (event) => {
    // console.log(event.target.files[0]);
    const imageUrl = URL.createObjectURL(event.target.files[0]);
    
    image = document.createElement('img');
    image.src = imageUrl;

    // console.log(image)
    image.addEventListener('load', uploadImage);
}

imageFile.addEventListener('change', createImage);

topTextInput.addEventListener('change', updateTopText);
bottomTextInput.addEventListener('change', updateBottomText);