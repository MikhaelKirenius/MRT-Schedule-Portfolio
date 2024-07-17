// src/services/scheduleService.ts
import { axiosInstance } from "../utils/config/axios";
import { endpoint } from "../utils/config/endpoint";
import { ScheduleResponse } from "@/app/models/schedulesModel";

export const getAllSchedules = async (): Promise<ScheduleResponse> => {
  try {
    const response = await axiosInstance.get(endpoint.getAllSchedule, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwidXNlcl9pZCI6MSwicm9sZSI6ImFkbWluIiwiZXhwIjoxNzQ4NDMxMjYzfQ.o1cRVeLyfWSexHM-atIIbKA7uwTU6jMYaBAWUhWlmtY`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const getSchedulesById = async (id: number): Promise<ScheduleResponse> => {
  try {
    const response = await axiosInstance.get(`${endpoint.getAllSchedule}/${id}`, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwidXNlcl9pZCI6MSwicm9sZSI6ImFkbWluIiwiZXhwIjoxNzQ4NDMxMjYzfQ.o1cRVeLyfWSexHM-atIIbKA7uwTU6jMYaBAWUhWlmtY`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

