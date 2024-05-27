const form = document.querySelector('form');
const blocks = document.querySelectorAll('.list');

let from, to;

let todoList = [], doingList = [], doneList = [];
const lists = {
    todo: todoList,
    doing: doingList,
    done: doneList,
};

const removeTodo = (event) => {
    event.preventDefault();

    const { id } = event.target;
    const { id: listId } = event.target.parentElement; // id값을 추출하여 listId에 저장

    event.target.remove();
    lists[listId] = lists[listId].filter((todo) => {
        return todo.id !== id;
    })

    saveList(listId);
}

const saveList = (listId) => {
    localStorage.setItem(listId, JSON.stringify(lists[listId]));
}

const dragOver = (event) => {
    event.preventDefault();

    const { id: targetId } = event.target;
    const listIds = Object.keys(lists);
    if (listIds.includes(targetId)) {
        to = targetId;
    }
}

const dragStart = (event) => {
    from = event.target.parentElement.id;
    to = from;
}
const dragEnd =  (event) => {
    const { id } = event.target;

    if (from === to) {
        return;
    }
    event.target.remove();
    // createElement(to, )
    lists[from] = lists[from].filter((todo) => {
        if (todo.id !== id) {
            return todo;
        } else {
            createElement(to, todo);
        }
    })

    saveList(from);
    saveList(to);
}

const createElement = (listId, todo) =>{
    const list = document.querySelector(`#${listId}`);
    const item = document.createElement('div');

    item.id = todo.id;
    item.innerText = todo.text;
    item.className = 'item';
    item.draggable = true;

    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
    item.addEventListener('contextmenu', removeTodo);

    list.append(item);

    lists[listId].push(todo);
}

const createTodo = (event) => {
    event.preventDefault();
    const input = document.querySelector('input');
    const id = uuidv4();    // UUID 범용고유식별자
    const newTodo = {
        id, 
        text: input.value,
    }
    // console.log(id);
    createElement('todo', newTodo);
    input.value = '';
    saveList('todo');

}

const loadList = () => {
    const userTodoList = JSON.parse(localStorage.getItem('todo'));
    const userDoingList = JSON.parse(localStorage.getItem('doing'));
    const userDoneList = JSON.parse(localStorage.getItem('done'));


    if (userTodoList) {
        userTodoList.forEach((todo) => {
            createElement('todo', todo);
        })
    }
    if (userDoingList) {
        userDoingList.forEach((todo) => {
            createElement('doing', todo);
        })
    }
    if (userDoneList) {
        userDoneList.forEach((todo) => {
            createElement('done', todo);
        })
    }

}

loadList();
form.addEventListener('submit', createTodo);
blocks.forEach((block) => {
    block.addEventListener('dragover', dragOver);
})