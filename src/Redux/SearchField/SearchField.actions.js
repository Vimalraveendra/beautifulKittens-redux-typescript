import { SEARCHFIELD_CHANGE } from "./SearchField.types";

export const searchChange = event => ({
  type: SEARCHFIELD_CHANGE,
  payload: event
});
