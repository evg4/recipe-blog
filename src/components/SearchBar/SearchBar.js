import React from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  function handleSearch(e) {
    e.preventDefault();
    let searchTerm = document.getElementById("input").value;
    const paramsObject = { recipe: searchTerm };
    const query = createSearchParams(paramsObject);
    navigate("/recipes/search?" + query);
  }

  return (
    <>
      <form onSubmit={handleSearch}>
        <input id="input"></input>
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default SearchBar;
