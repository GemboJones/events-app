import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import styles from "../styles/Login.module.css";
import { createNewEvent } from "../api";

export const CreateEvent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [topic, setTopic] = useState("");
  const [date, setDate] = useState("");
  
  const [newEventId, setNewEventId] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const addNewEvent = { title, description, location, topic, date };
    createNewEvent(addNewEvent).then((eventAdded) => {
      setNewEventId(eventAdded._id);
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
        <h2>Create Event</h2>

        <label>Title:</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label>Description:</label>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <label>Location:</label>
        <input
          type="text"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
        />

        <label>Topic:</label>
        <input
          type="text"
          onChange={(e) => setTopic(e.target.value)}
          value={topic}
        />

        <label>Event Date:</label>
        <input
          type="text"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />

        <button>Create Event</button>
        {/* {error && <div className="error">{error}</div>} */}
      </form>
      {newEventId && <Navigate to={`/events/${newEventId}`} />}
    </div>
  );
};
