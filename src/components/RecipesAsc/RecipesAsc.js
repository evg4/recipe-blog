import React from "react";
import { recipesArray, recipeNames } from "../../data/RecipeFiles";
import { NavLink } from "react-router-dom";

function RecipesAsc() {
  const recipesAsc = recipeNames.sort();
  console.log(recipesAsc);
  return (
    <ul>
      {recipesAsc.map((recipe) => {
        return (
          <li>
            <NavLink to={recipe}>{recipe}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default RecipesAsc;
