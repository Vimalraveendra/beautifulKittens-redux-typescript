import { SEARCHFIELD_CHANGE } from "./SearchField.types";

const initialState = {
  inputValue: ""
};

export const searchChangeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEARCHFIELD_CHANGE:
      return {
        ...state,
        inputValue: action.payload
      };
    default:
      return state;
  }
};
