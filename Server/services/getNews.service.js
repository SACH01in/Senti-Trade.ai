require("dotenv").config();

/**
 * Calculates a date string for a specific number of days in the past.
 * @param {number} daysBack - The number of days to subtract from today.
 * @returns {string} The date in 'YYYY-MM-DD' format.
 */
const getPastDate = (daysBack) => {
  const date = new Date();
  date.setDate(date.getDate() - daysBack);
  return date.toISOString().split("T")[0];
};

/**
 * Fetches news articles for a given topic from the NewsAPI.
 * * @async
 * @function getNewsService()
 * @param {string} topic - The asset or subject to search for (e.g., "Nvidia").
 * @returns {Promise<Array<{source: string, title: string, description: string, url: string, publishedAt: string}>>}
 * A promise that resolves to an array of sanitized article objects,
 * or an array containing an error message if the fetch fails.
 */
const getNewsService = async (topic) => {
  try {
    const URL = `${process.env.News_API}${topic}&from=${getPastDate(20)}&sortBy=publishedAt&apiKey=${process.env.News_API_Key}`;
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.status !== "ok") {
      throw new Error(`NewsAPI Error: ${data.message || "Unknown error"}`);
    }

    const newsData = (data?.articles || []).map(
      ({ source, title, description, url, publishedAt }) => ({
        source: source?.name || "Unknown",
        title,
        description,
        url,
        publishedAt,
      }),
    );

    return newsData;
  } catch (error) {
    console.error("NewsAPI Error:", error);
    return ["error in fetching news"];
  }
};

module.exports = getNewsService;
