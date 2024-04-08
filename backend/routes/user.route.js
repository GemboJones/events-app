const express = require("express");
const router = express.Router();
const { getAllUsers, createUser } = require("../controllers/user.controller.js");

router.get("/", getAllUsers);
// router.get("/:id", getUser);
router.post("/", createUser);

module.exports = router;
