import { createSlice } from "@reduxjs/toolkit";
import ingredientsToIds from "./ingredientsData";



const initialState = {ingredients: ingredientsToIds};
console.log(ingredientsToIds)
console.log(initialState.ingredients)

const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState,
    reducers: {}
})


export const selectAllIngredients = (state) => state.ingredients.ingredients;

export default ingredientsSlice.reducer;