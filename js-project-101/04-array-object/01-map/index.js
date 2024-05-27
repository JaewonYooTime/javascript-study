// import products from "../products.json" with {type: 'json'}

import products from "../products.js";
// console.log(products.data); // 데이터 잘 불러와지는지 확인

const button = document.querySelector('button');

const createItem = (product) => {   
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const div = document.createElement('div');

    // 한번 쓸 거면 이렇게 하면 됨
    const price = new Intl.NumberFormat('ko-KR', {
        style: 'currency',
        currency: 'KRW',
    }).format(product.price);

    // 여러번 쓸거면 아래처럼 하면 됨
    // const krw = new Intl.NumberFormat('ko-KR', {
    //     style: 'currency',
    //     currency: 'KRW',
    // }).;
    // const price = krw.format(product.price);

    li.id = product.id;
    h3.className = 'name';
    h3.innerText = product.name;
    div.className = 'price';
    div.innerText = price;

    li.append(h3, div);
    ul.append(li);
}

const importData = () =>{
    products.data.map((product) => {
        // 같은 아이디 값을 가진 프로덕트가 존재하지 않을 때만 createItem 실행
        if(!document.getElementById(product.id)){
            createItem(product);
        }
    })
}

button.addEventListener('click', importData);
