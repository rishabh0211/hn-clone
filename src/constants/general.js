export const LINK_REF = "nofollow noreferrer noopener";

export const API_URL = "https://hacker-news.firebaseio.com/v0";
export const API_QUERY = ".json?print=pretty";

export const NEWS_LIMIT = 20;

// API ENDPOINTS
export const apiEndpoints = {
  API_FETCH_STORY_IDS: `${API_URL}/topstories${API_QUERY}`,
  API_FETCH_STORY: `${API_URL}/topstories${API_QUERY}`
};