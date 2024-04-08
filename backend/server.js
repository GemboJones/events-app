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

app.get("/", (req, res) => {
   res.send("Hello from API Server");
});


// app.post("/api/events", async (req, res) => {
//   try {
//     const event = await Event.create(req.body);
//     console.log(req.body);
//     res.status(200).send(event);
//     console.log(event);
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// });



mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
