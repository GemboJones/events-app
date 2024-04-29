import React from "react";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/userContext";
import styles from "../styles/Login.module.css";
import { createNewUser } from "../api";

export const SignUp = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const [dbError, setDbError] = useState(false);
  const [inputError, setInputError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const addNewUser = { name, email, password, role };

    if (!name || !email || !password || !role) {
      setInputError(true);
      setDbError(false);
    } else {
      createNewUser(addNewUser).then((response) => {
        setInputError(false);
        console.log(response);
        if (response.message) {
          console.log("sign up unsuccessful");
          setDbError(true);
        } else if (response.email) {
          console.log("sign up successful");
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
        <h2>Create an account</h2>

        <label>Name:</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

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

        <label>Role:</label>
        <select name="role" onChange={(e) => setRole(e.target.value)}>
          <option value="">Select role</option>
          <option value="member">Member</option>
          <option value="admin">Admin</option>
        </select>

        <button>Sign up</button>
  
        {dbError && <div className={styles.error}>Error signing up</div>}
        {inputError && (
          <div className={styles.error}>Please fill in all fields</div>
        )}
      </form>

      <br />

      <p>Already have an account?</p>
      <Link to={"/login"}>
        <p className={styles.underlined}>Log in</p>
      </Link>
    </div>
  );
};
