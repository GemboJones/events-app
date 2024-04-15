import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEvent } from "../api";
import styles from "../styles/SingleEvent.module.css";

export const SingleEvent = () => {
  const [singleEvent, setSingleEvent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { _id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getEvent(_id).then((eventData) => {
      setSingleEvent(eventData);
       setIsLoading(false);
    });
  }, [_id]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <img className={styles.eventImage} src={singleEvent.image} alt="" />
      <p>{singleEvent.topic}</p>
      <h1>{singleEvent.title}</h1>
      <p>
        <strong>Date:</strong> {singleEvent.date}
      </p>
      <p>
        <strong>Description:</strong> {singleEvent.description}
      </p>
      <p>
        <strong>Location:</strong> {singleEvent.location}
      </p>
      <p>
        <strong>Price:</strong> {singleEvent.price}
      </p>
      <p>
        <strong>Tickets sold:</strong> {singleEvent.attending.length}
      </p>
      {singleEvent.attending.length !== 0 && (
        <p>
          <strong>Who's going:</strong>
        </p>
      )}
      <ul>
        {singleEvent.attending.map(({ _id, name }) => {
          return (
            <li key={_id}>
              <p>{name}</p>
            </li>
          );
        })}
      </ul>
      <button>Get ticket</button>
    </div>
  );
};
