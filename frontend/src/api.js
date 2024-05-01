import axios from "axios";

const BASE_URL = "https://events-app-api-nlkr.onrender.com/api";

export const getAllEvents = () => {
   return axios.get(`${BASE_URL}/events`).then((response) => {
       return response.data
   });
}

export const getEvent = (_id) => {
  return axios.get(`${BASE_URL}/events/${_id}`).then((response) => {
    return response.data;
  });
};

export const createNewEvent = (addNewEvent) => {
  return axios.post(`${BASE_URL}/events`, addNewEvent).then((response) => {
    return response.data;
  });
};

export const createNewUser = (addNewUser) => {
  return axios.post(`${BASE_URL}/users`, addNewUser).then((response) => {
    return response.data;
  });
};

export const userLogin = (formData) => {
  return axios.post(`${BASE_URL}/login`, formData).then((response) => {
    return response.data;
  });
};

export const updateUserEvents = (_id, eventId) => {
  return axios.patch(`${BASE_URL}/users/${_id}`, eventId).then((response) => {
    return response.data;
  });
};

export const updateAttending = (_id, userId) => {
  return axios.patch(`${BASE_URL}/events/${_id}`, userId).then((response) => {
    return response.data;
  });
};

export const extractTokens = (_id, code) => {
  return axios.post(`${BASE_URL}/auth/${_id}`, code).then((response) => {
    return response.data;
  });
};
