import axios from "axios";
import { Job } from "../types/job";

const API_URL = "https://64d61782754d3e0f13619660.mockapi.io/job";

// fetch job
export const fetchAllJob = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// post job
export const createJob = async (value: Job) => {
  try {
    const response = await axios.post(API_URL, value);
    return response;
  } catch (error) {
    console.error("Error posting data:", error);
  }
};

// delete job
export const deleteJob = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response;
  } catch (error) {
    console.error("Error deleting data:", error);
  }
};

// delete job
export const getSingleJob = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// edit job
export const updateJob = async (id: string, value: Job) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, value);
    return response;
  } catch (error) {
    console.error("Error posting data:", error);
  }
};
