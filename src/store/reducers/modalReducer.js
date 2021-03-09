import { SHOW_MODAL, HIDE_MODAL, UPDATE_TEXTAREA_VALUE } from '../constants/actionTypes';

const initialState = {
  isVisible: false,
  textareaValue: '',
  currentTodoId: null
}

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        currentTodoId: action.id,
        textareaValue: action.description,
        isVisible: true
      }
    case HIDE_MODAL:
      return {
        ...state,
        isVisible: false
      }
    case UPDATE_TEXTAREA_VALUE:
      return {
        ...state,
        textareaValue: action.value
      }
    default: 
      return state;
  }
}

export default modalReducer;