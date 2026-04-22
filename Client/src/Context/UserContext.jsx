import React, { createContext, useContext, useState, useEffect } from "react";
import {
  calculateNetSentiment,
  calculateDistribution,
} from "../utils/calculationLogics.js";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [prevTopic, setprevTopic] = useState("");
  const [seenNews, setSeenNews] = useState([]);
  const [newNews, setNewNews] = useState([]);
  const [sentimentData, setSentimentData] = useState({ score: 0, weight: 0 });
  const [distributionData, setDistributionData] = useState({});
  const [AIinsight, setAIinsight] = useState("");
  const [hotTopic, setHotTopic] = useState([]);
  const [error, setError] = useState("");

  /**
   * Processes fetched news data and updates all related state.
   * Separates articles into new (0-5) and seen (5+), calculates metrics.
   *
   * @function updateStateWithData
   * @param {Array<Object>} data - Array of news articles with sentiment scores
   * @param {Object} [AI_insight] - AI analysis object with insight, topTopics
   * @returns {void}
   */
  const updateStateWithData = (data, AI_insight) => {
    // Sort articles by date (newest first)
    const sortedData = [...data].sort((a, b) => {
      const dateA = new Date(a.publishedAt || 0);
      const dateB = new Date(b.publishedAt || 0);
      return dateB - dateA;
    });

    // Split into new (for carousel) and seen (for main display)
    const initialNew = sortedData.slice(0, 5);
    const initialSeen = sortedData.slice(5);

    // Update UI state
    setNewNews(initialNew);
    setSeenNews(initialSeen);

    // Calculate aggregate sentiment metrics
    setSentimentData(calculateNetSentiment(initialSeen));
    setDistributionData(calculateDistribution(initialSeen));

    // Update AI insights and topics
    if (AI_insight) {
      setAIinsight(AI_insight.insight);
      setHotTopic([...AI_insight.topTopics]);
    }
  };

  /**
   * Fetches news and sentiment data for a given topic from backend.
   * Resets state before fetching to prevent stale data display.
   *
   * @async
   * @function handleGetData
   * @param {string} topic - Stock symbol or news topic (e.g., "Tesla", "Apple")
   * @returns {Promise<void>}
   * @throws Sets error state if fetch or processing fails
   */
  const handleGetData = async (topic) => {
    try {
      // Clear previous search data
      setNewNews([]);
      setSeenNews([]);
      setSentimentData({ score: 0, weight: 0 });
      setDistributionData({});
      setAIinsight("");
      setHotTopic([]);
      setError("");

      // Fetch sentiment and news data
      const endpoint = `${import.meta.env.VITE_SERVER_URL}/api/sentiment/getData`;
      console.log(import.meta.env.VITE_SERVER_URL)
      const response = await axios.post(endpoint, { topic });

      const { newsData, rawData } = response.data;

      // Validate response has articles
      if (!newsData || newsData.length === 0) {
        setError("No news articles found for this topic");
        return;
      }

      // Attach sentiment scores to each article
      const data = newsData.map((item, index) => ({
        ...item,
        sentiment: rawData?.sentimentData[index]?.sentiment,
      }));

      // Update state with processed data
      updateStateWithData(data, rawData?.aditionAIDATA);
      setprevTopic(topic);
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      setError(`Failed to fetch data: ${errorMessage}`);
    }
  };

  /**
   * Rotates news carousel by moving first new article to seen list.
   * Called every 10 seconds to create rotating news effect.
   * Updates sentiment metrics after each shift.
   *
   * @function shiftNewsToSeen
   * @returns {void}
   */
  const shiftNewsToSeen = () => {
    setNewNews((prevNew) => {
      if (prevNew.length === 0) return prevNew;

      const [itemToShift, ...remainingNew] = prevNew;

      setSeenNews((prevSeen) => {
        const updatedSeen = [itemToShift, ...prevSeen];

        // Recalculate metrics with new article
        if (updatedSeen.length > 0) {
          setSentimentData(calculateNetSentiment(updatedSeen));
          setDistributionData(calculateDistribution(updatedSeen));
        }

        return updatedSeen;
      });

      return remainingNew;
    });
  };

  return (
    <UserContext.Provider
      value={{
        seenNews,
        newNews,
        handleGetData,
        shiftNewsToSeen,
        sentimentData,
        distributionData,
        AIinsight,
        hotTopic,
        error,
        setError,
        prevTopic,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

/**
 * React Hook to access user context (news, sentiment, AI data).
 * Must be used within UserProvider component.
 *
 * @function useUser
 * @returns {Object} Context object with all state and functions
 * @throws Error if used outside UserProvider
 */
export const useUser = () => useContext(UserContext);
