import { useState } from "react";
import { initialTasks } from "./TaskList";
import { TaskInput } from "./TaskInput";
import { TaskItem } from "./TaskItem";

export default function TaskApp() {
  /*
   * text: 새 할 일 입력값
   * tasks: 할 일 리스트 배열, 각각 {id, text, done}
   * checkToggle: Set타입, 체크된 task id 관리
   * editId: 편집 중인 task id, 없으면 null
   * editText: 편집 중인 텍스트 상태
  */
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState(initialTasks);
  const [checkToggle, setCheckToggle] = useState(
    new Set(initialTasks.filter(task => task.done).map(task => task.id))
  );
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleAddBtn = () => {
    // 입력값이 공백 아니면 task에 새 task 추가
    // 새 id는 기존 최대 id+1 로 생성(중복방지)
    // 추가 후 입력창 초기화
    if(text.trim('') === '') return;
    const maxId = tasks.reduce((max, task) => Math.max(max, task.id), -1);
    const newTask = {
      id: maxId + 1,
      text: text,
      done: false
    };
    setTasks([...tasks, newTask]);
    setText('');
  };

  const handleToggle = (id) => {
    // 체크박스 토글 시 호출, checkToggle Set에서 id추가/삭제
    // 동시에 tasks에서 done 상태 반전 시킴(체크 상태와 동기화)
    const newCheckToggle = new Set(checkToggle);
    if(newCheckToggle.has(id)) {
      newCheckToggle.delete(id);
    } else {
      newCheckToggle.add(id);
    }
    setCheckToggle(newCheckToggle);
    setTasks(tasks.map(task =>
      task.id === id ? {...task, done: !task.done} : task
    ));
  }

  const handleEditBtn = (id, currentText) => {
    // 편집 input에서 완료 시 호출(Enter누르거나 포커스 아웃)
    // tasks 내용을 editText로 업데이트, 편집 종료
    if(editId === id) {
      setTasks(tasks.map(task => 
        task.id === id ? {...task, text: currentText} : task
      ));
      setEditId(null);
      setEditText('');
    } else {
      setEditId(id);
      setEditText(currentText);
    }
  };

  const handleEditComplete = () => {
    // 해당 id 가진 task 삭제
    // checkToggle에서도 삭제 id 제거하여 체크 상태 동기화
    if(editId !== null) {
      setTasks(tasks.map(task =>
        task.id === editId ? {...task, text: editText} : task
      ));
      setEditId(null);
      setEditText('');
    }
  }

  const handleDeleteBtn = (id) => {
    // 해당 id를 가진 task 삭제
    // checkToggle에서도 삭제 id 제거하여 체크 상태 동기화
    setTasks(tasks.filter(task => task.id !== id));
    setCheckToggle(prev => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    })
  };
  
  const handleDeleteChecked = () => {
    // 체크된(id checkToggle에 있는) task들을 한꺼번에 삭제
    // checkToggle도 초기화하여 체크박스 상태 리셋
    setTasks(tasks.filter(task => !checkToggle.has(task.id)));
    setCheckToggle(new Set());
  };

  return (
    <>
      <TaskInput text={text} setText={setText} onAdd={handleAddBtn} />
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          checked={checkToggle.has(task.id)}
          onToggle={handleToggle}
          onEdit={handleEditBtn}
          onDelete={handleDeleteBtn}
          isEditing={editId === task.id}
          editText={editText}
          setEditText={setEditText}
          onEditComplete={handleEditComplete}
        />
      ))}
      {
      tasks.length > 0 && 
        <button onClick={handleDeleteChecked} disabled={checkToggle.size === 0}>Delete Checked Tasks</button>
      }
    </>
  )
}