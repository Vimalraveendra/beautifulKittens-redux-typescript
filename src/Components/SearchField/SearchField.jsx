import React from "react";
import "./SearchField.scss";

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

export default SearchField;
