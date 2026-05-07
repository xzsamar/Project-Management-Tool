import axios from "axios";

const API_URL = "https://project-management-tool-5lg2.onrender.com/api/auth";

export const getDashboardStats = async () => {

  const token = localStorage.getItem("token");

  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
};