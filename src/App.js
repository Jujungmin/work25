import './App.css';
import { useState } from "react";

const initialUsers = [
  { id: 1, name: 'David', isFavorite: false },
  { id: 2, name: 'Yuna', isFavorite: true },
  { id: 3, name: 'Becky', isFavorite: true }
];

export default function App() {
  const [inputText, setInputText] = useState('');
  // 사용자 배열
  const [users, setUsers] = useState(initialUsers);
  const [nextId, setNextId] = useState(users.length + 1);
  // 사용자 추가 버튼
  const handleAddBtn = (e) => {
    e.preventDefault();
    if(!inputText.trim()) return;
    const newUsers = {
      id: nextId,
      name: inputText
    }
    setUsers(prev =>
      [...prev, newUsers].sort((a, b) => a.name.localeCompare(b.name))
    )
    setNextId(prev => prev + 1);
    setInputText('');
    const isDuplicate = users.some(user => user.name === inputText.trim());
    if(isDuplicate) {
      document.querySelector('.hint-msg').style.display = 'block';
    } else {
      document.querySelector('.hint-msg').style.display = 'none';
    }
  }

  const handleDeleteBtn = (id) => {
    setUsers(user =>
      user.filter(user => user.id !== id)
    )
  }

  const handleToggleBtn = (id) => {
    setUsers(prev => 
      prev.map(user => 
        user.id === id ? {...user, isFavorite: !user.isFavorite} : user
      )
      .sort((a, b) => a.name.localeCompare(b.name))
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
        <span className="hint-msg">이미 존재하는 이름입니다.</span>
      </form>
      {users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li
              key={user.id}
              className={user.isFavorite ? 'favorite' : ''}
            >
              {user.name}{' '}
              <button onClick={() => handleDeleteBtn(user.id)}>Delete</button>
              <button onClick={() => handleToggleBtn(user.id)}>
                {user.isFavorite ? '❤️' : '🤍'}
              </button>
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