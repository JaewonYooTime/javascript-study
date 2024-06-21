// function outerFunction (outerVariable) {
//   return function innerFunction(innerVariable) {
//     console.log('Outer Function: ' + outerVariable);
//     console.log('Inner Function: ' + innerVariable);
//   }
// }
// const newFunction = outerFunction('outside');
// newFunction('inside');
// // console.log(newFunction);  
let a = 'a';
// function functionB() {
//   let c = 'c';
//   console.log(a, b, c);
// }
function functionA () {
  let b = 'b';
  console.log(a, b);
  function functionB() {
    let c = 'c';
    console.log(a, b, c);
  }
  functionB();
}
functionA();