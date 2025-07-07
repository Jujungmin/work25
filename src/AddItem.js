import { useState } from "react";

export default function AddItem({onAddItem}) {
  const [text, setText] = useState('');

  return (
    <>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add item"
      />
      <button onClick={() => {
        setText('');
        onAddItem(text);
      }}>Add</button>
    </>
  )
}