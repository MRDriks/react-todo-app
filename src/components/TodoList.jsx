import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, updateTodo, removeTodo, showModal, setTodoCompletedStatus }) => {
  return (
    <ul className="list-group mt-4">
      {
        todos.map(todo => (
          <TodoListItem 
            key={todo.id} 
            id={todo.id}
            completed={todo.completed}
            description={todo.description}
            updateTodo={updateTodo} 
            removeTodo={removeTodo}
            showModal={showModal}
            setTodoCompletedStatus={setTodoCompletedStatus}
          />
        ))
      }
    </ul>
  );
}

export default TodoList;