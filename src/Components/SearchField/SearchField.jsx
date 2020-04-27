import React from "react";
import "./SearchField.scss";
import { searchChange } from "../../Redux/SearchField/SearchField.actions";
import { connect } from "react-redux";

const SearchField = ({ searchChange }) => {
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

const mapDispatchToProps = dispatch => ({
  searchChange: event => dispatch(searchChange(event.target.value))
});
export default connect(null, mapDispatchToProps)(SearchField);
