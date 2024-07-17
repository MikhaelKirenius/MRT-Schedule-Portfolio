import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://mrt-api-production.up.railway.app/api/v1/',
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      timeout: 5000,
});