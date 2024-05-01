const express = require("express");
const router = express.Router();
const { getAllUsers, createUser, getUser, updateUser } = require("../controllers/user.controller.js");

router.get("/", getAllUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.patch("/:id", updateUser);

module.exports = router;
