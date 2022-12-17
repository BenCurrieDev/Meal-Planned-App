import { configureStore } from '@reduxjs/toolkit';
import RecipesSlice from '../features/recipes/recipesSlice';

export const store = configureStore({
  reducer: {
    recipes: RecipesSlice
  },
});
