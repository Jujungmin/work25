import { useRef, useState } from "react"

export default function TodoList() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);
  const index = useRef(0);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  return (
    <>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        if(text.trim() !== '') {
          setTodos([
            {id: index.current++, text: text},
            ...todos,
          ])
        }
        setText('')
      }
      }>저장</button>
      {todos.length > 0 && 
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {editId === todo.id ? (
                <>
                  <input value={editText} onChange={(e) => setEditText(e.target.value)} />
                  <button onClick={() => {
                    setTodos(
                      todos.map(t => {
                        return t.id === todo.id ? {...t, text: editText} : t
                      })
                    )
                    setEditId(null);
                    setEditText('');
                  }}>저장</button>
                  <button onClick={() => {
                    setEditId(null);
                    setEditText('');
                  }}>취소</button>
                </>
              ) : (
                <>
                  <span>{todo.text}</span>
                  <button onClick={() => {
                    setEditId(todo.id);
                    setEditText(todo.text)
                  }}>수정</button>
                  <button onClick={() => {
                    setTodos(todos.filter(t => t.id !== todo.id))
                  }}>삭제</button>
                </>
              )}
            </li>
          ))}
        </ul>
      }
    </>
  )
}