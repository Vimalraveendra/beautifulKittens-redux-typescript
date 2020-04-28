import {
  REQUEST_KITTENS_PENDING,
  REQUEST_KITTENS_SUCCESS,
  REQUEST_KITTENS_FAILED,
  IKittensArray,
  KittensActionTypes
} from "./Kittens.types";
//the first thing we need to do specify the type of default state or initial state
// for that you have to make sure to import  the types from kittensActionTypes
const initialState: IKittensArray = {
  kittensArray: [],
  isPending: false,
  error: ""
};

// now here we are going to specify the types of the parematers &
// types of the return type
export const requestKittensReducer = (
  state = initialState,
  action: KittensActionTypes
): IKittensArray => {
  switch (action.type) {
    case REQUEST_KITTENS_PENDING:
      return {
        ...state,
        isPending: true
      };
    case REQUEST_KITTENS_SUCCESS:
      return {
        ...state,
        isPending: false,
        kittensArray: action.payload
      };

    case REQUEST_KITTENS_FAILED:
      return {
        ...state,
        isPending: false,
        error: action.payload
      };
    default:
      return state;
  }
};
