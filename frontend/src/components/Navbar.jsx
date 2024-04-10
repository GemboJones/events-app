import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link className={styles.title}>Events</Link>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            isMenuOpen ? (
              <img src="../assets/react.svg" />
            ) : (
              <img src="../assets/react.svg" />
            )
          }
          alt="menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${isMenuOpen && styles.menuOpen}`}
          onClick={() => setIsMenuOpen(false)}
        >
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Signup</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
