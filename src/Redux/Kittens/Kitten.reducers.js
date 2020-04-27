import kittensActionsTypes from "./Kittens.types";

const initialState = {
  kittensArray: [],
  isPending: false
};

export const requestKittensReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case kittensActionsTypes.REQUEST_KITTENS_PENDING:
      return {
        ...state,
        isPending: true
      };
    case kittensActionsTypes.REQUEST_KITTENS_SUCCESS:
      return {
        ...state,
        isPending: false,
        kittensArray: action.payload
      };

    case kittensActionsTypes.REQUEST_KITTENS_FAILED:
      return {
        ...state,
        isPending: false,
        error: action.payload
      };
    default:
      return state;
  }
};
