import React from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import styles from "../styles/Login.module.css";
import { createNewUser } from "../api";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const [newUser, setNewUser] = useState("");

  const handleSubmit = (e) => {
    
    e.preventDefault();
    const addNewUser = { name, email, password, role };

    createNewUser(addNewUser).then((userAdded) => {
      setNewUser(userAdded);
          console.log(userAdded);
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
          <option value="select">Select role</option>
          <option value="member">Member</option>
          <option value="admin">Admin</option>
        </select>
        {/* <input
          type="dropdown"
          onChange={(e) => setRole(e.target.value)}
          value={role}
        /> */}

        <button>Sign up</button>
        {/* {error && <div className="error">{error}</div>} */}
      </form>

      <br />

      <p>Already have an account?</p>
      <Link to={"/login"}>
        <p className={styles.underlined}>Log in</p>
      </Link>

      {newUser && <Navigate to={"/"} />}
    </div>
  );
};
