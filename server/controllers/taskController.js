const Task = require("../models/Task");

// CREATE TASK
const createTask = async (req, res) => {

  try {

    const {
      title,
      description,
      status,
      priority,
      project
    } = req.body;

    const task = await Task.create({
      title,
      description,
      status,
      priority,
      project,
      createdBy: req.user._id
    });

    res.status(201).json(task);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

// GET TASKS
const getTasks = async (req, res) => {

  try {

    const tasks = await Task.find({
      createdBy: req.user._id
    }).populate("project");

    res.status(200).json(tasks);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

// UPDATE TASK
const updateTask = async (req, res) => {

  try {

    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    // Check ownership
    if (task.createdBy.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        message: "Not Authorized"
      });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedTask);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

// DELETE TASK
const deleteTask = async (req, res) => {

  try {

    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    // Check ownership
    if (task.createdBy.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        message: "Not Authorized"
      });
    }

    await task.deleteOne();

    res.status(200).json({
      message: "Task Deleted Successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask
};