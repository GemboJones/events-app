import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/userContext";
import styles from "../styles/Events.module.css";
import { getUser } from "../api";
import { Link } from "react-router-dom";

export const MyEvents = () => {
  const { user } = useContext(UserContext);

  const [myEvents, setMyEvents] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getUser(user._id).then((response) => {
      console.log(response);
      setMyEvents(response.myEvents);
    });
    setIsLoading(false);
  }, [user._id]);

  if (isLoading)
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
        <h1 className={styles.myEvents__heading}>My Events</h1>
        {myEvents.length === 0 ? (
          <p>
            No events booked.{" "}
            <Link to={"/events"} className={styles.underlined}>
              Browse Events
            </Link>
          </p>
        ) : (
          <ul className={styles.eventsGrid}>
            {myEvents.map(
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
                      <div className={styles.eventCard__imageContainer}>
                        <img
                          src={image}
                          alt=""
                          className={styles.eventCard__image}
                        />
                      </div>
                      <div className={styles.eventCard__textContainer}>
                        <p className={styles.eventCard__topicText}>{topic} </p>
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
        )}
      </div>
    </>
  );
};
