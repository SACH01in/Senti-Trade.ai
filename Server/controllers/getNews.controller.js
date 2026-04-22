const getNewsService = require("../services/getNews.service");
const rawNewsData = require("../utils/rawNewsData");
const calulateSentimentLocal = require("../services/calculateSentimentLocal.service");
require("dotenv").config();

/**
 * Express controller to handle news fetching requests.
 * Extracts the topic from the request body, invokes the news service,
 * and sends a JSON response back to the client.
 *
 * @async
 * @function getNewsController
 * @param {string} req.body.topic - The ticker symbol or company name to search (e.g., "Nvidia")
 * @returns {Promise<void>} Sends a 200 status with data, or a 500 status on internal error.
 */
const getNewsController = async (req, res) => {
  try {
    const { topic } = req.body;

    const simplifiedData = await getNewsService(topic);

    res.status(200).json({
      status: true,
      simplifiedData,
    });
  } catch (error) {
    console.error("Error in getNewsController:", error);
    res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};

const getNewsSentimentController = async (req, res) => {
  try {
    const Data = await calulateSentimentLocal(rawNewsData);
    console.log(Data);
    const result = rawNewsData.map((news, index) => ({
      ...news,
      sentiment: Data.sentimentData[index]?.sentiment || 0,
    }));

    res
      .status(200)
      .json({ status: true, data: result, AIinsight: Data.aditionAIDATA });
  } catch (error) {
    console.error("getMeData Error:", error);
    res.status(500).json({ message: "Error in fetching news" });
  }
};

module.exports = {
  getNewsController,
  getNewsSentimentController,
};
