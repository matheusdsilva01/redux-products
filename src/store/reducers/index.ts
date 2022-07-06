import { combineReducers } from "redux";
import { fetchProductsReducer } from "./fetchProductsReducer";

export const reducers = combineReducers({
    products: fetchProductsReducer
})