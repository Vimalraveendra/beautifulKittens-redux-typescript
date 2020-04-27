import kittensActionsTypes from "./Kittens.types";

export const requestKittensPending = () => ({
  type: kittensActionsTypes.REQUEST_KITTENS_PENDING
});

export const requestKittensSuccess = data => ({
  type: kittensActionsTypes.REQUEST_KITTENS_SUCCESS,
  payload: data
});

export const requestKittensFailed = error => ({
  type: kittensActionsTypes.REQUEST_KITTENS_FAILED,
  payload: error
});
export const requestKittens = () => dispatch => {};
