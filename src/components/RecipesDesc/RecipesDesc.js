import React from "react";
import { recipesArray, recipeNames } from "../../data/RecipeFiles";
import { NavLink } from "react-router-dom";

function RecipesDesc() {
  const recipesDesc = recipeNames.sort().reverse();
  console.log(recipesDesc);
  return (
    <ul>
      {recipesDesc.map((recipe) => {
        return (
          <li>
            <NavLink to={recipe}>{recipe}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default RecipesDesc;
