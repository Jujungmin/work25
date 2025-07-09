import './App.css';
import { useState } from "react";

export const letters = [{
  id: 0,
  subject: 'Ready for adventure?',
  isStarred: true,
}, {
  id: 1,
  subject: 'Time to check in!',
  isStarred: false,
}, {
  id: 2,
  subject: 'Festival Begins in Just SEVEN Days!',
  isStarred: false,
}];

export default function MailClient() {
  const [selectedIds, setSelectedIds] = useState(letters);
  const selectedCount = selectedIds.filter(selected => selected.isStarred).length

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {selectedIds.map(letters => (
          <li
            key={letters.id}
            className={letters.isStarred ? 'selected': ''}
          >
            <label>
              <input
                type="checkbox"
                checked={letters.isStarred}
                onChange={() => {
                  setSelectedIds(letter =>
                    letter.map(l => {
                      return l.id === letters.id ? {...letters, isStarred: !l.isStarred} : l
                    })
                  )
                }}
              />
              {letters.subject}
            </label>
          </li>
        ))}
      </ul>
      <div>You selected {selectedCount} letters</div>    
    </>
  )
}