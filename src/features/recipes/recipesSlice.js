import { createSlice } from "@reduxjs/toolkit";

const initialState = { recipes: {} };

const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        addRecipe(state, action) {
            state.recipes[action.payload.id] = action.payload;
        }
    }
})

export const { addRecipe } = recipesSlice.actions;
export default recipesSlice.reducer;