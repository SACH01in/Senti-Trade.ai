import React, { useState, useEffect } from "react";
import { useUser } from "../Context/UserContext";
import NewsList from "./NewsList";
import { LuSearch } from "react-icons/lu";
import { GrGenai } from "react-icons/gr";
import SentiTradePulse from "./SentiTradePulse";
import EmptyState from "./EmptyState";
import TradingViewWidget from "./TradingViewWidget";
import SentimentChart from "./SentimentChart";
import SentimentChartSkeleton from "./SentimentChartSkeleton";

import { LuRadioTower } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";

/**
 * Main dashboard component for Senti-Trade.ai application.
 * Displays real-time market sentiment analysis with news feed.
 *
 * @component
 * @returns {React.ReactElement} Full-screen dashboard UI
 *
 * @description
 * Layout (12-column grid):
 * - Left (8 cols): Sentiment gauge, distribution chart, trading view
 * - Right (4 cols): News feed, AI insights, hot topics
 *
 * Features:
 * - Search: Find stocks/topics
 * - Loading states: Skeleton screens during fetch
 * - Error handling: Red banner for failures
 * - Auto-rotate: News carousel every 10 seconds
 * - Sentiment visualization: Gauge (0-100), pie chart
 */
const Dashboard = () => {
  const {
    seenNews,
    handleGetData,
    sentimentData,
    shiftNewsToSeen,
    distributionData,
    AIinsight,
    hotTopic,
    error,
    setError,
  } = useUser();

  const sentimentChartData = {
    labels: ["Bullish", "Neutral", "Bearish"],
    values: [
      distributionData.bullish,
      distributionData.neutral,
      distributionData.bearish,
    ],
  };

  // State management
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      shiftNewsToSeen();
    }, 10000); // Shifts a new article every 10 seconds
    return () => clearInterval(interval);
  }, [shiftNewsToSeen]);

  /**
   * Handles search form submission.
   * Triggers data fetch and sets loading state.
   *
   * @async
   * @function handleSearch
   * @param {Event} e - Form submission event
   * @returns {Promise<void>}
   */
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!topic) return;

    setLoading(true);
    try {
      await handleGetData(topic);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen bg-black text-white p-6 grid grid-cols-12 gap-4 overflow-hidden">
      {/* --- Main Area --- */}
      <div className="col-span-8 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-cyan-500">SENTI</span>-TRADE
            <span className="text-cyan-500">.AI</span>
          </h1>
          <div className="w-96 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-600 overflow-hidden">
            <form
              className="flex justify-between items-center"
              onSubmit={handleSearch}
            >
              <input
                type="text"
                placeholder="Search stocks eg: Nvidia."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full h-full px-3 py-2 outline-none border-none text-sm text-zinc-200"
              />
              <button
                type="submit"
                className="w-12 h-10 flex justify-center items-center text-xl bg-zinc-800 text-cyan-500"
              >
                <LuSearch />
              </button>
            </form>
          </div>
        </div>

        {/* Error Message Display */}
        {error && (
          <div className="w-full p-3 bg-red-900/30 border border-red-500/50 rounded-lg text-red-300 text-sm flex items-center justify-between">
            <span>{error}</span>
            <button
              onClick={() => setError("")}
              className="text-red-400 hover:text-red-300"
            >
              ✕
            </button>
          </div>
        )}

        {/* Gauge Section */}
        <div className="flex-1 flex items-center gap-4 justify-center">
          <div className="w-3/5 h-full flex flex-col items-center bg-zinc-900/50 border border-zinc-800/50 rounded-xl overflow-hidden">
            <SentiTradePulse
              value={sentimentData?.score}
              isLoading={loading}
              assetName={topic || "No data searched"}
              isSearched={seenNews.length > 0 || loading ? true : false}
            />
          </div>
          <div className="w-2/5 h-full flex flex-col items-center justify-center p-5 bg-zinc-900/50 border border-zinc-800/50 rounded-xl">
            <h3 className="text-cyan-400 text-xl font-bold capitalize mb-5">
              Market Sentiment
            </h3>
            {loading ? (
              <SentimentChartSkeleton />
            ) : seenNews.length > 0 && topic ? (
              <SentimentChart chartData={sentimentChartData} />
            ) : (
              <EmptyState
                icon={LuRadioTower}
                color={"green"}
                title={"Standby Mode"}
                description={
                  "Monitoring active feeds... Waiting for initial market data."
                }
              />
            )}
          </div>
        </div>

        {/* Bottom Chart Placeholder */}
        <div className="h-60 bg-zinc-900/50 border border-zinc-800/50 rounded-xl flex items-center justify-center overflow-hidden">
          <TradingViewWidget symbol={topic} />
        </div>
      </div>

      {/* --- Right Column: News Feeds --- */}
      <div className="col-span-4 flex h-full flex-col items-center gap-4 overflow-hidden">
        <div className="flex-1 w-full h-full bg-zinc-900/50 border p-5 border-zinc-200/50 rounded-xl flex flex-col overflow-hidden">
          <div className="flex justify-between mb-4 items-center">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">
              Live Vibe Feed
            </h2>
            <span className="text-zinc-600 text-xs">
              <strong>{seenNews.length}</strong> items.
            </span>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto pr-2 h-full relative">
            <div className="flex-1 overflow-hidden">
              {(seenNews.length > 0 || loading) && topic ? (
                <NewsList news={seenNews} isLoading={loading} />
              ) : (
                <div className={"w-full absolute flex-1 h-full"}>
                  <EmptyState
                    icon={CiSearch}
                    color={"cyan"}
                    title={"Search a topic!"}
                    description={"NO Live News to show now"}
                    className={"h-full w-full"}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="relative w-[95%] h-25 bg-zinc-900/50 border-3 shadow shadow-[0_0_10px_2px_blue] shadow-blue-500/80 border-blue-500 rounded-xl p-5 overflow-hidden">
          <h2 className="text-sm font-semibold text-white mb-2 uppercase tracking-wider">
            AI Summary :
          </h2>
          <div className="absolute top-[20%] text-3xl text-yellow-400 right-[10%]">
            <GrGenai />
          </div>
          <div className="text-zinc-500 text-xMD">
            {loading
              ? "Analyzing....."
              : AIinsight
                ? AIinsight
                : "to get better insight searh for it...."}
          </div>
        </div>

        {topic && hotTopic.length != 0 ? (
          <div className="h-32 w-full bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-5 overflow-hidden">
            <h2 className="text-sm font-semibold text-white mb-2 uppercase tracking-wider">
              Highlighted Topics
            </h2>
            <div className={`flex gap-2 flex-wrap items-center`}>
              {hotTopic.map((item, indx) => (
                <span
                  className={`px-2 py-1/2  gap-3 rounded-md bg-purple-500/50`}
                  key={indx}
                >
                  #{item}
                </span>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Dashboard;
