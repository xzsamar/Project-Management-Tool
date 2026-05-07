import axios from "axios";

const API_URL = "https://project-management-tool-5lg2.onrender.com/api/auth";

// GET PROJECTS
export const getProjects = async () => {

  const token = localStorage.getItem("token");

  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
};

// CREATE PROJECT
export const createProject = async (projectData) => {

  const token = localStorage.getItem("token");

  const response = await axios.post(
    API_URL,
    projectData,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return response.data;
};