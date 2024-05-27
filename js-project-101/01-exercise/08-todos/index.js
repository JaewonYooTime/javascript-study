const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
/*
  1. 삭제 버튼 추가
  2. 저장 되게끔 (새로고침을 해도)
  3. 삭제 버튼 -> 저장된 데이터 업데이트
*/
let todos = [];

const save = () =>{
  localStorage.setItem('todos', JSON.stringify(todos));
}

const delItem = (event) =>{
  const target = event.target.parentElement;
  // todos = todos.filter((todo) => todo.id != target.id); // todos에서 
  todos = todos.filter((todo) => todo.id !== parseInt(target.id)); // todos에서 
  save();
  target.remove();
}

const addItem = (todo) =>{
  // 텍스트가 비어있찌 않다면 동작
  if (todo.text !== '') {
    const li = document.createElement('li');
    const button = document.createElement('button');
    const span = document.createElement('span'); // span 태그 생성
    
    span.innerText = todo.text; // span의 innerText에 text 넣음
    button.innerText = '삭제';
    button.addEventListener('click', delItem);

    // li.appendChild(span);
    // li.appendChild(button);
    li.append(span, button); // 여러 태그 동시 추가
    ul.appendChild(li);
    li.id = todo.id;
  }
}

const handler = (event) =>{
  event.preventDefault(); // 새로고침 방지

  const todo = {
    id: Date.now(),
    text: input.value,
  };
  todos.push(todo);
  addItem(todo);   // input.value 넘기기
  save();
  input.value = '';       // 공백으로 만들기
}

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem('todos'));

  if (userTodos){
    // console.log(userTodos);
    userTodos.forEach((todo) => {
      addItem(todo);
    })
    todos = userTodos;
  }
}

init();
form.addEventListener('submit', handler);