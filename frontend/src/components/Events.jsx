import React, { useEffect, useState } from "react";
import { getAllEvents } from "../api";
import { Link } from "react-router-dom";
import styles from "../styles/Events.module.css";

export const Events = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getAllEvents().then((eventsData) => {
      setEvents(eventsData);
    });
    setIsLoading(false);
  }, []);

  if (events.length === 0)
    return (
      <div className={styles.isLoading}>
        <p>Loading...</p>
        <p className={styles.isLoading2}>
          Bear with. Free server slow to wake 😴
        </p>
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
        <div className={styles.hero}>
          <img
            className={styles.hero__image}
            src={
              "https://images.unsplash.com/photo-1471116260918-e7a900488f12?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt=""
          />
          <div className={styles.hero__overlay}></div>
          <div className={styles.hero__heading}>
            <h1>Explore events</h1>
            <h2 className={styles.events__subHeading}>
              Enjoy FREE social events, webinars to boost your career and fun
              days out without the cost.
            </h2>
          </div>
        </div>

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
