# Task 2: MongoDB Users API

This task uses the original Express and Mongoose users API. The `User` schema is kept inside `app.js`, matching the original working code.

## Setup

From the repository root, install dependencies:

```powershell
npm install
```

Put your MongoDB Atlas connection string in the root `.env` file:

```env
MONGODB_URI=mongodb+srv://username:password@your-cluster.mongodb.net/node_tasks?retryWrites=true&w=majority
```

In MongoDB Atlas, add your current IP address under **Network Access** and make sure the cluster is running.

## Run

From `C:\node.js`:

```powershell
node app.js
```

You can also run Task 2 directly:

```powershell
node task2-mongodb/app.js
```

## Routes

Open these URLs in a browser:

```text
http://localhost:3000/
http://localhost:3000/users
```

The `/users` route reads users from MongoDB. If `MONGODB_URI` is empty, it returns the two sample users. If MongoDB cannot be reached while a URL is configured, check the URL, Atlas IP allowlist, cluster status, and database password.