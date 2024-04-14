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