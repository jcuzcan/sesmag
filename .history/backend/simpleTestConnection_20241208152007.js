const mongoose = require("mongoose");

const uri = "mongodb+srv://juancuzcano65:Erichfromm1!@cluster0.imger.mongodb.net/chatbot_data?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB successfully!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1);
  });
