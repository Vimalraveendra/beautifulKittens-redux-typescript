import {
  REQUEST_KITTENS_PENDING,
  REQUEST_KITTENS_SUCCESS,
  REQUEST_KITTENS_FAILED,
  IKittens,
  KittensActionTypes
} from "./Kittens.types";
import { Dispatch } from "redux";
import { AppState } from "../store";

// here we are goint specify one thing i.e return action type because
//the requestKittensPending is not taking any paramter
export const requestKittensPending = (): KittensActionTypes => ({
  type: REQUEST_KITTENS_PENDING
});

//now here we are going to specify the type of the parameter & the return action type
// here the type of data is typeof Arrayobject & return action is typeof REQUEST_KITTENS_SUCCESS
export const requestKittensSuccess = (
  data: Array<IKittens>
): KittensActionTypes => ({
  type: REQUEST_KITTENS_SUCCESS,
  payload: data
});

export const requestKittensFailed = (error: string): KittensActionTypes => ({
  type: REQUEST_KITTENS_FAILED,
  payload: error
});

// inorder to hook the dispatch to typescript in thunk we can use Dispatch
// types that comes from redux
// Dispatch is going to take a parameter i.e our KittensActiontypes
// which defines all the actions  that can take place in the redux store

// Redux will passes two arguments to thunk functions, dispatch & getState
//dispatch, so that they can dispatch new actions if they need to.
// getState,they can access the current state, that represent the state
// of redux store
export const requestKittens = () => (
  dispatch: Dispatch<KittensActionTypes>,
  getState: () => AppState
) => {
  dispatch(requestKittensPending());
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => dispatch(requestKittensSuccess(data)))
    .catch(error => dispatch(requestKittensFailed(error)));
};
