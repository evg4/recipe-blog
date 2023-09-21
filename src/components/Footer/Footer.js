import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <p className={styles.footer}>
      Recipe blog | All recipes from{" "}
      <a
        className={styles.a}
        target="_blank"
        rel="noreferrer"
        href="https://www.bbcgoodfood.com/"
      >
        BBC good food
      </a>
      <span> </span>| All images from{" "}
      <a
        className={styles.a}
        target="_blank"
        rel="noopener"
        href="https://unsplash.com/"
      >
        Unsplash
      </a>
    </p>
  );
}

export default Footer;
