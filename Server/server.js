const express = require("express");
const app = express();
require("dotenv").config();
const getNewsRouter = require("./routes/getNews.route");
const getSentimentRouter = require("./routes/getSentiment.route");
const cors = require("cors");

const allowedOrigins = [process.env.FRONTEND_URL];

/**
 * Express server for Senti-Trade.ai sentiment analysis API.
 * Handles news fetching and sentiment analysis endpoints.
 *
 * Endpoints:
 * - GET /: Health check
 * - POST /api/sentiment/getData: Fetch news and sentiment for a topic
 * - POST /api/news: News-only endpoints
 */

// CORS configuration: Only allow frontend URL
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);

app.use(express.json());

/**
 * Health check endpoint to verify server is running.
 * @route GET /
 * @returns {string} Server running message with port
 */
app.get("/", (req, res) => {
  res.send(`app is running smoothly at port ${process.env?.PORT}`);
});

// API Routes
app.use("/api/news", getNewsRouter);
app.use("/api/sentiment", getSentimentRouter);

// Start server
app.listen(process.env?.PORT || 3002, () => {
  console.log("app is running at ", process.env.URL);
});
