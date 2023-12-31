import React from "react";
import { recipeNames } from "../../data/RecipeFiles";
import { NavLink } from "react-router-dom";

function RecipesAsc(props) {
  const recipesAsc = recipeNames.sort();
  return (
    <ul>
      {recipesAsc.map((recipe) => {
        return (
          <li key={recipe}>
            <NavLink to={recipe}>{recipe}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default RecipesAsc;
