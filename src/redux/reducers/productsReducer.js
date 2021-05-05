import { ActionTypes } from "../constants/action-types";

const intialState = {
  data: [],
};

export const allProductsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ALL_PRODUCTS:
      return { ...state, data: payload };
    default:
      return state;
  }
};


