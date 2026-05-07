const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const taskRoutes = require("./routes/taskRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

// Middleware
app.use(cors({
  origin: "*",
  credentials: true
}));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/dashboard", dashboardRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("API Running Successfully");
});

// Port
const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {

  console.log("MongoDB Connected");

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

})
.catch((err) => {
  console.log(err);
});