function calcA() {
  console.log('a');
  return undefined;
}
function calcB() {
  console.log('b');
  return true;
}
// console.log(calcA() && calcB());

// 1. calcA() 실행
// a가 출력
// calcA()는 undefined 반환
// 2. calcA() && calcB() 평가
// &&(AND)연산자는 왼쪽값 true면 오른쪽 반환, false면 오른쪽 평가 안함
// 3. calcA() 반환값 undefined
// undefined "falsy" calcB()실행안되고 undefined이 반환.

// function getName(person) {
//   return person && person.name
// }
// let person = {name: 'John'};
// let name1 = getName(undefined);
// let name2 = getName(null);
// let name3 = getName(person);
// console.log(name1, name2, name3);

// ?? (null 병합연산자)
// 왼쪽 값이 null 또는 undefined일 때만 오른쪽 반환
// 0, false, ''(빈문자열) 등은 '값이 있다'고 간주.
// console.log(null ?? 'a'); // a
// console.log(undefined ?? 'b'); // b
// console.log(false ?? 'c'); // false
// console.log(0 ?? 'd'); // 0
// console.log('' ?? 'e') // ''

// let arr = [{name: 'John'}, 1, 2, 3];
// console.log(arr.indexOf({name: 'John'}))

/*
콜백함수(callback function)
다른 함수의 파라미터(매개변수)로 전달되어, 그 함수 안에서 호출되는 함수
*/

// 콜백(비동기 함수 중첩)
// setTimeout(() => {
//     console.log('A');
//     setTimeout(() => {
//     	console.log('B');
//     }, 1000);
//     setTimeout(() => {
//     	console.log('C');
//     }, 1000);
// }, 1000);

// 다음에 시도해볼 확장 포인트
// ✳️ packed 상태도 onTogglePacked(id)로 추가하기
// 🌍 "전체 선택" / "전체 해제" 버튼 만들기
// 🔍 검색 필터 기능 (입력에 따라 리스트 필터링)
// ✏️ 이름 수정 기능

// function 함수이름(매개변수 = 기본값) {}
// function gretting(name = 'Guest') {
//   console.log('Hello, ' + name + '!')
// }

function gretting(name) {
  name = (typeof name !== 'undefined') ? name : 'Guest';
  console.log('Hello, ' + name + '!');
}
gretting();
gretting('Alice')