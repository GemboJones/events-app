import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/userContext";
import { getAllEvents } from "../api";
import { Link } from "react-router-dom";
import styles from "../styles/Events.module.css";

export const Events = () => {
  const { user } = useContext(UserContext);

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
      </div>
    );

  const dateOptions = {
    day: "numeric",
    month: "short",
    weekday: "long",
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
              "https://images.unsplash.com/photo-1471116260918-e7a900488f12?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt=""
          />
          <div className={styles.hero__overlay}></div>
          <div className={styles.hero__textContainer}>
            <h1 className={styles.hero__heading}>Explore events</h1>
            <h2 className={styles.hero__subHeading}>
              Enjoy FREE social events, webinars and fun days out without the
              cost
            </h2>
            {!user && (
              <div className={styles.hero__buttonContainer}>
                <Link className={styles.hero__button} to="/signup">
                  Join EventFree
                </Link>
              </div>
            )}
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
                      <p className={styles.eventCard__topicText}>{topic}</p>
                      <h3 className={styles.eventCard__title}>{title} </h3>
                      <p className={styles.eventCard__body}>
                        {Intl.DateTimeFormat("en-GB", dateOptions).format(
                          Date.parse(startDate)
                        )}
                      </p>
                      <p className={styles.eventCard__body}>📍 {location}</p>
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
