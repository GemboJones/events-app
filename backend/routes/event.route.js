const express = require("express");
const router = express.Router();
const { getAllEvents, getEvent, createEvent } = require("../controllers/event.controller.js")


router.get("/", getAllEvents);
router.get("/:id", getEvent);
router.post("/", createEvent);

module.exports = router;