// map() 배열의 각 요소를 반환해서 새로운 배열을 만든다.
const numbers = [3,7,2,9,5];
const double = numbers.map(n => {
  return n * 2;
})

// filter() 배열에서 조건을 만족하는 요소만 남겨 새로운 배열을 만든다.
const even  = numbers.filter(n => {
  return n % 2 === 0;
})
// console.log(even);

// reduce() 배열을 누적해서 하나의 값(문자, 문자열, 배열, 객체 등)으로 만든다.
const sum = numbers.reduce((acc,cur) => {
  return acc + cur
}, 0);
// console.log(sum);

const max = numbers.reduce((acc,cur) => {
  if(cur > acc) {
    return cur;
  }
  return acc;
}, numbers[0]);

// console.log(max);

const pets = ['cat', 'dog', 'cat', 'dog', 'dog'];
const counts = pets.reduce((acc,cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});
// console.log(counts);

const field = ['email', 'phone'];
const values = ['a@a.com', '010-1234'];
let info = {};
field.forEach((f,i) => {
    info = {...info, [f]: values[i]}
});
// console.log(info)

// 콜백함수: 함수는 다른 함수의 인수(인수=값)로도 전달가능.
function repeat(count, callBack) { // 3
  for(let idx = 0; idx < count; idx++) { // 4
    callBack(idx + 1);
  }
}
function origin(count) { // 2
  console.log(`origin 함수: ${count}`);
}
function double1(count) {
  console.log(`double1 함수: ${count * 2}`);
}
// repeat(5, double1); // 1
// 1. 매개변수를 콘솔에 출력하는 함수 origin 만든다.
// 2. 함수repeat를 호출하고 인수로 5와 함수 origin 전달
// 3. 함수repeat가 호출되면 매개변수 count 숫자 5를 저장, callback함수 origin 저장
// 4. 0부터4까지 총 5회 반복할 때마다 매개변수 callback에 저장한 함수 origin을 호출하고 idx + 1을 인수로 전달하낟. 따라서 함수 origin은 함수 repeat의 반복문에서 총 5회 호출되면서 숫자 1부터 5까지 콘솔에 출력.

const double2 = function(count) {
  console.log(`${count * 2}`);
}
// repeat(5, double2);

// let FuncA = (매개변수) => 반환값;
// let FuncA = function(매개변수) {
//   return 반환값;
// }

let isConfirm = false;
function confirm(onYes, onNo) {
  if(isConfirm) onYes();
  else onNo();
}
// confirm(
//   () => console.log('승인'),
//   () => console.log('거부')
// )
confirm(
  function onYes() {
    // console.log('승인')
  },
  function onNo() {
    // console.log('거부')
  }
)

