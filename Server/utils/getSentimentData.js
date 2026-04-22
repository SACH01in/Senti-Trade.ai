const calculateSentimentLocalService = require("../services/calculateSentimentLocal.service");
const calculateSentimentAIService = require("../services/calculateSentimentAI.service");

/**
 * Attempts to calculate sentiment using AI first, falls back to local calculation if AI fails.
 * Implements a graceful degradation pattern for reliability.
 *
 * @async
 * @function getSentimentData
 * @param {Array<Object>} news - Array of news articles with {title, description, ...}
 * @param {string} news[].title - Article headline
 * @param {string} [news[].description] - Article description/summary
 * @returns {Promise<Object>} Object containing:
 *   - sentimentData: [{index: number, sentiment: number}, ...]
 *   - aditionAIDATA: {insight: string, signalStrength: string, topTopics: string[]}
 *
 * @description
 * Priority: AI Sentiment (Gemini API) > Local Sentiment (Lexicon-based)
 * If AI API fails or times out, automatically uses local sentiment calculation
 */
const getSentimentData = async (news) => {
  try {
    // Attempt AI-powered sentiment analysis (Gemini API)
    const result = await calculateSentimentAIService(news);

    // Validate AI response format
    if (!result || !result?.sentimentData) {
      throw new Error("Invalid AI response format");
    }

    return result;
  } catch (error) {
    // Fallback to local sentiment calculation
    console.warn(
      "AI sentiment analysis failed, using local lexicon-based analysis",
    );
    const localResults = calculateSentimentLocalService(news);
    return localResults;
  }
};

module.exports = getSentimentData;
