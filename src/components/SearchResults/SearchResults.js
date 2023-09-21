import React from "react";
import { recipesArray, recipeNames } from "../../data/RecipeFiles";
import BackButton from "../BackButton/BackButton";
import SearchBar from "../SearchBar/SearchBar";
import { useSearchParams, Link } from "react-router-dom";

function SearchResults() {
  const [searchParams] = useSearchParams();
  const recipeToFind = searchParams.get("recipe");
  let results = [];
  if (recipeToFind.length > 0) {
    for (let i = 0; i < recipeNames.length; i++) {
      if (recipeNames[i].toUpperCase().includes(recipeToFind.toUpperCase())) {
        results.push(recipeNames[i]);
      }
    }
    if (results.length > 0) {
      return (
        <>
          {" "}
          <p>Search results for: {recipeToFind}</p>
          <ul>
            {results.map((recipe) => {
              return (
                <li key={recipe}>
                  <Link to={"/recipes/" + recipe}>{recipe}</Link>
                </li>
              );
            })}
          </ul>
        </>
      );
    } else {
      return (
        <>
          <p>
            Sorry, I don't have any recipes for {recipeToFind} yet. Try
            searching for another term.
          </p>
          <SearchBar />
          <BackButton />
        </>
      );
    }
  } else {
    return (
      <>
        <p>Please enter a search term.</p>
        <SearchBar />
        <BackButton />
      </>
    );
  }
}

export default SearchResults;

/*return (
  <>
    <p>Search results for: {recipeToFind}</p>
    <SearchBar />
    <BackButton />
  </>
);*/
