import moment from "moment";

/**
 * Calculates relative time using Moment.js
 * @param {string|Date} date - The date string from your API
 * @returns {string} - e.g., "3 hours ago"
 */
export const getTimeAgo = (date) => {
  return moment(date).fromNow();
};
