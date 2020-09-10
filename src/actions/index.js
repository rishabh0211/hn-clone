import * as actionsTypes from "../constants/actionsTypes";
import { NEWS_LIMIT, API_QUERY, API_URL, TABS } from "../constants/general";
import axios from "axios";

const getActionObj = (type, payload) => ({ type, payload });

export const fetchStoryIds = tab => {
  return (dispatch) => {
    dispatch(getActionObj(actionsTypes.FETCH_STORY_IDS_REQUEST));
    const apiEndpoint = getApiEndpoint(tab);
    return fetch(apiEndpoint)
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

export const fetchUserDetails = (userId) => {
  return dispatch => {
    dispatch(getActionObj(actionsTypes.FETCH_USER_REQUEST));
    return fetch(`${API_URL}/user/${userId}${API_QUERY}`)
      .then(res => res.json())
      .then(userData => {
        dispatch(getActionObj(actionsTypes.FETCH_USER_SUCCESS, { userData }));
      });
  };
};

export const onTabChange = tab => {
  return dispatch => {
    dispatch(getActionObj(actionsTypes.TAB_CHANGE_START, { tab }));
    dispatch(fetchStoryIds(tab));
  };
};

const getStoryItemApiUrl = id => `${API_URL}/item/${id}${API_QUERY}`;

const getApiEndpoint = tab => {
  return `${API_URL}/${tab}${API_QUERY}`;
};