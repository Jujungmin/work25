export default function Letters({
  letter,
  isSelected,
  onToggle,
}) {
  return (
    <li className={isSelected ? 'selected' : ''}>
      <label>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onToggle(letter.id)}
        />
      </label>
    </li>
  )
}