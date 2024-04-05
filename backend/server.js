const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./db/dbConnect.js");
const PORT = process.env.PORT || 3088;

connectDB();

app.get("/", (req, res) => {
   res.send("Hello from API Server");
});


mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
