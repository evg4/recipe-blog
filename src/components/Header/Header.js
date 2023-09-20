import styles from "./Header.module.css";
import React from "react";
import NavBar from "../NavBar/NavBar";

function Header() {
  return (
    <div>
      <h1 className={styles.h1}>Recipe blog</h1>
      <NavBar />
    </div>
  );
}

export default Header;
