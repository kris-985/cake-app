import { createSlice } from "@reduxjs/toolkit";

export const recipesReducer = createSlice({
  name: "recipes",
  initialState: {
    homeRecipes: {},
    allRecipes: {},
    recipeId: 0,
    singleRecipe: {},
  },
  reducers: {
    changeId: (state, action) => {
      state.recipeId = action.payload;
    },
    addRecipes: (state, action) => {
      const recipes = action.payload;
      state.homeRecipes = Object.keys(recipes.meals)
        .slice(0, 8)
        .map((key) => ({ [key]: recipes.meals[key] }));
      state.allRecipes = Object.keys(recipes.meals).map((key) => ({
        [key]: recipes.meals[key],
      }));
    },
    viewSingleRecipe: (state, action) => {
      state.singleRecipe = action.payload.meals;
    },
  },
});
export const { addRecipes, changeId, viewSingleRecipe } =
  recipesReducer.actions;

export default recipesReducer.reducer;
