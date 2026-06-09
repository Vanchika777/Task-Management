# Task Management Web Application

A full-stack Task Management Web Application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). The application allows users to register, log in securely, and manage their tasks through a modern and responsive interface.

## Features

* User Registration and Login
* JWT Authentication
* Protected Routes
* Create Tasks
* View Tasks
* Update Tasks
* Delete Tasks
* Toggle Task Status (Pending/Completed)
* Responsive Dashboard UI
* MongoDB Database Integration

---

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs

---

## Project Structure

```text
Task-Management/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── package.json
└── README.md
```

---

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Vanchika777/Task-Management.git
```

```bash
cd Task-Management
```

---

### 2. Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the backend folder and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start backend server:

```bash
npm run dev
```

Server runs on:

```text
http://localhost:5000
```

---

### 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start React application:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## API Endpoints

### Authentication

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register User |
| POST   | /api/auth/login    | Login User    |

### Tasks

| Method | Endpoint              | Description        |
| ------ | --------------------- | ------------------ |
| GET    | /api/tasks            | Get All Tasks      |
| POST   | /api/tasks            | Create Task        |
| PUT    | /api/tasks/:id        | Update Task        |
| DELETE | /api/tasks/:id        | Delete Task        |
| PATCH  | /api/tasks/:id/status | Toggle Task Status |

---

## Future Improvements

* Search Tasks
* Filter Tasks
* Task Categories
* Due Dates
* Deployment on Render and Vercel

---

## Author

Vanchika Raghav

MERN Stack Task Management Project
