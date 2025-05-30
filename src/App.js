// 1. userName 변수에 저장된 값을 <h1> 태그 안에 동적으로 표시하세요.
// const userName = 'Ada Lovelace';

// export default function Welcome() {
//   return (
//     <h1>{userName}</h1>
//   )
// }

// 2. 현재 날짜를 반환하는 getToday() 함수를 만들어 <p>태그 안에 오늘 날짜를 표시하세요.
// function getToday() {
//   return new Date().toLocaleDateString();
// }

// export default function TodayBox() {
//   return (
//     <p>{getToday()}</p>
//   )
// }

// 3. 아래 book 객체에서 제목(title)과 저자(author)를 각각 h2,p 태그에 출력하세요.
// const book = {
//   title: 'React for Beginners',
//   author: 'Dan Abroamov'
// }

// export default function BookInfo() {
//   return (
//     <div>
//       <h2>{book.title}</h2>
//       <p>{book.author}</p>
//     </div>
//   )
// }

// 4. style 객체를 만들어 div에 배경색과 글자색을 동적으로 적용하세요.
// const style = {
//   backgroundColor: 'navy',
//   color: 'white'
// };

// export default function StyleBox() {
//   return (
//     <div style={style}>스타일이 적용된 박스입니다.</div>
//   )
// }

// 5. 아래 코드에서 7과 3의 곱셈 결과를 span 태그에 출력하세요.
// export default function MathBox() {
//   return (
//     <span>{7*3}</span>
//   )
// }

// 6. fruit 배열에서 첫 번째 과일 이름을 li 태그에 출력하세요.
// const fruits = ['사과', '바나나', '포도'];

// export default function FruitList() {
//   return (
//     <ul>
//       <li>{fruits[0]}</li>
//     </ul>
//   )
// }

// 7. isLoggedIn 값에 따라 로그인 상태 메시지를 다르게 출력하세요.
const isLoggedIn = true;

export default function LoginStatus() {
  let message;
  if(isLoggedIn) {
    message = '환영합니다!';
  } else {
    message = '로그인이 필요합니다.';
  }

  return (
    <h2>{message}</h2>
  )
}