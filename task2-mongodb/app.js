require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

const MONGODB_URI = process.env.MONGODB_URI;
const sampleUsers = [
  {
    name: "John",
    email: "john@test.com",
    age: 25
  },
  {
    name: "David",
    email: "david@test.com",
    age: 28
  }
];

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.send("Welcome to Stackly! 🚀");
});

app.get("/users", async (req, res) => {
  if (!MONGODB_URI) {
    return res.json(sampleUsers);
  }

  try {
    const users = await User.find({}, { _id: 0, __v: 0 });
    res.json(users);
  } catch (error) {
    res.status(500).json({
      error: "Failed to retrieve users"
    });
  }
});

async function createSampleUsers() {
  try {
    const count = await User.countDocuments();

    if (count === 0) {
      await User.insertMany(sampleUsers);

      console.log("Sample users created");
    }
  } catch (error) {
    console.log("Error creating sample users:", error.message);
  }
}

async function startServer() {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });

  if (!MONGODB_URI) {
    console.warn("MONGODB_URI is not set; /users requires a MongoDB connection");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI);
    await createSampleUsers();
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
}

startServer().catch((error) => {
  console.error("Startup failed:", error.message);
  process.exitCode = 1;
});
