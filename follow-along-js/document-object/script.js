let val;

const list = document.querySelector('ul.list-group');

const listItem = document.querySelector('li.list-group-item:first-child');

// console.log('list', list);
// console.log('listItem', listItem)

val = list.childNodes; // NodeList 반환, line break도 포함
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;
val = list.childNodes[3]; 
val = list.childNodes[3].nodeType; // Node/type

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment node
// 9 - Document itself
// 10 - Doctype

// children element nodes 반환
val = list.children; // HTML Collection 반환, text(linebreak) 미포함, 주석도 미포함
val = list.children[1];

list.children[1].textContent = 'Hi';

// First child
val = list.firstChild;
// list.firstChild === list.childNodes[0];

val = list.firstElementChild;

// Last child
val = list.lastChild;
// list.lastChild === list.childNodes[list.childNodes.length - 1];
val = list.lastElementChild;

// child 요소 count
val = list.childElementCount;

// parent node 반환
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// next sibling 반환
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.previousElementSibling;

// previous sibling 반환
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;

for (let node of list.childNodes){
  console.log(node);
}

console.log(Array(list.childNodes).filter);

// console.log('val', val);   