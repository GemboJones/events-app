import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/userContext";
import { useParams } from "react-router-dom";
import { getEvent } from "../api";
import styles from "../styles/SingleEvent.module.css";
import { GetTicketBtn } from "./GetTicketBtn";

export const SingleEvent = () => {
  const { user } = useContext(UserContext);

  const [singleEvent, setSingleEvent] = useState([]);
  const [attending, setAttending] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUserAttending, setIsUserAttending] = useState(false);
  const { _id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getEvent(_id).then((eventData) => {
      setSingleEvent(eventData);
      setAttending(eventData.attending);
      eventData.attending.map((attendee) => {
        if (attendee.email === user.email) {
          setIsUserAttending(true);
        }
      });
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
        <strong>Starts:</strong> {singleEvent.startDate}
      </p>
      <p>
        <strong>Ends:</strong> {singleEvent.endDate}
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
        <strong>Tickets sold:</strong> {attending.length}
      </p>
      {user && attending.length !== 0 && (
        <p>
          <strong>Who's going:</strong>
        </p>
      )}
      <ul>
        {user &&
          attending.map(({ _id, name, email }) => {
            return (
              <li key={_id}>
                {email === user.email ? (
                  <p>
                    {name} <strong>(me!)</strong>
                  </p>
                ) : (
                  <p>{name}</p>
                )}
              </li>
            );
          })}
      </ul>

      {user && !isUserAttending && (
        <GetTicketBtn
          attending={attending}
          setAttending={setAttending}
          _id={_id}
        />
      )}

    </div>
  );
};
