export default function PackingList({items, onTogglePacked, onDelete}) {
  return (
  <ul>
      {items.map(item => 
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.packed}
              onChange={() => onTogglePacked(item.id)}
            />
            {item.title}{' '}
            <button onClick={() => onDelete(item.id)}>Delete</button>
          </label>
        </li>
      )}
    </ul>
  )
}