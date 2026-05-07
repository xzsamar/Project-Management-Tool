import { useEffect, useState } from "react";

import { getDashboardStats } from "../services/dashboardService";

import Navbar from "../components/Navbar";

function Dashboard() {

  const [stats, setStats] = useState({
    totalProjects: 0,
    totalTasks: 0,
    completedTasks: 0,
    pendingTasks: 0
  });

  useEffect(() => {

    fetchStats();

  }, []);

  const fetchStats = async () => {

    try {

      const data = await getDashboardStats();

      setStats(data);

    } catch (error) {

      console.log(error);

    }

  };

 return (

  <div>

    <Navbar />

    <div className="page-container">

      <h1>Dashboard</h1>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h2>{stats.totalProjects}</h2>
          <p>Total Projects</p>
        </div>

        <div className="dashboard-card">
          <h2>{stats.totalTasks}</h2>
          <p>Total Tasks</p>
        </div>

        <div className="dashboard-card">
          <h2>{stats.completedTasks}</h2>
          <p>Completed Tasks</p>
        </div>

        <div className="dashboard-card">
          <h2>{stats.pendingTasks}</h2>
          <p>Pending Tasks</p>
        </div>

      </div>

    </div>

  </div>

);

}

export default Dashboard;