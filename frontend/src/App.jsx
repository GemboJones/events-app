import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";
import { Events } from "./components/Events";
import { SingleEvent } from "./components/SingleEvent";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Events />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:_id" element={<SingleEvent /> } />
      </Routes>
    </>
  );
}

export default App;
