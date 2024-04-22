import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";
import { Events } from "./components/Events";
import { SingleEvent } from "./components/SingleEvent";
import { CreateEvent } from "./components/CreateEvent";
import { SignUp } from "./components/SignUp";
import { UserProvider } from "./context/userContext";

const App = () => {
  return (
    <>
      <UserProvider>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Events />} />
          {/* <Route path="/events" element={<Events />} /> */}
          <Route path="/create" element={<CreateEvent />} />
          <Route path="/events/:_id" element={<SingleEvent />} />
        </Routes>
      </UserProvider>
    </>
  );
};

export default App;
