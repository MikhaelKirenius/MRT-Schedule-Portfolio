import { axiosInstance } from "../utils/config/axios";
import { endpoint } from "../utils/config/endpoint";

export const getAllStations = async () => {
  try {
    const response = await axiosInstance.get(endpoint.getAllStation, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwidXNlcl9pZCI6MSwicm9sZSI6ImFkbWluIiwiZXhwIjoxNzQ4NDMxMjYzfQ.o1cRVeLyfWSexHM-atIIbKA7uwTU6jMYaBAWUhWlmtY`
        }
    });
    return response.data;
    } catch (error) {
    throw error;
    }
}
