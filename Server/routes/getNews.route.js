const express = require("express");
const { getNewsController } = require("../controllers/getNews.controller");
const router = express.Router();

router.post("/get", getNewsController);

module.exports = router;
