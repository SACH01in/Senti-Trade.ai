const express = require("express");
const getSentimentDataController = require("../controllers/getSentiment.controllers");
const router = express.Router();

router.post("/getData", getSentimentDataController);

module.exports = router;
