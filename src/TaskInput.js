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