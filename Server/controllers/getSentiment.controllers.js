const getNewsService = require("../services/getNews.service");
const calulateSentiment = require("../services/calculateSentiment.service");

/**
 * Controller to fetch, filter, and analyze sentiment for news articles.
 * * @async function getSentimentDataController
 * @param {string} req.body.topic - The news topic to fetch articles for.
 * @param {Array<{title: string, author: string, time: string|number}>} [req.body.seenNews] - Optional list of previously viewed news items to filter out.
 * @returns {Promise<void>} Sends a 200 JSON response containing processed news with sentiment scores, or error status.
 */
const getSentimentDataController = async (req, res) => {
  const { topic, seenNews } = req.body;
  if (!topic) {
    return res.status(400).json({ message: "Topic is mandatory!" });
  }

  try {
    const newsData = await getNewsService(topic);

    const seenFingerprints = new Set(
      (seenNews || []).map((n) => `${n.title}|${n.author}|${n.time}`),
    );

    const filteredNews = newsData.filter((news) => {
      const currentFingerprint = `${news.title}|${news.author}|${news.time}`;
      return !seenFingerprints.has(currentFingerprint);
    });

    const sentimentData = await calulateSentiment(filteredNews);

    const result = filteredNews.map((news, index) => ({
      ...news,
      sentiment: sentimentData[index]?.sentiment || 0,
    }));

    res.status(200).json({ status: true, data: result });
  } catch (error) {
    console.error("getMeData Error:", error);
    res.status(500).json({ message: "Error in fetching news" });
  }
};

module.exports = getSentimentDataController;
