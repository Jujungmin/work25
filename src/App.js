import { useRef, useState } from "react";

export default function TodoList() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [showWarning, setShowWarning] = useState(false);
  const index = useRef(0);

  function handleSubmit(e) {
    e.preventDefault();
    if(input.trim() === '') {
      setShowWarning(true);
      return;
    }
    setTodos([
      {id: index.current++, add: input},
      ...todos,
    ])
    setShowWarning(false);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>할 일:</label>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
          }}
        />
        <button type="submit">추가</button>
      </form>
      {showWarning &&
        <span style={{display:'block', color: 'red'}}>할 일을 입력해주세요!</span>
      }
      {todos.length > 0 && 
        <ul style={{border: '1px solid #999'}}>
          {todos.map(todo => (
            <li key={todo.id}>
              {todo.add}
              <button onClick={() => {
                setTodos(
                  todos.filter(t => {
                    return t.id !== todo.id
                  })
                )
              }}>삭제</button>
            </li>
          ))}
        </ul>
      }
    </>
  )
}