const mongoose = require("mongoose");
require("dotenv").config();  // Ensure you load environment variables

const uri = process.env.DB_URI;  // Use the DB_URI from the environment variable

// Check if DB_URI is defined
if (!uri) {
  console.error("Error: DB_URI is not defined in the .env file.");
  process.exit(1);  // Exit the process if the URI is not defined
}

// Test MongoDB connection
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB successfully!");
    process.exit(0); // Exit the process after a successful connection
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1); // Exit the process with an error code
  });
