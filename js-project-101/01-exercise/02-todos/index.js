
// 무료 강의 👉 https://youtube.com/playlist?list=PLI33CnBTx2MZGD7zAQ810_B8dDU_E8gaq
// 이 아래 코드를 작성하세요.


const form = document.querySelector('form');

const input = document.querySelector('input');

const ul = document.querySelector('ul');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // 제출할때마다 새로고침 됨을 방지
    // console.log(input.value); // 사용자가 입력한 텍스트 확인

    // 사용자가 아무것도 입력하지 않을 경우에 대한 처리
    if(input.value !== ''){
        const li = document.createElement('li'); // 새로운 요소 생성
        li.innerText = input.value; // 요소의 innerText 속성에 사용자 입력값 입력
        
        // 화면출력을 위해 문서 기존 구성요소에 추가하는 것
        ul.appendChild(li); // ul 태그의 자식요소로 추가, 
        
        input.value = ''; // 리스트 추가 후, input 텍스트가 비어있게 함
    }
}) 