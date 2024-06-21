const num1 = 10;
const num2 = 20;

let val;

// 간단한 연산
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.E;
val = Math.PI;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.abs(-2.4);
val = Math.min(2,3,4,5,6,-1);
val = Math.max(2,3,4,5,6,-1);
val = Math.random();

// 1-20 사이 임의의 수
val = Math.floor(Math.random() * 20 + 1);

console.log(val);