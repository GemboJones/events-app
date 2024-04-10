const express = require("express");
const router = express.Router();
const { getAllEvents, getEvent, createEvent, updateEvent, updateAttending } = require("../controllers/event.controller.js")


router.get("/", getAllEvents);
router.get("/:id", getEvent);
router.post("/", createEvent);
router.patch("/:id", updateEvent);
// router.patch("/:id/attending", updateAttending);

module.exports = router;