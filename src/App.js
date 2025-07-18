import './App.css';
import { useState } from "react";
import Letters from './Letters';

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
  const [selectedIds, setSelctedIds] = useState(new Set());
  const selectedCount = selectedIds.size;

  // 선택/해제 클릭할 때 실행되는 함수
  function handleToggle(toggleId) {
    const nextIds = new Set(selectedIds); // 현재 Set 복사
    if(nextIds.has(toggleId)) {
      nextIds.delete(toggleId);
      console.log(`id ${toggleId} 해제:`, Array.from(nextIds));
    } else {
      nextIds.add(toggleId);
      console.log(`id ${toggleId} 선택:`, Array.from(nextIds));
    }
    setSelctedIds(nextIds); // 상태 업데이트
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letters
            key={letter.id}
            letter={letter}
            isSelected={selectedIds.has(letter.id)}
            onToggle={handleToggle}
          />
        ))}
      </ul>
      <div style={{borderTop: '1px solid #000', marginTop: '10px', paddingTop: '10px'}}>
      You selected {selectedCount} letters
    </div>
    </>
  )
}