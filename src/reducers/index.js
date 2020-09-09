import * as actionsTypes from "../constants/actionsTypes";

const initialState = {
  storyIds: [],
  stories: [],
  isLoading: false,
  error: '',
  page: 0
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
    default:
      return state;
  }
};