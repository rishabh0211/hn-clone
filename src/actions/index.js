import * as actionsTypes from "../constants/actionsTypes";

export const getData = (payload) => {
  return { type: actionsTypes.GET_DATA, payload };
};