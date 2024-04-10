// import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
