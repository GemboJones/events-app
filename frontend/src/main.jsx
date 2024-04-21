import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <GoogleOAuthProvider
        clientId={
          "185919865548-g5apfncvvhiavig0i762fv922sfklhfe.apps.googleusercontent.com"
        }
      >
        <App />
      </GoogleOAuthProvider>
    </React.StrictMode>
  </BrowserRouter>
);
