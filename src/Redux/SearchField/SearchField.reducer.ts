import {
  SEARCHFIELD_CHANGE,
  ISearchValue,
  searchFieldActions
} from "./SearchField.types";

// the first thing to  do  specify type for the initial state or the default state.
// you have to make sure to import the types from the searchBox types.
const initialState: ISearchValue = {
  inputValue: ""
};

// now we are going to specify the types for  parameters & return reducer types.
//Here we need to do two things , the first thing is to do a type
// for the action for that we need to import searchFieldActionsTypes.
// seconde thing is to do specify type for the return type as well
// in here we return the searchField  so here we need to say ISearchValue.
export const searchChangeReducer = (
  state = initialState,
  action: searchFieldActions
): ISearchValue => {
  switch (action.type) {
    case SEARCHFIELD_CHANGE:
      return {
        ...state,
        inputValue: action.payload.target.value
      };
    default:
      return state;
  }
};
