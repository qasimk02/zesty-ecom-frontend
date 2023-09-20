import {
  ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from "./actionType";

const initialState = {
  cart: null,
  isLoading: true,
  error: null,
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    //add item to cart
    case ADD_ITEM_TO_CART_REQUEST:
      return { ...state, isLoading: true, error: null };
    case ADD_ITEM_TO_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        cart: action.payload,
        cartItems: [...state.cartItems, action.payload.cartItems],
      };
    case ADD_ITEM_TO_CART_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    //get cart
    case GET_CART_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GET_CART_SUCCESS:
      const cartItems = action.payload.cartItems
        .slice()
        .sort((a, b) => -(a.cartItemId - b.cartItemId));
      return {
        ...state,
        isLoading: false,
        erro: null,
        cart: action.payload,
        cartItems: cartItems,
      };
    case GET_CART_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    //update cart item
    //remove cart item
    case UPDATE_CART_ITEM_REQUEST:
    case REMOVE_CART_ITEM_REQUEST:
      return { ...state, isLoading: true, error: null };
    case UPDATE_CART_ITEM_SUCCESS:
      const sortedCartItems = action.payload.cartItems
        .slice()
        .sort((a, b) => -(a.cartItemId - b.cartItemId));
      return {
        ...state,
        laoding: false,
        error: null,
        cart: action.payload,
        cartItems: sortedCartItems,
      };
    case REMOVE_CART_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        cartItems: state.cartItems.filter(
          (item) => item.cartItemId !== action.payload.id
        ),
      };
    case UPDATE_CART_ITEM_FAILURE:
    case REMOVE_CART_ITEM_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};
