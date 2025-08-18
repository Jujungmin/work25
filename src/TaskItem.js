export function TaskItem({
  task, // 각 개별 할일(task) 객체, {id, text, done} 형태
  checked, // 현재 이 task의 체크 상태(boolean)
  onToggle, // 체크박스 상태 변경 이벤트 함수, id 전달
  onEdit, // 편집 버튼 클릭 시 호출, 편집 모드 토글
  onDelete, // 삭제 버튼 클릭 시 호출, 해당 id 삭제
  isEditing, // 현재 편집 모드인지 여부(boolean)
  editText, // 편집 중인 텍스트 상태 값
  setEditText, // 편집 텍스트 상태 변경 함수
  onEditComplete // 편집 종료 시 호출 함수(저장용)
}) {
  return (
    <div className="item" key={task.id}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onToggle(task.id)}
        />
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={e => setEditText(e.target.value)}
            onBlur={onEditComplete}
            onKeyDown={e => {
              if(e.key === 'Enter') {
                onEditComplete();
              }
            }}
            autoFocus
          />
        ) : (
          task.text
        )}
      </label>
      <button onClick={() => onEdit(task.id, task.text)}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  )
}