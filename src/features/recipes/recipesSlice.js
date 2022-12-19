import { createSlice } from "@reduxjs/toolkit";

const initialState = { recipes: {} };

const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        addRecipe(state, action) {
            state.recipes[action.payload.id] = action.payload;
        },
        removeRecipe(state, action) {
            delete state.recipes[action.payload];
        }
    }
})


export const selectRecipes = (state) => state.recipes.recipes;
export const { addRecipe, removeRecipe } = recipesSlice.actions;
export default recipesSlice.reducer;
