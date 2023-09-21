import React from "react";
import { recipesArray, recipeNames } from "../../data/RecipeFiles";
import { NavLink } from "react-router-dom";

function RecipesDesc() {
  const recipesDesc = recipeNames.sort().reverse();
  return (
    <ul>
      {recipesDesc.map((recipe) => {
        return (
          <li key={recipe}>
            <NavLink to={recipe}>{recipe}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default RecipesDesc;
