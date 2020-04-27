import { requestKittensReducer } from "../Redux/Kittens/Kitten.reducers";
import { searchChangeReducer } from "../Redux/SearchField/SearchField.reducer";
import { combineReducers } from "redux";

export default combineReducers({
  kittensList: requestKittensReducer,
  searchInput: searchChangeReducer
});
