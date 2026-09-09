// Import Express so the application can create an HTTP server.
const express = require("express");

// Create the Express application instance.
const app = express();

// Handle GET requests to the home page.
app.get("/", (req, res) => {
  res.send("Welcome to Stackly!!");
});

// Start listening for requests on port 3000.
app.listen(3000, () => {
  console.log("Server is running on localhost...");
});