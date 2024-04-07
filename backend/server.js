const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./db/dbConnect.js");
const PORT = process.env.PORT || 3088;
const Comment = require("./models/dbTesting/comment.model.js");
const Event = require("./models/dbTesting/event.model.js");


connectDB();

app.get("/", (req, res) => {
   res.send("Hello from API Server");
});

app.get("/api/comments", async (req, res) => {
  try {
    const comments = await Comment.find({});
    res.status(200).send(comments);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get("/api/events", async (req, res) => {
  try {
    const events = await Event.find({});
    res.status(200).send(events);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.post("/api/events", async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(200).send(event);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});


mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
