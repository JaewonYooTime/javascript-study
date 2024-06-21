// // shallow copy
// const aArray = [1,2,3];

// // shallow copy with spread operator
// const bArray = [...aArray, 4];

// console.log('aArray', aArray);
// console.log('bArray', bArray);

// console.log('aArray === bArray', aArray === bArray);

// // shallow copy with object.assign()
// const cArray = Object.assign([], bArray);

// console.log('bArray', bArray);
// console.log('cArray', cArray);

// console.log('bArray === cArray', bArray === cArray);

// // Nested Arrays and Objects
// cArray.push([5,6,7]);
// console.log('cArray', cArray);
// const dArray = [...cArray, 10];
// console.log('dArray', dArray);
// dArray[4].push(8);
// console.log('cArray', cArray);
// console.log('dArray', dArray);

// 얕은 동결
// const aObject = {
//   'a': 'a',
//   'b': 'b',
//   'cObject' : { 'a':1,'b':2}
// }
// Object.freeze(aObject);
// aObject.a = 'c';
// console.log('a', aObject);

// aObject.cObject.a = 3;
// console.log('a', aObject);

// const aObject = {
//   'a': 'a',
//   'b': 'b',
//   'cObject': { 'a': 7, 'b': 2 }
// };
// Object.freeze(aObject);
// aObject.a = 'c';  // 이 시도는 실패합니다. aObject는 동결되었기 때문에 최상위 속성은 변경되지 않습니다.
// console.log('a', JSON.parse(JSON.stringify(aObject)));  // 객체의 현재 상태를 문자열로 변환하여 출력
// aObject.cObject.a = 3;  // 이 시도는 성공합니다. cObject는 동결되지 않았기 때문에 cObject의 속성은 변경될 수 있습니다.
// console.log('a', JSON.parse(JSON.stringify(aObject)));  // 객체의 현재 상태를 문자열로 변환하여 출력


// deep copy
const aObject = {
  'a': 'a',
  'b': 'b',
  'cObject' : { 'a':1,'b':2}
}
// 1. deep copy with JSON.parse(JSON.stringify())
// const newAObject = JSON.parse(JSON.stringify(aObject));
// console.log('a', aObject);
// console.log('newAObject', newAObject);
// aObject.cObject.a = 3;
// console.log('a', aObject);
// console.log('newAObject', newAObject);

// 2. deep copy with nested spread operator
// const newAObject = {...aObject, cObject: {...aObject.cObject} };
// console.log('a', aObject);
// console.log('newAObject', newAObject);
// aObject.cObject.a = 3;
// console.log('a', aObject);
// console.log('newAObject', newAObject);

// 3. loadah 라이브러리를 이용한 deep copy
// 4. structuredClone()을 이용한 deep copy
