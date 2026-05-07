const Project = require("../models/Project");
const Task = require("../models/Task");

const getDashboardStats = async (req, res) => {

  try {

    // Total Projects
    const totalProjects = await Project.countDocuments({
      createdBy: req.user._id
    });

    // Total Tasks
    const totalTasks = await Task.countDocuments({
      createdBy: req.user._id
    });

    // Completed Tasks
    const completedTasks = await Task.countDocuments({
      createdBy: req.user._id,
      status: "Completed"
    });

    // Pending Tasks
    const pendingTasks = await Task.countDocuments({
      createdBy: req.user._id,
      status: { $ne: "Completed" }
    });

    res.status(200).json({
      totalProjects,
      totalTasks,
      completedTasks,
      pendingTasks
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

module.exports = {
  getDashboardStats
};