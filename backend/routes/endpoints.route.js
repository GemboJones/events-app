const express = require("express");
const router = express.Router();
const { getEndpoints } = require("../controllers/endpoints.controllers.js");

router.get("/", getEndpoints);

module.exports = router;
