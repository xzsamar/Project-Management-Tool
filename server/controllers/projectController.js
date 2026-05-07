const Project = require("../models/Project");

// CREATE PROJECT
const createProject = async (req, res) => {

  try {

    const { title, description, status } = req.body;

    const project = await Project.create({
      title,
      description,
      status,
      createdBy: req.user._id
    });

    res.status(201).json(project);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

// GET ALL PROJECTS
const getProjects = async (req, res) => {

  try {

    const projects = await Project.find({
      createdBy: req.user._id
    });

    res.status(200).json(projects);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

// UPDATE PROJECT
const updateProject = async (req, res) => {

  try {

    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        message: "Project not found"
      });
    }

    // Check ownership
    if (project.createdBy.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        message: "Not Authorized"
      });
    }

    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedProject);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

// DELETE PROJECT
const deleteProject = async (req, res) => {

  try {

    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        message: "Project not found"
      });
    }

    // Check ownership
    if (project.createdBy.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        message: "Not Authorized"
      });
    }

    await project.deleteOne();

    res.status(200).json({
      message: "Project Deleted Successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

module.exports = {
  createProject,
  getProjects,
  updateProject,
  deleteProject
};