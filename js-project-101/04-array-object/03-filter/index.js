import products from '../products.js';

const button = document.querySelector('button');
// select 요소를 가져와서 사용자가 목록의 값을 선택할 때마다 선택한 값을 찍기위함
const select = document.querySelector('select');

let myProducts;

const selectCategory = (event) => {
  if (myProducts){
    // console.log(event);
    const { selectedIndex } = event.target.options;
    const { value } = event.target.options[selectedIndex];
    // console.log(event.target.options[selectedIndex]); // 인덱스가 가져와짐
    // console.log(value); // value가 가져와짐
  
    const filtered = myProducts.filter((product) => {
      return product.category === value; // 선택한 value와 같은 것만 필터
    })
  
    // console.log(filtered);
    removeItems();
  
    filtered.forEach((product) => {
      createItem(product);
    })
  }
};

const removeItems = () => {
  const items = document.querySelectorAll('li');

  items.forEach((item) => {
    item.remove();
  });
};

const createItem = (product) => {
  const ul = document.querySelector('ul');    
  const li = document.createElement('li');    
  const h3 = document.createElement('h3');    
  const div = document.createElement('div');  

  li.id = product.id;

  h3.className = 'name';
  h3.innerText = product.name;

  const price = new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  }).format(product.price);

  div.className = 'price';
  div.innerText = price;

  li.append(h3, div);
  ul.append(li);
};

const importData = () => {
  if(products){
    select.selectedIndex = 0;
    myProducts = products.data;
    myProducts.map((product) => {
      if (!document.getElementById(product.id)) {
        createItem(product);
      }
    });
  }

};

button.addEventListener('click', importData);
select.addEventListener('change', selectCategory);