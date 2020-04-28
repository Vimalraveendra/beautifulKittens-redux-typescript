// Describing the shape of the kittens  slice of state
export interface IKittens {
  id: Number;
  name: String;
  email: String;
  website: String;
  phone: Number;
}

export interface IKittensArray {
  kittensArray: Array<IKittens>;
  isPending: boolean;
  error: string;
}

export const REQUEST_KITTENS_PENDING = "REQUEST_KITTENS_PENDING ";
export const REQUEST_KITTENS_SUCCESS = "REQUEST_KITTENS_SUCCESS ";
export const REQUEST_KITTENS_FAILED = "REQUEST_KITTENS_FAILED ";

// so we are exporting each actions in typescript format

export interface kittensPendingAction {
  type: typeof REQUEST_KITTENS_PENDING;
}

export interface kittensSuccessAction {
  type: typeof REQUEST_KITTENS_SUCCESS;
  payload: Array<IKittens>;
}

export interface kittensFailedAction {
  type: typeof REQUEST_KITTENS_FAILED;
  payload: string;
}

// here we making the aggregation all these typescript actions
// for that I am using the union operator or OR  operator.

export type KittensActionTypes =
  | kittensPendingAction
  | kittensSuccessAction
  | kittensFailedAction;
