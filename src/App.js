import './App.css';
import { useState } from "react";

const initialUsers = [
  { id: 1, name: 'David', age: 22 },
  { id: 2, name: 'Yuna', age: 32 },
  { id: 3, name: 'Becky', age: 26 }
];

export default function App() {
  // 사용자 리스트
  const [users] = useState(initialUsers);
  // 검색 텍스트
  const [serarchText, setSearchText] = useState('');
  // 현재 정렬 기준 (id, name, age)
  const [sortKey, setSortKey] = useState('id');
  // 정렬 방항: 오름(asc) / 내림(desc)
  const [sortOrder, setSortOrder] = useState('asc');
  // 오름, 내림 차순 이벤트 함수
  const handleSort = (id, asc) => {
    setSortKey(id);
    setSortOrder(asc);
  }
  // 필터 적용 및 정렬된 사용자 배열 생성
  const processedUsers = users
    .filter(user => { // // 검색 필터
      const lowerSearch = serarchText.toLowerCase();
      return (
        user.name.toLowerCase().includes(lowerSearch) ||
        user.id.toString().includes(lowerSearch) ||
        user.age.toString().includes(lowerSearch)
      )
    })
    .sort((a, b) => {
      if(sortKey === 'id') return sortOrder === 'asc' ? a.id - b.id : b.id - a.id;
      if(sortKey === 'name') return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      if(sortKey === 'age') return sortOrder === 'asc' ? a.age - b.age : b.age - a.age;
      return 0;
    })


  return (
    <>
      <h2>사용자 목록</h2>
      <input
        value={serarchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="필터"
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