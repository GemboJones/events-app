import React, { useEffect, useState } from "react";
import { getAllEvents } from "../api";
import { Link } from "react-router-dom";
import styles from "../styles/Events.module.css";

export const Events = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    getAllEvents().then((eventsData) => {
      setEvents(eventsData);
    });
    setIsLoading(false);
  }, []);

  if (events.length === 0) return (
    <div className={styles.isLoading}>
      <p>Loading...</p>
    </div>
  );

  const dateOptions = {
    day: "numeric",
    month: "long",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    timeZone: "Europe/London",
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Explore events</h1>
        <h2 className={styles.events__subHeading}>
          Enjoy FREE social events, webinars to boost your career and fun days
          out without the cost.
        </h2>
        
        <ul className={styles.eventsGrid}>
          {events.map(
            ({
              _id,
              title,
              topic,
              startDate,
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
                    <div className={styles.eventCard__textContainer}>
                      <p className={styles.topicText}>
                        <strong>{topic}</strong>
                      </p>
                      <h3 className={styles.eventCard__title}>{title} </h3>
                      <p>
                        {Intl.DateTimeFormat("en-GB", dateOptions).format(
                          Date.parse(startDate)
                        )}
                      </p>
                      <p>📍 {location}</p>
                    </div>
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
