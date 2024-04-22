import React, { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import UserContext from "../context/userContext";
import styles from "../styles/Navbar.module.css";
import closeIcon from "../assets/closeIcon.png";
import menuIcon from "../assets/menuIcon.png";

export const Navbar = () => {
  const { user, setUser } = useContext(UserContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.title}>
        😃 EventFree
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
          {user.role === "admin" && (
            <li>
              <NavLink to="/create">Create Event</NavLink>
            </li>
          )}
          {user ? (
            <li>
              <NavLink
                to="/"
                onClick={() => {
                  setUser("");
                }}
              >
                Logout
              </NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Signup</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};
