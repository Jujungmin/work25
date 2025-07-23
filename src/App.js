import './App.css';
import { useState } from "react";

const initialUsers = [
  { id: 1, name: 'David', age: 22 },
  { id: 2, name: 'Yuna', age: 32 },
  { id: 3, name: 'Becky', age: 26 }
];

export default function App() {
  const [users, setUsers] = useState(initialUsers);
  const [sortKey, setSortKey] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const [serarchText, setSearchText] = useState('');

  const handleSort = (key) => {
    if(sortKey === key) {
      // 정렬 방향 토글
      setSortKey((prev) => (prev === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  }

  const processedUsers = users
  .filter((user) => user.name.toLocaleLowerCase().includes(serarchText.toLocaleLowerCase()))
  .sort((a, b) => {
    if(sortKey === 'id') return sortOrder === 'asc' ? a.id - b.id : b.id - a.id;
    if(sortKey === 'name') return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    if(sortKey === 'age') return sortOrder === 'asc' ? a.age - b.age : b.age - a.age;
    return 0;
  })

  // const handleSort = (key, order = 'asc') => {
  //   setUsers(prev => {
  //     const copied = [...prev];
  //     return copied.sort((a, b) => {
  //       if(key === 'id') return order === 'asc'
  //         ? a.id - b.id
  //         : b.id - a.id;
  //       if(key === 'name') return order === 'asc'
  //         ? a.name.localeCompare(b.name)
  //         : b.name.localeCompare(a.name);
  //         if(key === 'age') return order === 'asc'
  //         ? a.age - b.age
  //         : b.age - a.age;
  //       return 0;
  //     })
  //   })
  // }
  return (
    <>
    <h2>사용자 목록</h2>
    <input
      value={serarchText}
      onChange={(e) => setSearchText(e.target.value)}
      placeholder="이름 필터"
    />
      <table>
        <colgroup>
          <col style={{width: '100px'}} span={3} />
        </colgroup>
        <thead>
          <tr>
            <th>
              순번
              <button onClick={() => handleSort('id', 'asc')}>▴</button>
              <button onClick={() => handleSort('id', 'desc')}>▾</button>
            </th>
            <th>
              이름
              <button onClick={() => handleSort('name', 'asc')}>▴</button>
              <button onClick={() => handleSort('name', 'desc')}>▾</button>
            </th>
            <th>
              나이
              <button onClick={() => handleSort('age', 'asc')}>▴</button>
              <button onClick={() => handleSort('age', 'desc')}>▾</button>
            </th>
            
          </tr>
        </thead>
        <tbody>
          {processedUsers.length === 0 ? 
            (<tr>
              <td colSpan="3">결과 없음.</td>
            </tr>)
            : (
              processedUsers.map(user =>
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                </tr>
              )
            )
          }
          
        </tbody>
      </table>
    </>
  )
}