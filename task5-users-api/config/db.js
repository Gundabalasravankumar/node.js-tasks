const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const connectDB = async () => {
  let mongoUri = process.env.MONGO_URI;

  try {
    const conn = await mongoose.connect(mongoUri || 'mongodb://127.0.0.1:27017/task5-users-api');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    try {
      const memoryServer = await MongoMemoryServer.create();
      const fallbackUri = memoryServer.getUri();
      const conn = await mongoose.connect(fallbackUri);
      console.log(`MongoDB Connected (memory server): ${conn.connection.host}`);
    } catch (memoryError) {
      console.error('MongoDB connection failed:', error.message);
      console.error('Memory server fallback failed:', memoryError.message);
      process.exit(1);
    }
  }
};

module.exports = connectDB;
