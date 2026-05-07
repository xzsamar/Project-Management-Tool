import { useEffect, useState } from "react";

import {
  getTasks,
  createTask
} from "../services/taskService";

import { getProjects } from "../services/projectService";

import Navbar from "../components/Navbar";

function Tasks() {

  const [tasks, setTasks] = useState([]);

  const [projects, setProjects] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "To Do",
    priority: "Medium",
    project: ""
  });

  useEffect(() => {

    fetchTasks();
    fetchProjects();

  }, []);

  const fetchTasks = async () => {

    try {

      const data = await getTasks();

      setTasks(data);

    } catch (error) {

      console.log(error);

    }

  };

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

      await createTask(formData);

      alert("Task Created");

      fetchTasks();

      setFormData({
        title: "",
        description: "",
        status: "To Do",
        priority: "Medium",
        project: ""
      });

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div>

      <Navbar />

      <div className="page-container">

        <h1>Tasks</h1>

        <div className="form-container">

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="title"
              placeholder="Task Title"
              value={formData.title}
              onChange={handleChange}
            />

            <br /><br />

            <textarea
              name="description"
              placeholder="Task Description"
              value={formData.description}
              onChange={handleChange}
            />

            <br /><br />

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >

              <option>To Do</option>
              <option>In Progress</option>
              <option>Completed</option>

            </select>

            <br /><br />

            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
            >

              <option>Low</option>
              <option>Medium</option>
              <option>High</option>

            </select>

            <br /><br />

            <select
              name="project"
              value={formData.project}
              onChange={handleChange}
            >

              <option value="">
                Select Project
              </option>

              {
                projects.map((project) => (

                  <option
                    key={project._id}
                    value={project._id}
                  >
                    {project.title}
                  </option>

                ))
              }

            </select>

            <br /><br />

            <button type="submit">
              Create Task
            </button>

          </form>

        </div>

        <hr />

        <h2>All Tasks</h2>

        {
          tasks.map((task) => (

            <div
              key={task._id}
              className="card"
            >

              <h3>{task.title}</h3>

              <p>{task.description}</p>

              <p>Status: {task.status}</p>

              <p>Priority: {task.priority}</p>

              <p>
                Project:
                {" "}
                {task.project?.title}
              </p>

            </div>

          ))
        }

      </div>

    </div>

  );

}

export default Tasks;