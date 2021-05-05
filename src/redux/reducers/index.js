import { combineReducers } from "redux";
import { allProductsReducer } from "./productsReducer";
const reducers = combineReducers({
  allProducts: allProductsReducer,
  //product: selectedProductsReducer,
});
export default reducers;
