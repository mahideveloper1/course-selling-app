# Course Selling Platform

This project is a full-stack MERN (MongoDB, Express.js, React, Node.js) application for selling courses. Users can browse, purchase, and manage courses.

## Features

- User authentication (signup, login, logout)
- Browse available courses
- Purchase courses
- Manage purchased courses

## Tech Stack

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **React Router**: Declarative routing for React.
- **Material-UI**: React components for faster and easier web development.
- **Axios**: Promise based HTTP client for the browser and Node.js.

### Backend

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: A document-oriented NoSQL database.
- **Mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
- **JWT (JSON Web Tokens)**: A compact, URL-safe means of representing claims to be transferred between two parties.

## Environment Variables

Create a `.env` file in the `backend` directory and add the following environment variables:

- PORT= 3000
- MONGODB_URI=your_mongodb_uri
- JWT_SECRET=your_jwt_secret

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/course-selling-platform.git

   ```

2. Navigate to the project directory:

- cd course-selling-platform

3. Install dependencies for both frontend and backend:

- cd frontend
- npm install
- cd ../backend
- npm install

4. Start the backend server:

- cd ../backend
- node index.js

5. In a separate terminal, start the frontend:

- cd ../frontend
- npm run dev

# CONTRIBUTIONS

Contributions are welcome! Please fork this repository and create a pull request with your changes.
