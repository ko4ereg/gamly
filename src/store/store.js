import { combineReducers, combineSlices, configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";


const rootReducer = combineReducers({
  products: productsSlice,
  });

const store = configureStore({
    reducer: rootReducer
})

export default store;