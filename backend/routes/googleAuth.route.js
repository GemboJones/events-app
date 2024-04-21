const express = require("express");
const router = express.Router();
const { getToken } = require("../controllers/googleAuth.controller.js");

router.post("/:id", getToken);

module.exports = router;
