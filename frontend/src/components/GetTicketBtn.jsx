import React, { useContext, useState } from "react";
import UserContext from "../context/userContext";
import { updateAttending } from "../api";

export const GetTicketBtn = ({ _id, setAttending }) => {
  const { user } = useContext(UserContext);
  const [clickedTicketBtn, setClickedTicketBtn] = useState(false);

  const handleClick = () => {
   setClickedTicketBtn(true)
    updateAttending(_id, { attending: user }).then((eventUpdated) => {
    });
    setAttending((currentAttending) => {
      return [user, ...currentAttending];
    });
    alert(`We'll see you there ${user.name}!`);
  };

  return (
    <div>
      {!clickedTicketBtn && <button onClick={handleClick}>Get ticket</button>}
    </div>
  );
};
