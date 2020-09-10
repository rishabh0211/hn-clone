import * as actionsTypes from "../constants/actionsTypes";
import { TABS } from "../constants/general";

const initialState = {
  storyIds: [],
  stories: [],
  isLoading: false,
  error: '',
  page: 0,
  activeTab: TABS.TOP_STORIES,
  user: {},
  isLoadingUser: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypes.FETCH_STORY_IDS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case actionsTypes.FETCH_STORY_IDS_SUCCESS:
      return {
        ...state,
        ...payload,
        isLoading: false
      };
    case actionsTypes.FETCH_STORIES_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case actionsTypes.FETCH_STORIES_SUCCESS: 
      return {
        ...state,
        stories: [...state.stories, ...payload.stories],
        page: state.page + 1,
        isLoading: false
      }
    case actionsTypes.FETCH_USER_REQUEST:
      return {
        ...state,
        storyIds: [],
        stories: [],
        page: 0,
        isLoadingUser: true
      };
    case actionsTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        isLoadingUser: false,
        user: payload.userData
      };
    case actionsTypes.TAB_CHANGE_START:
      return {
        ...state,
        storyIds: [],
        stories: [],
        page: 0,
        isLoading: true,
        activeTab: payload.tab
      }
    default:
      return state;
  }
};