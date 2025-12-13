import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
};

const genreSlice = createSlice({
    name: "genres",
    initialState,
    reducers: {
        setGenres: (state, action) => {
            state.list = action.payload;
        }
    }
});

export const { setGenres } = genreSlice.actions;
export default genreSlice.reducer;
