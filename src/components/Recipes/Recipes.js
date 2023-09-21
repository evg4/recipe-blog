import React from "react";
import styles from "./Recipes.module.css";
import {
  useParams,
  NavLink,
  useSearchParams,
  useNavigate,
  createSearchParams,
} from "react-router-dom";
import { recipesArray, recipeNames } from "../../data/RecipeFiles";
import BackButton from "../BackButton/BackButton";
import RecipesAsc from "../RecipesAsc/RecipesAsc";
import RecipesDesc from "../RecipesDesc/RecipesDesc";
import SearchBar from "../SearchBar/SearchBar";

function Recipes() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOrder = searchParams.get("order");
  if (sortOrder === "ASC") {
    return (
      <div className={styles.container}>
        <h2>Recipes</h2>
        <button onClick={() => setSearchParams({ order: "DESC" })}>
          Sort Z-A
        </button>{" "}
        <button onClick={() => setSearchParams({ order: "" })}>Reset</button>
        <RecipesAsc recipeInfo={recipesArray} />
        <SearchBar />
        <br></br>
        <BackButton />
      </div>
    );
  } else if (sortOrder === "DESC") {
    return (
      <div className={styles.container}>
        <h2>Recipes</h2>
        <button onClick={() => setSearchParams({ order: "ASC" })}>
          Sort A-Z
        </button>{" "}
        <button onClick={() => setSearchParams({ order: "" })}>Reset</button>
        <RecipesDesc />
        <SearchBar />
        <br></br>
        <BackButton />
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <h2>Recipes</h2>
        <button onClick={() => setSearchParams({ order: "ASC" })}>
          Sort A-Z
        </button>{" "}
        <button disabled onClick={() => setSearchParams({ order: "" })}>
          Reset
        </button>
        <ul>
          {recipesArray.map((recipe) => {
            return (
              <li key={recipe.name}>
                <NavLink to={recipe.name}> {recipe.name}</NavLink>
              </li>
            );
          })}
        </ul>
        <SearchBar />
        <br></br>
        <BackButton />
      </div>
    );
  }
}

export default Recipes;
