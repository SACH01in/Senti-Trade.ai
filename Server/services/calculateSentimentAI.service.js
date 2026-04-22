const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env?.Gemini_API_Key);

/**
 * Calculates sentiment for news articles using Google's Gemini AI API.
 * Uses a quantitative financial analyst prompt to provide nuanced market sentiment analysis.
 *
 * @async
 * @function calculateSentimentAI
 * @param {Array<Object>} newsData - Array of news articles to analyze
 * @param {string} newsData[].title - Article headline (used for analysis)
 * @param {string} [newsData[].description] - Article description
 * @returns {Promise<Object>} Sentiment analysis result with sentimentData and aditionAIDATA
 * @throws {Error} On API failure, rate limit, or service unavailability
 */
const calculateSentimentAI = async (newsData) => {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `
  You are an expert Quantitative Financial Sentiment Analyst. Your task is to process news headlines and determine their projected impact on stock market sentiment.

  ### ANALYSIS GUIDELINES:
  1. **Sentiment Scale:** -1.0 (Highly Bearish) to +1.0 (Highly Bullish). 0.0 is Neutral.
  2. **Impact Weighting:** Prioritize terms like "Inflation", "Fed", "Interest Rate", "Ceasefire", "War", "Earnings Beat", or "Liquidity".
  3. **Consistency:** Analyze each headline within the context of global market trends.
  4. **Signal Strength Logic:** - Avg > 0.5: "Strong Buy"
    - Avg 0.1 to 0.5: "Buy"
    - Avg -0.1 to 0.1: "Neutral"
    - Avg -0.5 to -0.1: "Sell"
    - Avg < -0.5: "Strong Sell"

  ### OUTPUT FORMAT (CRITICAL):
  Return ONLY a pure JSON object that strictly adheres to the following structure:
  {
    "sentimentData": [
      { "index": number, "sentiment": number },
      ...
    ],
    "aditionAIDATA": {
      "insight": "A one-liner summary of collective sentiment.",
      "signalStrength": "Based on average sentiment: Strong Buy | Buy | Neutral | Sell | Strong Sell",
      "topTopics": ["term1", "term2", ..., "termN"]
    }
  }

  ### CONSTRAINTS:
  1. No markdown formatting (absolutely no \`\`\`json tags).
  2. No introductory or concluding conversational text.
  3. The "sentimentData" array must contain the exact same number of objects as the input data.
  4. The "topTopics" array must contain exactly 7 to 10 unique, high-value financial keywords found in the input.

  ### DATA TO ANALYZE:
  ${JSON.stringify(newsData.map((n, i) => ({ index: i, title: n.title })))}
  `;
  try {
    // Call Gemini API with the prompt
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    // Clean JSON response (remove markdown formatting)
    const cleanedJson = text.replace(/```json|```/g, "").trim();

    // Parse and return the JSON response
    return JSON.parse(cleanedJson);
  } catch (error) {
    // Handle rate limiting
    if (error.status === 429) {
      console.warn("Gemini API: Rate limit reached.");
      throw new Error("API rate limit exceeded");
    }

    // Handle service unavailability
    if (error.status === 503) {
      console.warn("Gemini API: Service temporarily unavailable.");
      throw new Error("API service unavailable");
    }

    // Handle JSON parsing errors
    if (error instanceof SyntaxError) {
      console.error("Gemini API: Invalid JSON response");
      throw new Error("Invalid API response format");
    }

    // Handle all other errors
    console.error("Gemini API Error:", error.message);
    throw error;
  }
};

module.exports = calculateSentimentAI;
