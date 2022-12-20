import { createSlice } from "@reduxjs/toolkit";

const initialState = { cachedSearch: {
    query: '',
    result: {}
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

export const selectCache = (state) => state.cachedSearch.cachedSearch;
export const { cacheSearch, deleteCache } = cachedSearchSlice.actions;
export default cachedSearchSlice.reducer;