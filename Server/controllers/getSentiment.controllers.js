const getNewsService = require("../services/getNews.service");
const getSentimentData = require("../utils/getSentimentData");

/**
 * Express controller to fetch news articles and calculate their sentiment.
 * Retrieves articles for a given topic from NewsAPI and processes them with sentiment analysis.
 *
 * @async
 * @function getSentimentDataController
 * @param {Object} req - Express request object
 * @param {Object} req.body - Request body
 * @param {string} req.body.topic - The news topic/stock symbol to search (e.g., "Tesla", "Apple")
 * @param {Object} res - Express response object
 * @returns {void} Sends JSON response with status, newsData (5 articles), and rawData (sentiment analysis)
 *
 * @example
 * POST /api/sentiment/getData
 * Body: { "topic": "tesla" }
 * Response: {
 *   "status": true,
 *   "newsData": [...5 articles],
 *   "rawData": {
 *     "sentimentData": [{index, sentiment}, ...],
 *     "aditionAIDATA": {insight, signalStrength, topTopics}
 *   }
 * }
 */
const getSentimentDataController = async (req, res) => {
  const { topic } = req.body;

  // Validate topic is provided
  if (!topic) {
    return res.status(400).json({ message: "Topic is mandatory!" });
  }

  try {
    // Fetch news articles for the topic
    const newsData = await getNewsService(topic);

    // Calculate sentiment for each article
    const sentimentAnalysis = await getSentimentData(newsData);

    // Return processed data
    res.status(200).json({
      status: true,
      newsData: newsData,
      rawData: {
        sentimentData: sentimentAnalysis?.sentimentData,
        aditionAIDATA: sentimentAnalysis?.aditionAIDATA,
      },
    });
  } catch (error) {
    console.error("Error in getSentimentDataController:", error.message);
    res.status(500).json({
      status: false,
      message: "Error in fetching news and sentiment data",
    });
  }
};

module.exports = getSentimentDataController;
