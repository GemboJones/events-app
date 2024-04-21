const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./db/dbConnect.js");
const PORT = process.env.PORT || 3088;

const eventRouter = require("./routes/event.route.js")
const userRouter = require("./routes/user.route.js")
const loginRouter = require("./routes/login.route.js")
const googleAuthRouter = require("./routes/googleAuth.route.js")


connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/events", eventRouter);
app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);
app.use("/api/auth", googleAuthRouter);


mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
