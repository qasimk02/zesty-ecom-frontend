import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/reducer";
import { productReducer } from "./Product/reducer";
import { cartReducer } from "./Cart/reducer";
import { orderReducer } from "./Order/reducer";

const rootReducers = combineReducers({
  auth: authReducer,
  product: productReducer,
  cart: cartReducer,
  order: orderReducer,
});
export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
