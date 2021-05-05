import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.ALL_PRODUCTS,
    payload: products,
  };
};
