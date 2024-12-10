const mongoose = require("mongoose");

// Use the corrected connection URI
const uri = process.env.DB_URI; 
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
