import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/reducer";
import { productReducer } from "./Product/reducer";
import { cartReducer } from "./Cart/reducer";
import { orderReducer } from "./Order/reducer";
import { reviewAndRatingReducer } from "./ReviewAndRating/reducer";
import { categoryReducer } from "./Category/reducer";
import { addressReducer } from "./Address/reducer";

const rootReducers = combineReducers({
  auth: authReducer,
  product: productReducer,
  category: categoryReducer,
  cart: cartReducer,
  order: orderReducer,
  reviewAndRating: reviewAndRatingReducer,
  address: addressReducer,
});
export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
