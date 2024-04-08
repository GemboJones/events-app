const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./db/dbConnect.js");
const PORT = process.env.PORT || 3088;

const eventRouter = require("./routes/event.route.js")


connectDB();

app.use(express.json());

app.use("/api/events", eventRouter);


mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
