// Describing the shape of the searchField  slice of state
export interface ISearchValue {
  inputValue: string;
}

export const SEARCHFIELD_CHANGE = " SEARCHFIELD_CHANGE";
// so we are exporting each actions in typescript format
interface searchFieldChangeAction {
  type: typeof SEARCHFIELD_CHANGE;
  payload: React.ChangeEvent<HTMLInputElement>;
}

export type searchFieldActions = searchFieldChangeAction;
