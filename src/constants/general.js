export const LINK_REL = "nofollow noreferrer noopener";
export const USER_HREF = `https://news.ycombinator.com/user?id=`;
export const TABS = {
  TOP_STORIES: "TOP_STORIES",
  NEWEST_STORIES: "NEWEST_STORIES"
};

export const API_URL = "https://hacker-news.firebaseio.com/v0";
export const API_QUERY = ".json?print=pretty";

export const NEWS_LIMIT = 20;

// API ENDPOINTS
export const apiEndpoints = {
  API_FETCH_TOPSTORY_IDS: `${API_URL}/topstories${API_QUERY}`,
  API_FETCH_TOPSTORY: `${API_URL}/topstories${API_QUERY}`
};