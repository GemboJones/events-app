import axios from "axios";

const BASE_URL = "http://localhost:3088/api";

export const getAllEvents = () => {
   return axios.get(`${BASE_URL}/events`).then((response) => {
       return response.data
   });
}