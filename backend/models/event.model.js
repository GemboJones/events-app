const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    default:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  topic: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
    default: "free",
  },
  attending: [
    { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false },
  ],
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Event", eventSchema);
