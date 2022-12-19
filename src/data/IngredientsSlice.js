import { createSlice } from "@reduxjs/toolkit";
import ingredientsToIds from "./ingredientsData";

const initialState = {ingredients: ingredientsToIds};

const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState,
    reducers: {}
})

export const selectAllIngredients = (state) => state.ingredients.ingredients;
export default ingredientsSlice.reducer;