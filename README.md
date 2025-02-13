# Task Management

This is a **MERN stack** (MongoDB, Express, React, Node.js) project.
The monorepo structure contains both the **frontend** and **backend** in separate folders:

- **Frontend** (`ui/`) – Built with React.
- **Backend** (`api/`) – Built with Node.js and Express.

## Project Structure

```
/root
 ├── ui/           # Frontend (React)
 └── api/          # Backend (Node.js, Express)
```

---

## Prerequisites

Before running the project, make sure you have the following installed:

- **Node.js** (v18+ recommended)
- **npm**
- **MongoDB** (local or cloud instance)

---

## .env Configuration

Create a `.env` file inside the `api/` directory with the following variables:

```
PORT=            # Backend server port
DB_CONNECTION_URL=  # MongoDB connection string
FRONTEND_URL=    # URL of the frontend app
JWT_SECRET=      # JWT secret key
JWT_EXPIRY=      # JWT token expiry time
```

---

## Installation and Setup

Install dependencies for both frontend and backend:

```bash
# Install backend dependencies
cd api
npm install

# Install frontend dependencies
cd ../ui
npm install
```

---

## Running the Project

You can run both the **frontend** and **backend** individually using `npm run dev`.

### Running the Backend (`api/`)

```bash
cd api
npm run dev
```

This will start the backend server on the specified `PORT` in the `.env` file.

### Running the Frontend (`ui/`)

```bash
cd ui
npm run dev
```

This will start the frontend development server on its default port.
