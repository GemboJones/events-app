import React from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import styles from "../styles/Login.module.css";
// import { getUser } from "../api";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const findUser = { name, email, password };
    console.log(findUser);

    getUser(findUser).then((userData) => {
      // setUser(userData);
    });
    // setTitle("")
    // setDescription("")
    // setLocation("")
    // setTopic("")
    // setDate("")
    // const response = await fetch('/api/addNewEvents', {
    //   method: 'POST',
    //   body: JSON.stringify(addNewEvent),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // const json = await response.json()
    // if (!response.ok) {
    //   setError(json.error)
    // }
    // if (response.ok) {
    //   setError(null)
    //   setTitle('')
    //   setDescription('')
    //   setLocation('')
    //   dispatch({type: 'CREATE_WORKOUT', payload: json})
    // }
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
        {/* {error && <div className="error">{error}</div>} */}
      </form>

      <br />

      <p>New user?</p>
      <Link to={"/signup"}>
        <p className={styles.underlined}>Sign up</p>
      </Link>

      {user && <Navigate to={"/"} />}
    </div>
  );
};
