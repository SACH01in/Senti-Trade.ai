/**
 * Extracts top financial keywords from news headlines.
 * Filters relevant financial terminology and counts frequency.
 *
 * @function getTopFinancialTopics
 * @param {Array<Object>} newsData - Array of news articles
 * @param {string} newsData[].title - Article headline to analyze
 * @returns {Array<string>} Top 10 most frequent financial keywords found in headlines
 */
const getTopFinancialTopics = (newsData) => {
  const financialWords = [
    "profit",
    "growth",
    "beat",
    "dividend",
    "bullish",
    "surge",
    "rally",
    "uptrend",
    "acquisition",
    "innovation",
    "buy",
    "upgrade",
    "strong",
    "surpass",
    "upside",
    "positive",
    "exceed",
    "record",
    "expansion",
    "gain",
    "recovery",
    "outperform",
    "thrive",
    "boost",
    "buyback",
    "profitable",
    "revenue",
    "solid",
    "momentum",
    "partnership",
    "breakout",
    "soar",
    "skyrocket",
    "moon",
    "loss",
    "deficit",
    "layoff",
    "sued",
    "bankruptcy",
    "downgrade",
    "recession",
    "inflation",
    "bearish",
    "plummet",
    "weak",
    "crisis",
    "sell",
    "decline",
    "risk",
    "slump",
    "crash",
    "caution",
    "volatile",
    "underperform",
    "struggle",
    "debt",
    "hit",
    "downside",
    "fear",
    "drop",
    "cut",
    "missing",
    "investigation",
    "fraud",
    "scandal",
    "panic",
    "plunge",
    "short",
    "stagnant",
    "pressure",
    "scrutiny",
    "awaiting",
    "pending",
    "watch",
    "guidance",
    "forecast",
  ];

  const stopWords = new Set([
    "the",
    "a",
    "an",
    "and",
    "or",
    "but",
    "is",
    "are",
    "in",
    "on",
    "of",
    "to",
    "for",
    "with",
    "as",
    "by",
    "at",
  ]);
  const counts = {};

  newsData.forEach((item) => {
    const words = item.title.toLowerCase().match(/\b(\w+)\b/g) || [];
    words.forEach((word) => {
      if (financialWords.includes(word) && !stopWords.has(word)) {
        counts[word] = (counts[word] || 0) + 1;
      }
    });
  });

  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map((entry) => entry[0]);
};

/**
 * Calculates sentiment for news articles using a lexicon-based approach.
 * Fallback method when AI sentiment analysis is unavailable.
 *
 * @function calculateSentimentLocalService
 * @param {Array<Object>} newsData - Array of news articles to analyze
 * @param {string} newsData[].title - Article headline
 * @param {string} [newsData[].description] - Article description/summary
 * @returns {Object} Sentiment analysis with sentimentData and aditionAIDATA
 *
 * @description
 * Uses an expanded financial lexicon with sentiment scores from -1.0 to +1.0
 * Algorithm: Extract words → Match against lexicon → Average sentiment scores
 * Sentiment Range: -1.0 (Highly Bearish) to +1.0 (Highly Bullish)
 */
function calculateSentimentLocalService(newsData) {
  // Expanded financial/geopolitical lexicon
  const lexicon = {
    // --- HIGH IMPACT BULLISH ---
    soar: 1.0,
    skyrocket: 1.0,
    breakout: 1.0,
    profit: 0.9,
    surge: 0.9,
    record: 0.9,
    bullish: 0.9,
    growth: 0.8,
    rally: 0.8,
    rebound: 0.8,
    outperform: 0.8,
    jump: 0.7,
    gain: 0.7,
    buy: 0.6,
    strong: 0.6,
    better: 0.7,
    new: 0.8,
    advanced: 0.9,
    accelerate: 0.9,
    increase: 0.9,
    launch: 0.7,
    fast: 0.8,
    Sale: 0.7,
    help: 0.6,
    custom: 0.4,

    // --- HIGH IMPACT BEARISH ---
    war: -1.0,
    conflict: -1.0,
    plummet: -1.0,
    bankruptcy: -1.0,
    crash: -1.0,
    fraud: -1.0,
    collapse: -1.0,
    strait: -0.9,
    hormuz: -0.9,
    bearish: -0.9,
    standoff: -0.8,
    pressure: -0.8,
    underperform: -0.8,
    rattle: -0.7,
    spooks: -0.7,
    turmoil: -0.7,
    volatile: -0.7,
    tension: -0.7,
    drop: -0.6,
    risk: -0.5,
    end: -0.5,
    decrease: -0.9,
    threat: -1.0,
    penalty: -0.9,
    impact: -0.5,
    slow: -0.8,
    replacement: -0.9,
    stepdown: -0.9,
    down: -0.7,
    deleted: -0.5,
    scrutiny: -0.4,
    Loses: -0.8,

    // --- LOW IMPACT / CONTEXTUAL ---
    dividend: 0.3,
    results: 0.2,
    outlook: 0.2,
    consensus: 0.2,
    trading: 0.1,
    sector: 0.1,
    indices: 0.1,
    capital: 0.1,
    investment: 0.1,
    flat: -0.1,
    mixed: -0.1,
    uncertainty: -0.3,
    struggle: -0.3,
    stagnant: -0.3,
    weak: -0.3,
  };

  let allKeywords = [];

  const sentimentData = newsData.map((item, index) => {
    const fullText = `${item.title} ${item.description || ""}`.toLowerCase();
    const words = fullText.match(/\b(\w+)\b/g) || [];

    // Find all matching words
    const matches = words.filter((w) => lexicon[w]);

    // Calculate Score
    let score = 0;
    if (matches.length > 0) {
      allKeywords.push(...matches);
      // Average the sentiment of all found words
      score = matches.reduce((sum, w) => sum + lexicon[w], 0) / matches.length;
    } else {
      // Only use neutral bias if NO words are found
      score = 0.0;
    }

    return { index, sentiment: parseFloat(score.toFixed(2)) };
  });

  // Aggregation for AI Data
  const avg =
    sentimentData.reduce((acc, curr) => acc + curr.sentiment, 0) /
    newsData.length;

  return {
    sentimentData: sentimentData,
    aditionAIDATA: {
      insight:
        avg > 0.2
          ? "Market shows positive momentum with accumulation."
          : avg < -0.2
            ? "Market showing signs of distribution and risk-off behavior."
            : "Market is in a consolidation phase with mixed signals.",
      signalStrength:
        avg > 0.4
          ? "Strong Buy"
          : avg > 0
            ? "Buy"
            : avg < -0.4
              ? "Strong Sell"
              : "Sell",
      topTopics: [...new Set(allKeywords)].slice(0, 10),
    },
  };
}

module.exports = calculateSentimentLocalService;
