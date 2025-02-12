import axios from "axios";

export const Api= axios.create({
    baseURL:import.meta.env.VITE_CUSTOMER_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  })

