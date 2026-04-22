const express = require("express");
const { getNewsController, getNewsSentimentController } = require("../controllers/getNews.controller");
const router = express.Router();

router.post("/get", getNewsController);
router.post("/getSentiment", getNewsSentimentController);

module.exports = router;
