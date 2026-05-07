# Project Management Tool - MERN Stack

A full-stack Project Management Tool built using the MERN Stack (MongoDB, Express.js, React.js, Node.js).

## Features

- User Authentication (JWT)
- Register & Login
- Protected Routes
- Project Management
- Task Management
- Dashboard Statistics
- Responsive UI
- MongoDB Database Integration

## Tech Stack

### Frontend
- React.js
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- JWT Authentication

### Database
- MongoDB Atlas

## Installation

### Backend

```bash
cd server
npm install
npm run dev
Frontend
cd client
npm install
npm start
Environment Variables

Create .env file inside server folder:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
API Routes
Auth Routes
POST /api/auth/register
POST /api/auth/login
Project Routes
GET /api/projects
POST /api/projects
PUT /api/projects/:id
DELETE /api/projects/:id
Task Routes
GET /api/tasks
POST /api/tasks
PUT /api/tasks/:id
DELETE /api/tasks/:id
Dashboard Route
GET /api/dashboard

Author : Samar Ahmed