import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <>
      <label>Search</label>
      <input
        value={search}
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
};

export default SearchBar;
