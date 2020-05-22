import React from "react";
import "./SearchField.scss";
import { searchChange } from "../../Redux/SearchField/SearchField.actions";
import { searchFieldActions } from "../../Redux/SearchField/SearchField.types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";

interface SearchFieldProps {}
type Props = SearchFieldProps & LinkMapDispatchProps;

const SearchField: React.FC<Props> = ({ searchChange }) => {
  return (
    <React.Fragment>
      <input
        className="input-field"
        type="text"
        placeholder="Search Kittens"
        onChange={searchChange}
      />
    </React.Fragment>
  );
};
// here we are specifying the return type of LinkMapDispatchProps
interface LinkMapDispatchProps {
  searchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, searchFieldActions>
):LinkMapDispatchProps => ({
  // bindActionCreators is when you want to pass some action creators
  // down to a component that isn't aware of Redux, and you don't want
  //to pass dispatch or the Redux store to it.
  searchChange: bindActionCreators(searchChange, dispatch)
});
export default connect(null, mapDispatchToProps)(SearchField);
