import { useState } from "react";

const initialUsers = [
  { id: 1, name: 'David' },
  { id: 2, name: 'Yuna' },
  { id: 3, name: 'Becky' }
];

export default function App() {
  const [inputText, setInputText] = useState('');
  // 사용자 배열
  const [users, setUsers] = useState(initialUsers);
  // 사용자 추가 버튼
  const handleAddBtn = (e) => {
    e.preventDefault();
    if(!inputText.trim()) return;
    // input에 적은거 사용자 배열에 넣어줘야 함.
      // id도 넣어준다. 아무것도없을때는 1, 있을 때는 기존 id의 + 1
    // 사용자 배열을 오름차순으로 해야됨.
    const newUsers = {
      id: users.length > 0 ? (users.length - 1) + 1 : 1,
      name: inputText.trim()
    }
    setUsers(prevUsers =>
      [...prevUsers, newUsers].sort((a, b) => a.name.localeCompare(b.name))
    )
    setInputText('');
  }

  const handleDeleteBtn = (id) => {
    setUsers(user =>
      user.filter(user => user.id !== id)
    )
  }


  return (
    <>
      <form onSubmit={handleAddBtn}>
        <input
          value={inputText}
          onChange={(e => setInputText(e.target.value))}
        />
        <button type="submit">Add</button>
      </form>
      {users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name}{' '}
              <button onClick={() => handleDeleteBtn(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )
      : (
        <p>no users</p>
      )}
    </>
  )
}