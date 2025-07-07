import './App.css';
import { useState } from "react";

export const initialLetters = [{
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
  const [letters, setLetters] = useState(initialLetters);
  const [hightlightedLetterId, setHightlightedLetterId] = useState(null);

  return (
    <>
      <ul>
        {letters.map(letter => (
          <li
            key={letter.id}
            onPointerMove={() => setHightlightedLetterId(letter.id)}
            onFocus={() => setHightlightedLetterId(letter.id)}
            className={letter.id === hightlightedLetterId ? 'hightlighted' : ''}
            >
            <button onClick={() => {
              setLetters(letters.map(l => {
                if(l.id === letter.id) {
                  return {
                    ...l,
                    isStarred: !l.isStarred
                  }
                } else {
                  return l;
                }
              }))
            }}>{letter.isStarred ? 'Unstar' : 'Star'}</button>
            {letter.subject}
          </li>
        ))}
      </ul>
    </>
  )
}