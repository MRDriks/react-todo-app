import { 
  ADD_TODO, 
  UPDATE_TODO,
  REMOVE_TODO,
  SET_TODO_COMPLETED_STATUS
} from '../constants/actionTypes';

const initialState = {
  todos: []
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, {id: Date.now(), description: action.description, completed: false}]
      }
    case UPDATE_TODO:
      return {
        todos: [
          ...state.todos.map(todo => todo.id === action.id ? {...todo, description: action.description} : todo)
        ]
      }
    case REMOVE_TODO:
      return {
        todos: [...state.todos.filter(todo => todo.id !== action.id)]
      }
    case SET_TODO_COMPLETED_STATUS:
      return {
        todos: [
          ...state.todos.map(todo => todo.id === action.id ? {...todo, completed: action.status} : todo)
        ]
      }
    default: 
      return state;
  }
}

export default todoReducer;