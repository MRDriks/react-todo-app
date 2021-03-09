import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import modalReducer from './modalReducer';
import formReducer from './formReducer';

const rootReducer = combineReducers({
  todoReducer,
  modalReducer,
  formReducer
});

export default rootReducer;