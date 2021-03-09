import {
  ADD_TODO, 
  UPDATE_TODO,
  REMOVE_TODO,
  SHOW_MODAL,
  HIDE_MODAL,
  SET_TODO_COMPLETED_STATUS,
  UPDATE_TEXTAREA_VALUE,
  UPDATE_INPUT_VALUE
} from '../constants/actionTypes';

export const addTodo = () => {
  return (dispatch, getState) => {
    dispatch({
      type: ADD_TODO,
      description: getState().formReducer.inputValue
    });
  }
}

export const updateTodo = () => {
  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_TODO,
      id: getState().modalReducer.currentTodoId,
      description: getState().modalReducer.textareaValue
    });
  }
}

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    id
  }
}

export const showModal = (id) => {
  return (dispatch, getState) => {
    const todos = getState().todoReducer.todos;
    const todoById = todos.find(todo => todo.id === id);
    dispatch({
      type: SHOW_MODAL,
      id: id,
      description: todoById.description
    });
  }
}

export const hideModal = () => {
  return {
    type: HIDE_MODAL
  }
}

export const setTodoCompletedStatus = (id, status) => {
  return {
    type: SET_TODO_COMPLETED_STATUS,
    id,
    status
  }
}

export const changeTextareaValue = (value) => {
  return {
    type: UPDATE_TEXTAREA_VALUE,
    value
  }
}

export const changeInputValue = (value) => {
  return {
    type: UPDATE_INPUT_VALUE,
    value
  }
}