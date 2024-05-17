import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  recipesReducer  from "./slices/recipesSlice";

const rootReducer = combineReducers({
    //slices
    recipesReducer
  });

export const store = configureStore({
    reducer: rootReducer
})

