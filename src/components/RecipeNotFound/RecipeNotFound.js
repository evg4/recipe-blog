import React from "react";
import HomeButton from "../HomeButton/HomeButton";
import { Link } from "react-router-dom";

function RecipeNotFound() {
  return (
    <>
      <p>
        Sorry, I don't have a recipe for that yet, but I'm sure you'll find
        something you like on my <Link to="/recipes">recipes</Link> page.{" "}
      </p>

      <HomeButton />
    </>
  );
}

export default RecipeNotFound;
