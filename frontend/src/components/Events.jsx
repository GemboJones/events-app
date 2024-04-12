import React, { useEffect, useState } from "react";
import { getAllEvents } from "../api";

export const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getAllEvents().then((eventsData) => {
      console.log(eventsData);
      setEvents(eventsData);
    });
  }, []);

  return (
    <>
      <h1>Events</h1>
      <ul>
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
              <li key={_id}>
                {/* <img src={image} alt="" /> */}
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
                <p>
                  <strong>Tickets sold:</strong> {attending.length}
                </p>
                {attending.length !== 0 && (
                  <p>
                    <strong>Who's going:</strong>
                  </p>
                )}
                {attending.map(({ _id, name }) => {
                  return <p key={_id}>{name}</p>;
                })}
              </li>
            );
          }
        )}
      </ul>
    </>
  );
};
