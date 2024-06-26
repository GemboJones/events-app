import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { extractTokens } from "../api";

export const GoogleCal = ({ _id }) => {
  const login = useGoogleLogin({
    onSuccess: (googleResponse) => {
      const { code } = googleResponse;
      console.log("login successful", { code });

      extractTokens(_id, { code }).then((serverResponse) => {
        if (serverResponse) {
          console.log("event added to calendar", serverResponse);
        }
        alert("Event added to Google calendar");
      });
    },
    flow: "auth-code",
    scope: "https://www.googleapis.com/auth/calendar.events",
    onError: (err) => {
      console.log("Login Failed", err);
      alert("Google login failed");
    },
  });

  return (
    <>
      <div>
        <button onClick={() => login()}>Add to Calendar</button>
      </div>
    </>
  );
};
