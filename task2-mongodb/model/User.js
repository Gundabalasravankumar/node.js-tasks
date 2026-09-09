// Import Mongoose so the application can describe and query MongoDB documents.
const mongoose = require("mongoose");

// Define the fields stored for each user document.
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

// Export the model so app.js can query and insert User documents.
module.exports = mongoose.model("User", userSchema);