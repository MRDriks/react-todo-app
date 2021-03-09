import { UPDATE_INPUT_VALUE } from '../constants/actionTypes';

const initialState = {
  inputValue: ''
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INPUT_VALUE:
      return {
        inputValue: action.value
      }
    default: 
      return state;
  }
}

export default formReducer;