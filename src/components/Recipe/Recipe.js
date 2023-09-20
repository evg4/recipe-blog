import React from "react";
import { useParams } from "react-router-dom";
import recipesArray from "../../data/RecipeFiles";
import RecipeNotFound from "../RecipeNotFound/RecipeNotFound";
import BackButton from "../BackButton/BackButton";

function Recipe() {
  let { name } = useParams();
  if (recipesArray.some((recipe) => recipe.name === name)) {
    for (let i = 0; i < recipesArray.length; i++) {
      if (name === recipesArray[i].name) {
        return (
          <>
            <h3>How to make: {name}</h3>
            <p>{recipesArray[i].recipe}</p>
            <BackButton />
          </>
        );
      }
    }
  } else {
    return <RecipeNotFound />;
  }
}

export default Recipe;

//
