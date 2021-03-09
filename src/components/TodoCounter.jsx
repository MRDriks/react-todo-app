import React from 'react';

const TodoCounter = ({ counter }) => {
  return (
    <div className="my-3 px-2">
      <p>{counter} items left</p>
    </div>
  );
}

export default TodoCounter;