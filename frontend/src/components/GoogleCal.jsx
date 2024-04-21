import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";
import { extractTokens } from "../api";

export const GoogleCal = ({ _id }) => {
  const login = useGoogleLogin({
    onSuccess: (googleResponse) => {
      const { code } = googleResponse;
      console.log("login successful");
      extractTokens(_id, { code }).then((serverResponse) => {
        console.log(serverResponse);
        alert("Event added to your google calendar");
      });
    },
    flow: "auth-code",
    scope: "https://www.googleapis.com/auth/calendar",
    onError: (err) => {
      console.log("Login Failed");
      alert("Google login failed", err);
    },
  });

//   const handleGoogleResponse = (response) => {
//     console.log(response);
//     const { credential } = response;
//     getTokenInfo({ credential }).then((stuff) => {
//       console.log(stuff);
//     });
//   };

//   const handleGoogleError = (err) => {
//     alert("Login Failed:", err);
//     console.log(err);
//   };

  return (
    <>
      <div>
        {/* <p>Add to Google Calendar</p>
        <GoogleLogin
          onSuccess={handleGoogleResponse}
          onError={handleGoogleError}
        /> */}
        {/* {clickedTicketBtn && ( */}
          <button onClick={() => login()}>🗓️ Add to Calendar</button>
        {/* )} */}
      </div>
    </>
  );
};
