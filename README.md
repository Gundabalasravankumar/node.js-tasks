# node.js-tasks

This repository contains three separate Node.js learning tasks.

## Project Structure

- `task1/app.js` - A basic Express server with one home route.
- `task2-mongodb/app.js` - An Express users API that reads users from MongoDB.
- `task2-mongodb/model/User.js` - The Mongoose schema and model used by Task 2.
- `task3/task3_functions.js` - JavaScript function, array, callback, Promise, and async/await examples.

## Installation

Open PowerShell in the repository root and install the dependencies:

```bash
npm install
```

The root `package.json` starts Task 2. Task 1 and Task 3 have their own files and commands.

## Task 1: Express Server

Run from the repository root:

```bash
node task1/app.js
```

Open `http://localhost:3000/`. The `GET /` route returns `Welcome to Stackly!!`.

Stop a running server with `Ctrl+C`.

## Task 2: MongoDB API

Create or update `.env` in the repository root:

```env
MONGODB_URI=your_mongodb_connection_string
```

Start Task 2 from the repository root:

```bash
npm start
```

Available routes:

- `GET http://localhost:3000/` returns a welcome message.
- `GET http://localhost:3000/users` returns users from MongoDB.

When MongoDB is not configured or cannot be reached, `/users` returns the built-in sample users. When a connection succeeds and the collection is empty, the app inserts the sample users first.

Task 2 startup process:

1. `dotenv` loads `MONGODB_URI` from `.env`.
2. Express creates the web server and registers the routes.
3. Mongoose attempts to connect to MongoDB.
4. The server reads users through the `User` model when MongoDB is available.
5. The server uses sample data if MongoDB is unavailable.

## Task 3: JavaScript Functions

Run from the repository root:

```bash
node task3/task3_functions.js
```

The output demonstrates function declarations, function expressions, arrow functions, `map`, `filter`, `find`, `forEach`, callbacks, Promises, and `async`/`await`.

## Useful Commands

```bash
# Check the Node.js version
node --version

# Install dependencies
npm install

# Start Task 2
npm start

# Run Task 1 directly
node task1/app.js

# Run Task 3 directly
node task3/task3_functions.js
```