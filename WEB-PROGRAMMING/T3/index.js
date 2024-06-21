let x = 1;
const y = Math.ceil(Math.random() * 10);

const rollDice = () => {
  const result = Math.ceil(Math.random() * 6);
  return result;
};

x += y; // 🔴
x *= y;
x -= y;
x ** ((y % 3) + 1); // 🔴

for (let i = 0; i < 5; i++) {
  x = addOrSubtDice(x); // 🟢
}

// try {
//   x.toUpperCase();
// } catch (e) {}
// x.toUpperCase();

function addOrSubtDice(x) {
  let dice = rollDice();
  if (Math.random() > 0.5) dice *= -1; // 🟡
  x += dice; // 위에 조건부 넣을 시 브레이크포인트 추가
  return x;
}

x **= 2; // 🔴

console.log(x);
