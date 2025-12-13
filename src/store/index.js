import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../slice/movieSlice';
import genreReducer from '../slice/genreSlice';


export const store = configureStore({
    reducer: {
        movies: movieReducer,
        genres: genreReducer,
    },
});