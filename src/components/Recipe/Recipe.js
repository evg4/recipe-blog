import React from "react";
import { useParams } from "react-router-dom";
import { recipesArray } from "../../data/RecipeFiles";
import RecipeNotFound from "../RecipeNotFound/RecipeNotFound";
import BackButton from "../BackButton/BackButton";
import styles from "./Recipe.module.css";

function Recipe() {
  let { name } = useParams();
  if (recipesArray.some((recipe) => recipe.name === name)) {
    for (let i = 0; i < recipesArray.length; i++) {
      if (name === recipesArray[i].name) {
        return (
          <div className={styles.container}>
            <h3>How to make: {name}</h3>
            <div className={styles.div}>
              <div>
                <h4>Ingredients</h4>
                <ul>
                  {recipesArray[i].ingredients.map((ingredient) => {
                    return <li key={ingredient}>{ingredient}</li>;
                  })}
                </ul>
              </div>
              <img
                className={styles.img}
                height="300"
                alt="the finished dish"
                src={recipesArray[i].img}
              ></img>
            </div>
            <h4>Method</h4>
            <ol>
              {recipesArray[i].recipe.map((method) => {
                return <li key={method}>{method}</li>;
              })}
            </ol>

            <BackButton />
          </div>
        );
      }
    }
  } else {
    return <RecipeNotFound />;
  }
}

export default Recipe;
