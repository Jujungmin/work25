export function TaskInput({
  text, // 새로 추가할 task텍스트 상태
  setText, // input변경 시 상태 업데이트
  onAdd // Add 버튼 클릭 시  새 항목 추가 함수 호출
}) {
 return (
  <>
    <input
      type="text"
      placeholder="Add task"
      value={text}
      onChange={e => setText(e.target.value)}
    />
    <button onClick={onAdd}>Add</button>
  </>
 ) 
}

/*
react는 맨날 봐도봐도 이해가 안가고,
내가 언제쯤 도움을 안받고 혼자 생각하며 짤 수 있을까..
useState, new Set, 배열메서드, 
*/