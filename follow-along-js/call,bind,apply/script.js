// // Call();
// const fullName = function(city, country) {
//   console.log(this.firstName + ' ' + this.lastName, city, country);
// }

// const person1 = {
//   firstName: 'John',
//   lastName: 'Smith'
// }
// fullName.call(person1, "Oslo", "Norway");

// // Apply();
// const fullName = function(city, country) {
//   console.log(this.firstName + ' ' + this.lastName, city, country);
// }

// const person= {
//   firstName: 'John',
//   lastName: 'Smith'
// }

// fullName.apply(person, ["Oslo", "Norway"]);

// bind();
function func(language) {
  if(language === 'kor'){
    console.log(`language: ${this.korGreeting}`);
  } else {
    console.log(`language: ${this.engGreeting}`);
  }
}

const greeting = {
  korGreeting: '안녕하세요',
  engGreeting: 'Hello'
}

const korGreeting1 = func.bind(greeting);
korGreeting1('kor');

const korGreeting2 = func.bind(greeting, 'kor');
korGreeting2();

const korGreeting3 = func.bind(greeting)('kor'); // 바로 호출