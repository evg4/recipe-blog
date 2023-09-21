import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <h2>Welcome!</h2>
      <p>
        Thanks for visiting my recipe blog. Here I will share my favourite
        recipes for you to enjoy too! I only recommend the ones that I
        personally have tried and have been happy with. It has to be worth the
        time and effort! I always use{" "}
        <a href="https://www.bbcgoodfood.com/" target="_blank" rel={noreferrer}>
          BBC good food
        </a>{" "}
        for my recipes, because there is loads to choose from and it uses
        British measurements. <br></br>
        <br></br>
        To learn more about me and my background in cooking, see my{" "}
        <Link to="/about">About</Link> page.
        <br></br>
        <br></br>
        To get in touch (please do send me your recommendations!) go to{" "}
        <Link to="/contact">Contact</Link>. <br></br>
        <br></br>
        And most importantly, to see my favourite recipes, click{" "}
        <Link to="/recipes">here</Link>!
      </p>
    </div>
  );
}

export default HomePage;
