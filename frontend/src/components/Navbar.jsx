import React, { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import UserContext from "../context/userContext";
import styles from "../styles/Navbar.module.css";
import closeIcon from "../assets/closeIcon.png";
import menuIcon from "../assets/menuIcon.png";
import confetti from "../assets/confetti.png";

export const Navbar = () => {
  const { user, setUser } = useContext(UserContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.title__container}>
        <img className={styles.title__icon} src={confetti} />
        <Link to="/" className={styles.title}>
          EventFree
        </Link>
      </div>
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
          {user ? (
            <>
              {user.role === "admin" && (
                <li>
                  <NavLink to="/create">Create Event</NavLink>
                </li>
              )}
              <li>
                <NavLink to="/myevents">My Events</NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  onClick={() => {
                    setUser("");
                  }}
                >
                  Log out
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login">Log in</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Sign up</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};
