import React from "react";
import "tachyons";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="">
      <input
        placeholder="Search Robo id here"
        type="search"
        className="pa2 bg-light-green"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
