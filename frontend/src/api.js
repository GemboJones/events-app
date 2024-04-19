import axios from "axios";

const BASE_URL = "http://localhost:3088/api";

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

export const updateAttending = (_id, user) => {
  return axios.patch(`${BASE_URL}/events/${_id}`, user).then((response) => {
    return response.data;
  });
};