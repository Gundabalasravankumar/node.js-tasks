# Task 2: MongoDB Users API

This task uses the original Express and Mongoose users API. The `User` schema is kept inside `app.js`, matching the original working code.

## Setup

From the repository root, create a `.env` file or copy your existing one. Then run Task 2 from this folder:

```powershell
cd task2-mongodb
npm install
npm start
```

Put your MongoDB Atlas connection string in the root `.env` file:

```env
MONGODB_URI=mongodb+srv://username:password@your-cluster.mongodb.net/node_tasks?retryWrites=true&w=majority
```

In MongoDB Atlas, add your current IP address under **Network Access** and make sure the cluster is running.

## Routes

Open these URLs in a browser:

```text
http://localhost:3000/
http://localhost:3000/users
```

The `/users` route reads users from MongoDB. If `MONGODB_URI` is empty, it returns the two sample users. If MongoDB cannot be reached while a URL is configured, check the URL, Atlas IP allowlist, cluster status, and database password.