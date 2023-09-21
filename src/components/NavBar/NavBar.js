import React from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : styles.a)}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : styles.a)}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : styles.a)}
            to="/recipes"
          >
            Recipes
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : styles.a)}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
