import React from 'react';

const TodoListItem = ({ id, completed, description, showModal, removeTodo, setTodoCompletedStatus }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
      <div className="form-check d-flex align-items-center">
        <input
          type="checkbox" 
          className="form-check-input mt-0"   
          defaultChecked={completed}
          onChange={(e) => setTodoCompletedStatus(id, e.target.checked)}
        />
        <label className="form-label mb-0">
          {description}
        </label>
      </div>
      <div className="d-flex justify-content-between py-3">
        <button type="button" className="btn btn-warning mx-3" onClick={() => showModal(id)}>Update</button>
        <button type="button" className="btn btn-danger" onClick={() => removeTodo(id)}>Delete</button>
      </div>
    </li>
  );
}

export default TodoListItem;