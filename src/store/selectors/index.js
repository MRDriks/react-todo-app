import { createSelector } from 'reselect';

const getTodos = (state) => state.todoReducer.todos;

export const getQuantityOfActiveTodos = createSelector(
  [getTodos],
  (todos) => {
    return todos.filter(todo => !todo.completed).length;
  }
);
