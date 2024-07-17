import { axiosInstance } from "../utils/config/axios";
import { endpoint } from "../utils/config/endpoint";
import { ReviewsResponse, reviewPost } from "@/app/models/reviewsModel";

export const getAllReviews = async (): Promise<ReviewsResponse> => {
  try {
    const response = await axiosInstance.get(endpoint.postReview, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwidXNlcl9pZCI6MSwicm9sZSI6ImFkbWluIiwiZXhwIjoxNzQ4NDMxMjYzfQ.o1cRVeLyfWSexHM-atIIbKA7uwTU6jMYaBAWUhWlmtY`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const postReview = async (data:any) => {
  try {
    await axiosInstance.post(endpoint.postReview, data, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwidXNlcl9pZCI6MSwicm9sZSI6ImFkbWluIiwiZXhwIjoxNzQ4NDMxMjYzfQ.o1cRVeLyfWSexHM-atIIbKA7uwTU6jMYaBAWUhWlmtY`,
      },
    });
    return "Review posted successfully";
  } catch (error) {
    throw error;
  }
};
