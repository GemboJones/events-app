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
  const [dbError, setDbError] = useState(false);
  const [inputError, setInputError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { email };

        if (!email || !password) {
          setInputError(true);
          setDbError(false);
        } else {
          userLogin(formData).then((response) => {
            setInputError(false);
            if (response.message) {
              console.log("login unsuccessful");
              setDbError(true);
            } else if (response.email) {
              console.log("login successful");
              setUser(response);
              setDbError(false);
              navigate("/");
            }
          });
        }
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
        
        {dbError && <div className={styles.error}>Error logging in</div>}
        {inputError && (
          <div className={styles.error}>Please fill in all fields</div>
        )}
      </form>

      <br />

      <p>New user?</p>
      <Link to={"/signup"}>
        <p className={styles.underlined}>Sign up</p>
      </Link>
    </div>
  );
};
