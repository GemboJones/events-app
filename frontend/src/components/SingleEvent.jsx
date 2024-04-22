import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/userContext";
import { useParams } from "react-router-dom";
import { getEvent } from "../api";
import styles from "../styles/SingleEvent.module.css";
import { GetTicketBtn } from "./GetTicketBtn";
import { GoogleCal } from "./GoogleCal";

export const SingleEvent = () => {
  const { user } = useContext(UserContext);

  const [singleEvent, setSingleEvent] = useState([]);
  const [attending, setAttending] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUserAttending, setIsUserAttending] = useState(false);
  const [clickedTicketBtn, setClickedTicketBtn] = useState(false);
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
  }, []);

  const dateOptions = {
    day: "numeric",
    month: "long",
    weekday: "long",
    timeZone: "Europe/London",
  };

  const TimeOptions = {
    hour: "numeric",
    minute: "numeric",
  };

  return (
    <div className={styles.container}>
      <div>{isLoading && <p>Loading...</p>}</div>
      <div>
        {!isLoading && (
          <>
            <div className={styles.eventImage__container}>
              <img
                className={styles.eventImage}
                src={singleEvent.image}
                alt=""
              />
            </div>
            <h4 className={styles.topicText}>{singleEvent.topic}</h4>
            <h1 className={styles.singleEvent__title}>{singleEvent.title}</h1>
            <p>
              <strong>Date</strong> <br />
              📅{" "}
              {Intl.DateTimeFormat("en-GB", dateOptions).format(
                Date.parse(singleEvent.startDate)
              )}
            </p>
            <p>
              <strong>Time</strong> <br />
              🕑{" "}
              {Intl.DateTimeFormat("en-GB", TimeOptions).format(
                Date.parse(singleEvent.startDate)
              )}{" "}
              -{" "}
              {Intl.DateTimeFormat("en-GB", TimeOptions).format(
                Date.parse(singleEvent.endDate)
              )}
            </p>
            <p>
              <strong>Location</strong> <br />
              📍 {singleEvent.location}
            </p>
            <p>
              <strong>About this event</strong> <br />
              {singleEvent.description}
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
                          👤 {name} <strong>(me!)</strong>
                        </p>
                      ) : (
                        <p>👤 {name}</p>
                      )}
                    </li>
                  );
                })}
            </ul>
            <p>
              <strong>Price</strong> <br />
              🛒 {singleEvent.price}
            </p>
            {user && !isUserAttending && (
              <GetTicketBtn
                attending={attending}
                setAttending={setAttending}
                setClickedTicketBtn={setClickedTicketBtn}
                clickedTicketBtn={clickedTicketBtn}
                setIsUserAttending={setIsUserAttending}
                _id={_id}
              />
            )}

            {user && isUserAttending && (
              <GoogleCal _id={_id} clickedTicketBtn={clickedTicketBtn} />
            )}
          </>
        )}
      </div>
    </div>
  );
};
