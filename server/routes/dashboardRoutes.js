const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  getDashboardStats
} = require("../controllers/dashboardController");

// Dashboard Stats
router.get("/", protect, getDashboardStats);

module.exports = router;