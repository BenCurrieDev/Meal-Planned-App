import { createSlice } from "@reduxjs/toolkit";

const initialState = { cachedSearch: {
    searchParams: {},
    result: {
        number: 0,
        results: [],
        totalResults: 0
    },
    recipes: {}
}}

const cachedSearchSlice = createSlice({
    name: 'cachedSearch',
    initialState,
    reducers: {
        cacheSearch(state, action) {
            state.cachedSearch.searchParams = action.payload.searchParams;
            state.cachedSearch.result = action.payload.result;
        },
        cacheRecipe(state, action) {
            state.cachedSearch.recipes[action.payload.id] = action.payload;
        },
        deleteCache(state) {
            state = initialState;
        }
    }
})

export const selectCachedRecipes = (state) => state.cachedSearch.cachedSearch.recipes;
export const selectCache = (state) => state.cachedSearch.cachedSearch.result;
export const selectSearchParams = (state) => state.cachedSearch.cachedSearch.searchParams;
export const { cacheSearch, deleteCache } = cachedSearchSlice.actions;
export default cachedSearchSlice.reducer;