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

  if (isLoading) return <p>Loading...</p>;

  const dateOptions = {
    day: "numeric",
    month: "long",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    // timeZoneName: "short",
    timeZone: "Europe/London",
  };

  return (
    <>
      <div className={styles.container}>
        <h2>Explore events</h2>
        <h3>
          Enjoy great events without the cost. Discover FREE social events, webinars to boost your career and fun days out.
        </h3>
        <ul className={styles.events}>
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
                    <div className={styles.eventCard__text}>
                      <p>
                        <strong>{topic}</strong>
                      </p>
                      <h2>{title} </h2>
                      <p>
                        {Intl.DateTimeFormat("en-GB", dateOptions).format(
                          Date.parse(startDate)
                        )}
                      </p>
                      <p>📍 {location}</p>
                      {/* <p>
                        🛒 {price}
                      </p> */}

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
