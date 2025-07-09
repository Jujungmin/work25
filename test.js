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
console.log(info)