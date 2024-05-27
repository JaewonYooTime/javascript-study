// 무료 강의 👉 https://youtube.com/playlist?list=PLI33CnBTx2MZGD7zAQ810_B8dDU_E8gaq
// 이 아래 코드를 작성하세요.

const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

function clock (){
    const now = new Date();
    hour.innerText = String(now.getHours()).padStart(2, '0');
    min.innerText = String(now.getMinutes()).padStart(2, '0');
    sec.innerText = String(now.getSeconds()).padStart(2, '0');
}
setInterval(clock, 1000);