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
  const [image, setImage] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [inputError, setInputError] = useState(false);
  const [dbError, setDbError] = useState(false);

  const [newEventId, setNewEventId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const addNewEvent = {
      title,
      description,
      location,
      topic,
      image,
      startDate,
      endDate,
    };

    if (
      !title ||
      !description ||
      !location ||
      !topic ||
      !image ||
      !startDate ||
      !endDate
    ) {
      setInputError(true);
      setDbError(false);
    } else {
      createNewEvent(addNewEvent).then((eventAdded) => {
        setInputError(false);
        if (!eventAdded) {
          console.log("no data");
          setDbError(true);
        } else {
          console.log("data found");
          setNewEventId(eventAdded._id);
          setDbError(false);
        }
      });
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h2>Create Event</h2>

        <label>Title:</label>
        <input
          type="text"
          placeholder="Add event name"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label>Description:</label>
        <input
          type="text"
          placeholder="Add event description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <label>Image:</label>
        <input
          type="text"
          placeholder="Add image URL link"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />

        <label>Location:</label>
        <input
          type="text"
          placeholder="Add event location"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
        />

        <label>Topic:</label>
        <input
          type="text"
          placeholder="Add event topic e.g. Technology or Health"
          onChange={(e) => setTopic(e.target.value)}
          value={topic}
        />

        <label>Start Date:</label>
        <input
          type="datetime-local"
          onChange={(e) => setStartDate(e.target.value)}
          value={startDate}
        />

        <label>End Date:</label>
        <input
          type="datetime-local"
          onChange={(e) => setEndDate(e.target.value)}
          value={endDate}
        />

        <button type="submit">Create Event</button>

        {dbError && <div className={styles.error}>Error creating event</div>}
        {inputError && (
          <div className={styles.error}>Please fill in all fields</div>
        )}
      </form>
      {newEventId && <Navigate to={`/events/${newEventId}`} />}
    </div>
  );
};
