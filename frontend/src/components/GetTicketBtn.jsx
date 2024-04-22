import React, { useContext, useState } from "react";
import UserContext from "../context/userContext";
import { updateAttending } from "../api";

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
    setIsUserAttending(true)
    updateAttending(_id, { attending: user }).then((eventUpdated) => {});
    setAttending((currentAttending) => {
      return [user, ...currentAttending];
    });
    alert(`We'll see you there ${user.name}!`);
  };

  return (
    <div>
      {!clickedTicketBtn && <button onClick={handleClick}>Get Ticket</button>}
    </div>
  );
};
