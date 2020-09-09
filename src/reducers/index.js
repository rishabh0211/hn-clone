import * as actionsTypes from "../constants/actionsTypes";

const initialState = {
  news: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypes.GET_DATA:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};