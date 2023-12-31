import {
  CREATE_PRODUCT_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_SUCCESS,
  FIND_PRODUCTS_BY_CATEGORY_FAILURE,
  FIND_PRODUCTS_BY_CATEGORY_REQUEST,
  FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
} from "./actionType";
import { api } from "../../../config/apiConfig";
import { toast } from "react-toastify";

//GET all products
const findPrdouctsRequest = () => ({ type: FIND_PRODUCTS_REQUEST });
const findPrdouctsSuccess = (data) => ({
  type: FIND_PRODUCTS_SUCCESS,
  payload: data,
});
const findPrdouctsFailure = (error) => ({
  type: FIND_PRODUCTS_FAILURE,
  payload: error,
});

//GET product by id
const findPrdouctByIdRequest = () => ({ type: FIND_PRODUCT_BY_ID_REQUEST });
const findPrdouctByIdSuccess = (data) => ({
  type: FIND_PRODUCT_BY_ID_SUCCESS,
  payload: data,
});
const findPrdouctByIdFailure = (error) => ({
  type: FIND_PRODUCT_BY_ID_FAILURE,
  payload: error,
});

//GET product by category
const findProductsByCategoryRequest = () => ({
  type: FIND_PRODUCTS_BY_CATEGORY_REQUEST,
});
const findProductsByCategorySuccess = (data) => ({
  type: FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
  payload: data,
});
const findProductsByCategoryFailure = (error) => ({
  type: FIND_PRODUCTS_BY_CATEGORY_FAILURE,
  payload: error,
});

//CREATE product
const createProductRequest = () => ({ type: CREATE_PRODUCT_REQUEST });
const createProductSuccess = (data) => ({
  type: CREATE_PRODUCT_SUCCESS,
  payload: data,
});
const createProductFailure = (error) => ({
  type: CREATE_PRODUCT_FAILURE,
  payload: error,
});

//DELETE product
const deleteProductRequest = () => ({ type: DELETE_PRODUCT_FAILURE });
const deleteProductSuccess = (data) => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload: data,
});
const deleteProductFailure = (error) => ({
  type: DELETE_PRODUCT_FAILURE,
  payload: error,
});

//FIND ALL PRODUCTS
export const findProducts = (reqData) => async (dispatch) => {
  dispatch(findPrdouctsRequest());
  const {
    colors,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    sortBy,
    sortOrder,
    pageNumber,
    pageSize,
  } = reqData;
  try {
    const { data } = await api.get(
      `/api/products?sortBy=${sortBy}&sortOrder=${sortOrder}&pageNumber=${pageNumber}&pageSize=${pageSize}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&color=${colors}&size=${sizes}`
    );
    console.log(data);
    dispatch(findPrdouctsSuccess(data));
  } catch (error) {
    dispatch(findPrdouctsFailure(error));
  }
};

//FIND PRODUCT BY ID
export const findProductById = (reqData) => async (dispatch) => {
  dispatch(findPrdouctByIdRequest());
  const { productId } = reqData;
  try {
    const { data } = await api.get(`/api/products/${productId}`);
    dispatch(findPrdouctByIdSuccess(data));
    console.log(data);
  } catch (error) {
    dispatch(findPrdouctByIdFailure(error));
  }
};

//FIND ALL PRODUCTS BY CATEGORY
export const findProductsByCategory = (reqData) => async (dispatch) => {
  dispatch(findProductsByCategoryRequest());
  const {
    colors,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    sortBy,
    sortOrder,
    pageNumber,
    pageSize,
  } = reqData;

  try {
    const { data } = await api.get(
      `/api/products/category/${category}?sortBy=${sortBy}&sortOrder=${sortOrder}&pageNumber=${pageNumber}&pageSize=${pageSize}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&color=${colors}&size=${sizes}`
    );
    dispatch(findProductsByCategorySuccess(data));
  } catch (error) {
    dispatch(findProductsByCategoryFailure(error));
  }
};

//CREATE product
export const createProduct = (product) => async (dispatch) => {
  dispatch(createProductRequest());
  //creating form data
  const formData = new FormData();
  //setting images
  product.images.forEach((image) => {
    formData.append("images", image);
  });
  //setting product details
  formData.append("productDetails", JSON.stringify(product.data));

  try {
    const { data } = await api.post("/api/products", formData);
    dispatch(createProductSuccess(data));
    toast.success("Product created successfully");
    console.log("Product created", data);
  } catch (error) {
    dispatch(createProductFailure(error));
    toast.success("Error while creating Product");
  }
};

//Delete Product
export const deleteProduct = (pId) => async (dispatch) => {
  dispatch(deleteProductRequest());
  try {
    const { data } = await api.delete(`/api/products/${pId}`);
    console.log(data);
    dispatch(deleteProductSuccess(data));
  } catch (error) {
    dispatch(deleteProductFailure(error));
  }
};
