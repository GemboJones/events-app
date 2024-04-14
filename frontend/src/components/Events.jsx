import React, { useEffect, useState } from "react";
import { getAllEvents } from "../api";
import { Link } from "react-router-dom";
import styles from "../styles/Events.module.css";

export const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getAllEvents().then((eventsData) => {
      setEvents(eventsData);
    });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h1>Explore events</h1>
        <h3>
          Discover social events, fun days out and webinars to boost your
          career.
        </h3>
        <ul className={styles.events}>
          {events.map(
            ({
              _id,
              title,
              topic,
              date,
              description,
              location,
              price,
              image,
              attending,
            }) => {
              return (
                <Link to={`/events/${_id}`} key={_id}>
                  <li className={styles.eventCard}>
                    <img
                      src={image}
                      alt=""
                      className={styles.eventCard__image}
                    />
                    <h2>{title} </h2>
                    <p>
                      <strong>Date:</strong> {date}
                    </p>
                    <p>
                      <strong>Location:</strong> {location}
                    </p>
                    <p>
                      <strong>Price:</strong> {price}
                    </p>
                    {/* <p>
                      <strong>Tickets sold:</strong> {attending.length}
                    </p>
                    {attending.length !== 0 && (
                      <p>
                        <strong>Who's going:</strong>
                      </p>
                    )}
                    {attending.map(({ _id, name }) => {
                      return <p key={_id}>{name}</p>;
                    })} */}
                  </li>
                </Link>
              );
            }
          )}
        </ul>
      </div>
    </>
  );
};
