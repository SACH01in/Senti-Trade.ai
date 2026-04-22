import React from "react";
import { motion } from "framer-motion";
import { getTimeAgo } from "../utils/momentCalculate";

/**
 * Displays a single news article card with sentiment indicators.
 * Shows visual cues (color, badge) based on sentiment analysis.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.news - News article data
 * @param {string} props.news.source - News source (e.g., "Reuters", "BBC")
 * @param {string} props.news.title - Article headline
 * @param {number} props.news.sentiment - Sentiment score (-1.0 to +1.0)
 * @param {boolean} [props.isNew] - Whether this is a newly rotated article
 * @returns {React.ReactElement} Styled news card component
 *
 * @description
 * Visual Design:
 * - NEW badge (cyan): Applied when article just rotated into view
 * - Sentiment badge: "BULLISH" (green) if sentiment >= 0, "BEARISH" (red) if < 0
 * - Border color: Green glow for bullish, red glow for bearish
 * - Hover effect: Text brightens on hover
 *
 * Colors:
 * - Bullish: Green (#22c55e) with 30% opacity
 * - Bearish: Red (#ef4444) with 30% opacity
 * - New: Cyan (#06b6d4) with 50% opacity
 */
const NewsCard = ({ news, isNew }) => {
  // Determine sentiment polarity (positive or negative)
  const isBullish = news.sentiment >= 0;

  // Sentiment-based styling
  const sentimentBorder = isBullish
    ? "border-green-500/30"
    : "border-red-500/30";
  const sentimentGlow = isBullish
    ? "shadow-[0_0_15px_rgba(34,197,94,0.1)]"
    : "shadow-[0_0_15px_rgba(239,68,68,0.1)]";
  const sentimentText = isBullish ? "text-green-400" : "text-red-400";
  const sentimentBg = isBullish ? "bg-green-900/10" : "bg-red-900/10";

  return (
    <motion.div
      className={`group relative p-4 rounded-xl border backdrop-blur-md transition-all duration-300
        ${isNew ? "border-cyan-500/50 bg-cyan-900/5" : `bg-white/[0.02] ${sentimentBorder}`}
        ${sentimentGlow}
      `}
    >
      {/* Header: Source, Timestamp, and NEW Badge */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {/* Source Avatar */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 flex items-center justify-center font-bold text-xs text-cyan-400 shadow-inner">
            {news.source.charAt(0).toUpperCase()}
          </div>
          {/* Source Name & Time */}
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-zinc-300 tracking-wide">
              {news.source}
            </span>
            <span className="text-[9px] text-zinc-500 font-mono">
              {getTimeAgo(news.publishedAt)}
            </span>
          </div>
        </div>

        {/* Dynamic Sentiment Pill & New Badge */}
        <div className="flex items-center gap-2">
          {isNew && (
            <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-cyan-500 text-black uppercase tracking-wider">
              NEW
            </span>
          )}
          {/* Sentiment Badge */}
          <div
            className={`px-2 py-0.5 rounded-full text-[9px] font-bold border ${sentimentBorder} ${sentimentBg} ${sentimentText}`}
          >
            {isBullish ? "BULLISH" : "BEARISH"}
          </div>
        </div>
      </div>

      {/* Article Headline */}
      <p className="text-sm text-zinc-200 leading-snug font-medium mb-3 group-hover:text-white transition-colors">
        {news.title}
      </p>
    </motion.div>
  );
};

export default NewsCard;
