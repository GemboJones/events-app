import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import closeIcon from "../assets/closeIcon.png"
import menuIcon from "../assets/menuIcon.png"

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.title}>
        Events
      </Link>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={isMenuOpen ? closeIcon : menuIcon}
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
