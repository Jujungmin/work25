import { useState } from "react";

export default function Movie() {
  const [input, setInput] = useState('');
  const [movies, setMovies] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if(input.trim() === '') {
      alert('영화 제목을 입력해주세요.');
      return;
    }
    setMovies([...movies, input]);
    setInput('');
    console.log(movies)
  }
  function handleDelete(index) {
    return () => {
      setMovies(
        movies.filter((_, i) => {
          console.log(_, i);
          return i !== index;
        })
      )
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="영화를 입력해주세요."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button type="submit">등록</button>
      </form>
      {movies.length > 0 && (
        <ul style={{border:'1px solid #222'}}>
          {movies.map((movie, index) => (
            <li key={index} style={{padding:'10px'}}>
              {movie}
              <button onClick={handleDelete(index)}>삭제</button>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}