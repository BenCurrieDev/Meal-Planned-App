import { createSlice } from "@reduxjs/toolkit";

const initialState = { cachedSearch: {
    query: '',
    result: {
        number: 0,
        results: [],
        totalResults: 0
    }
}}

const cachedSearchSlice = createSlice({
    name: 'cachedSearch',
    initialState,
    reducers: {
        cacheSearch(state, action) {
            state.cachedSearch = action.payload;
        },
        deleteCache(state) {
            state = initialState;
        }
    }
})

export const selectCache = (state) => state.cachedSearch.cachedSearch.result;
export const selectQuery = (state) => state.cachedSearch.cachedSearch.query;
export const { cacheSearch, deleteCache } = cachedSearchSlice.actions;
export default cachedSearchSlice.reducer;