import React from "react";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/userContext";
import styles from "../styles/Login.module.css";
import { userLogin } from "../api";

export const Login = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { email };

    userLogin(formData).then((userData) => {
      if (!userData) {
        console.log("no data");
        setError(true)
      } else {
        console.log("data found");
        setUser(userData);
        navigate("/");
      }
    });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h2>Log In</h2>

        <label>Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button>Log in</button>
        {error && <div className={styles.error}>Error logging in</div>}
        
      </form>

      <br />

      <p>New user?</p>
      <Link to={"/signup"}>
        <p className={styles.underlined}>Sign up</p>
      </Link>
    </div>
  );
};
