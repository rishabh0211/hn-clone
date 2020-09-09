import * as actionsTypes from "../constants/actionsTypes";
import { apiEndpoints, NEWS_LIMIT, API_QUERY, API_URL } from "../constants/general";
import axios from "axios";

const getActionObj = (type, payload) => ({ type, payload });

export const fetchStoryIds = (payload = {}) => {
  return (dispatch) => {
    dispatch(getActionObj(actionsTypes.FETCH_STORY_IDS_REQUEST));
    return fetch(apiEndpoints.API_FETCH_TOPSTORY_IDS)
      .then(res => res.json())
      .then(storyIds => {
        dispatch(getActionObj(actionsTypes.FETCH_STORY_IDS_SUCCESS, { storyIds }));
        dispatch(fetchStories({ storyIds, page: 0 }));
      });
  };
};

export const fetchStories = ({ storyIds, page } = {}) => {
  return dispatch => {
    dispatch(getActionObj(actionsTypes.FETCH_STORIES_REQUEST));
    let start = NEWS_LIMIT * page;
    let end = NEWS_LIMIT * (page + 1);
    let ids = storyIds.slice(start, end);
    let storyApis = ids.map(id => axios.get(getStoryItemApiUrl(id)));
    return Promise.all(storyApis)
      .then(res => res.map(item => item.data))
      .then(stories => {
        dispatch(getActionObj(actionsTypes.FETCH_STORIES_SUCCESS, { stories }));
      });
  };
};

const getStoryItemApiUrl = id => `${API_URL}/item/${id}${API_QUERY}`;