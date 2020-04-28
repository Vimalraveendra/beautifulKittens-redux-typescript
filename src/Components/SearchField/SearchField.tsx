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

interface LinkMapDispatchProps {
  searchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, searchFieldActions>
) => ({
  searchChange: bindActionCreators(searchChange, dispatch)
});
export default connect(null, mapDispatchToProps)(SearchField);
