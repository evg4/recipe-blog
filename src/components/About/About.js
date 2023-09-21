import React from "react";
import BackButton from "../BackButton/BackButton";
import { Link } from "react-router-dom";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.container}>
      <h2>About me</h2>
      <p>
        I fell in love with cooking at the age of 5 when I helped my granny pick
        apples for a crumble. I like to cook and bake - everything from stews
        and pasta dishes to pastries and cakes. My dream is to be a chef and
        have my own restaurant. <br></br>
        <br></br> In the meantime, I like to practise my skills by trying out
        new things whenever I get the chance. Whenever I find something I like
        and would be happy to make again, I add it here to my blog so I can
        refer back to it, and so others can enjoy it too!
        <br /> <br></br>
        So please do visit my <Link to="/recipes"> Recipes</Link> page - I'm
        sure you'll find something you like!
      </p>
      <BackButton />
    </div>
  );
}

export default About;
