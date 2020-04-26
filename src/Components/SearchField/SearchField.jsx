import React from "react";
import "./SearchField.scss";

const SearchField = ({ searchChange }) => {
  return (
    <div>
      <input
        className="input-field"
        type="text"
        placeholder="Search Kittens"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchField;
