/**
 * Determines sentiment weight based on article headline keywords.
 * Identifies high-impact financial terms that affect market sentiment.
 *
 * @function getWeight
 * @param {string} title - Article headline to analyze
 * @returns {number} Weight multiplier: 3 for high-impact keywords, 1 otherwise
 * @description
 * High-impact keywords: Fed, Oil, War, Earnings, Inflation
 * These terms have significant market influence and receive 3x weight
 */
const getWeight = (title) =>
  /Fed|Oil|War|Earnings|Inflation/i.test(title) ? 3 : 1;

/**
 * Calculates aggregate market sentiment on a 0-100 scale.
 * Applies time decay and keyword weighting to individual sentiments.
 *
 * @function calculateNetSentiment
 * @param {Array<Object>} newsList - Array of news articles with sentiment scores
 * @param {number} newsList[].sentiment - Article sentiment (-1.0 to +1.0)
 * @param {string} newsList[].publishedAt - ISO timestamp of publication
 * @returns {Object} {score: number (0-100), weight: number}
 *
 * @description
 * Algorithm:
 * 1. Weight calculation: timeWeight × impactWeight
 *    - timeWeight: 2x if < 4 hours old, else 1x (recent news more important)
 *    - impactWeight: 3x if high-impact keywords, else 1x
 * 2. Weighted average: Σ(sentiment × weight) / Σ(weight)
 * 3. Scale conversion: ((average + 1) × 50) converts -1...+1 to 0...100
 *
 * Examples:
 * - All bullish (+1.0) sentiments → score: 100
 * - All bearish (-1.0) sentiments → score: 0
 * - Mixed neutral sentiments → score: 50
 */
export const calculateNetSentiment = (newsList) => {
  if (!newsList || newsList.length === 0) return { score: 50, weight: 0 };

  const now = new Date();
  let totalWeightedScore = 0;
  let totalWeight = 0;

  newsList.forEach((article) => {
    const hoursOld = (now - new Date(article.publishedAt)) / 3600000;
    const timeWeight = hoursOld < 4 ? 2 : 1;
    const impactWeight = getWeight(article.title);
    const finalWeight = timeWeight * impactWeight;

    totalWeightedScore += article.sentiment * finalWeight;
    totalWeight += finalWeight;
  });

  const average = totalWeightedScore / totalWeight;

  return {
    score: parseFloat(((average + 1) * 50).toFixed(1)),
    weight: totalWeight / newsList.length,
  };
};

/**
 * Incremental sentiment update for real-time news rotation.
 * Used when new articles are added to the sentiment calculation.
 *
 * @function updateRunningSentiment
 * @param {Object} currentStats - Current sentiment calculation
 * @param {number} currentStats.score - Current weighted sum
 * @param {number} currentStats.weight - Current weight sum
 * @param {Object} article - New article to add
 * @param {number} article.sentiment - Article sentiment (-1.0 to +1.0)
 * @param {string} article.title - Article headline
 * @returns {Object} {score, weight, finalResult (0-100 scale)}
 *
 * @description Note: timeWeight is hardcoded to 1 for incremental calculations
 */
export const updateRunningSentiment = (currentStats, article) => {
  const impactWeight = getWeight(article.title);
  const finalWeight = impactWeight;

  const newRunningScore = currentStats.score + article.sentiment * finalWeight;
  const newRunningWeight = currentStats.weight + finalWeight;

  return {
    score: newRunningScore,
    weight: newRunningWeight,
    finalResult: (newRunningScore / newRunningWeight + 1) * 50,
  };
};

/**
 * Calculates sentiment distribution percentages.
 * Categorizes articles into Bullish, Neutral, or Bearish buckets.
 *
 * @function calculateDistribution
 * @param {Array<Object>} newsList - Array of news articles with sentiment scores
 * @param {number} newsList[].sentiment - Article sentiment (-1.0 to +1.0)
 * @param {string} newsList[].title - Article headline
 * @returns {Object} Distribution data with counts, percentages, and weights
 *
 * @description
 * Categorization thresholds:
 * - Bullish: sentiment > 0.1
 * - Bearish: sentiment < -0.1
 * - Neutral: -0.1 ≤ sentiment ≤ 0.1
 * Each category weighted by keyword impact (3x for high-impact, 1x otherwise)
 *
 * Returns:
 * - bullish, bearish, neutral: weighted counts
 * - bullishPercent, bearishPercent, neutralPercent: percentage of total
 * - totalWeight: sum of all weights
 */
export const calculateDistribution = (newsList) => {
  let bullish = 0,
    bearish = 0,
    neutral = 0;
  let totalWeight = 0;

  for (const item of newsList) {
    const weight = getWeight(item.title);
    totalWeight += weight;

    if (item.sentiment > 0.1) bullish += weight;
    else if (item.sentiment < -0.1) bearish += weight;
    else neutral += weight;
  }

  return {
    bullish,
    bearish,
    neutral,
    totalWeight,
    bullishPercent: totalWeight
      ? ((bullish / totalWeight) * 100).toFixed(0)
      : 0,
    bearishPercent: totalWeight
      ? ((bearish / totalWeight) * 100).toFixed(0)
      : 0,
    neutralPercent: totalWeight
      ? ((neutral / totalWeight) * 100).toFixed(0)
      : 0,
  };
};

/**
 * Incremental distribution update for real-time news rotation.
 * Updates percentages when new articles enter the seen list.
 *
 * @function updateDistributionWithNewNews
 * @param {Object} currentStats - Current distribution state
 * @param {Object} newNewsItem - New article to add
 * @param {number} newNewsItem.sentiment - Article sentiment (-1.0 to +1.0)
 * @param {string} newNewsItem.title - Article headline
 * @returns {Object} Updated distribution with new percentages
 */
export const updateDistributionWithNewNews = (currentStats, newNewsItem) => {
  const weight = getWeight(newNewsItem.title);
  const updated = { ...currentStats };

  if (newNewsItem.sentiment > 0.1) updated.bullish += weight;
  else if (newNewsItem.sentiment < -0.1) updated.bearish += weight;
  else updated.neutral += weight;

  updated.totalWeight += weight;

  return {
    ...updated,
    bullishPercent: ((updated.bullish / updated.totalWeight) * 100).toFixed(0),
    bearishPercent: ((updated.bearish / updated.totalWeight) * 100).toFixed(0),
    neutralPercent: ((updated.neutral / updated.totalWeight) * 100).toFixed(0),
  };
};
