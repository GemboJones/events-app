import React, { useContext, useState } from "react";
import UserContext from "../context/userContext";
import { updateAttending, updateUserEvents } from "../api";

export const GetTicketBtn = ({
  _id,
  setAttending,
  setClickedTicketBtn,
  clickedTicketBtn,
  setIsUserAttending,
}) => {
  const { user } = useContext(UserContext);

  const handleClick = () => {
    setClickedTicketBtn(true);
    setIsUserAttending(true);
    updateUserEvents(user._id, { myEvents: _id }).then((response) => {
      console.log("user response>>>", response);
    });
    updateAttending(_id, { attending: user._id }).then((response) => {
      console.log("event response>>>", response);
      setAttending((currentAttending) => {
        return [user, ...currentAttending];
      });
      alert(`We'll see you there ${user.name}!`);
    });
  };

  return (
    <div>
      {!clickedTicketBtn && <button onClick={handleClick}>Get Ticket</button>}
    </div>
  );
};
