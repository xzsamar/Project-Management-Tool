import axios from "axios";

const API_URL = "https://project-management-tool-5lg2.onrender.com";

// GET TASKS
export const getTasks = async () => {

  const token = localStorage.getItem("token");

  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
};

// CREATE TASK
export const createTask = async (taskData) => {

  const token = localStorage.getItem("token");

  const response = await axios.post(
    API_URL,
    taskData,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return response.data;
};