import { useEffect, useState } from "react";

import {
  getProjects,
  createProject
} from "../services/projectService";

import Navbar from "../components/Navbar";

function Projects() {

  const [projects, setProjects] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Pending"
  });

  useEffect(() => {

    fetchProjects();

  }, []);

  const fetchProjects = async () => {

    try {

      const data = await getProjects();

      setProjects(data);

    } catch (error) {

      console.log(error);

    }

  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await createProject(formData);

      alert("Project Created");

      fetchProjects();

      setFormData({
        title: "",
        description: "",
        status: "Pending"
      });

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div>

      <Navbar />

      <div className="page-container">

        <h1>Projects</h1>

        <div className="form-container">

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="title"
              placeholder="Project Title"
              value={formData.title}
              onChange={handleChange}
            />

            <br /><br />

            <textarea
              name="description"
              placeholder="Project Description"
              value={formData.description}
              onChange={handleChange}
            />

            <br /><br />

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >

              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>

            </select>

            <br /><br />

            <button type="submit">
              Create Project
            </button>

          </form>

        </div>

        <hr />

        <h2>All Projects</h2>

        {
          projects.map((project) => (

            <div
              key={project._id}
              className="card"
            >

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <p>Status: {project.status}</p>

            </div>

          ))
        }

      </div>

    </div>

  );

}

export default Projects;