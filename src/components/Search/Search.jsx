import React from "react";
import "./Search.scss";
import { MdSearch } from "react-icons/md";

const Search = () => {
  return (
    <div className="search-div">
      <input
        type="search"
        name="search"
        id="home-search"
        placeholder="Search here..."
      />
      <button id="home-search-button">
        <MdSearch size="24px" />
      </button>
    </div>
  );
};

export default Search;
