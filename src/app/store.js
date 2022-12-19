import { configureStore } from '@reduxjs/toolkit';
import RecipesSlice from '../features/recipes/recipesSlice';
import IngredientsSlice from '../data/IngredientsSlice';

export const store = configureStore({
  reducer: {
    recipes: RecipesSlice,
    allIngredients: IngredientsSlice
  },
});
