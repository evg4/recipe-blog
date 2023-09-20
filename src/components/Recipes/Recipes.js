import React from "react";
import styles from "./Recipes.module.css";
import { useParams, NavLink } from "react-router-dom";
import recipesArray from "../../data/RecipeFiles";
import BackButton from "../BackButton/BackButton";

function Recipes() {
  return (
    <>
      <h2>Recipes</h2>
      <ul>
        {recipesArray.map((recipe) => {
          return (
            <li>
              <NavLink to={recipe.name}> {recipe.name}</NavLink>
            </li>
          );
        })}
      </ul>
      <BackButton />
    </>
  );
}

export default Recipes;
