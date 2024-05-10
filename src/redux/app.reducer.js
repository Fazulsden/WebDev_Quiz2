import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ingredients: [],
  recipes: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIngredients: (state, action) => {
      state.ingredients = action.payload;
    },
    setRecipes: (state, action) => {
      state.recipes = action.payload;
    },
  },
});

export const { setIngredients, setRecipes } = appSlice.actions;
export default appSlice;
