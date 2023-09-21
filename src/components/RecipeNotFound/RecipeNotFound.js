import React from "react";
import HomeButton from "../HomeButton/HomeButton";
import { Link } from "react-router-dom";
import styles from "./RecipeNotFound.module.css";

function RecipeNotFound() {
  return (
    <div className={styles.container}>
      <p>
        Sorry, I don't have a recipe for that yet, but I'm sure you'll find
        something you like on my <Link to="/recipes">recipes</Link> page.{" "}
      </p>

      <HomeButton />
    </div>
  );
}

export default RecipeNotFound;
