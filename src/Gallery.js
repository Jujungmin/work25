import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  // let index = 0;
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>next</button>
      <h2>
        <i>{sculpture.name} </i> by {sculpture.title}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && (<p>{sculpture.description}</p>)}
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </>
  )
}