import { configureStore } from '@reduxjs/toolkit';
import RecipesSlice from '../features/recipes/recipesSlice';
import IngredientsSlice from '../data/IngredientsSlice';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash.throttle';

// used as preloadedstate value to return to where user left off
const persistedState = loadState();

export const store = configureStore({
  reducer: {
    recipes: RecipesSlice,
    allIngredients: IngredientsSlice
  },
  preloadedState: persistedState
});


// Updates locally stored state whenever store changes but limited to once per second
store.subscribe(throttle(() => {
  saveState({
    recipes: store.getState().recipes
  });
}, 1000));