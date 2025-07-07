import { useState } from "react";
import AddItem from "./AddItem";
import PackingList from './PackingList'

const initialItems = [
  {id: 0, title: 'Warm socks', packed: true},
  {id: 1, title: 'Travel journal', packed: false},
  {id: 2, title: 'Watercolors', packed: false},
]

export default function TravelPlan() {
  const [items, setItems] = useState(initialItems);
  
  // checked확인
  function handleTogglePacked(id) {
    setItems(items.map(item => {
      return item.id === id ? {...item, packed: !item.packed} : item
    }))
  }
  // 삭제버튼
  function handleDelete(id) {
    setItems(items.filter(item => item.id !== id))
  }
  // 체크확인 수
  const packedItems = items.filter(item => item.packed).length;

  function handleAddItem(text) {
    if(text.trim() === '') return;
    const nextId = items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 0;
    setItems([
      ...items,
      {id: nextId, title: text, packed: false}
    ])
  }

  return (
    <>
      {/* <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add item"
      />
      <button onClick={() => handleAddItem()}>Add</button> */}
      <AddItem onAddItem={handleAddItem} />
      {/* <ul>
        {items.map(item => 
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.packed}
                onChange={() => handleTogglePacked(item.id)}
              />
              {item.title}{' '}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </label>
          </li>
        )}
      </ul> */}
      <PackingList items={items} onTogglePacked={handleTogglePacked} onDelete={handleDelete} />
      <div style={{marginTop:'20px', padding: '20px', borderTop: '1px solid #222'}}>
        <strong style={{color: 'blue'}}>{packedItems}</strong> out of <strong style={{color: 'red'}}>{items.length}</strong> packed!
      </div>
    </>
  )
}