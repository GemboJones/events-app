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
    month: "long",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    timeZone: "Europe/London",
  };

  return (
    <>
      <div className={styles.container}>
        <h1>My Events</h1>
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
        )}
      </div>
    </>
  );
};