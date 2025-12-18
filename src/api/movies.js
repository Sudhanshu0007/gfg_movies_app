import axios from 'axios';
import { setMovies } from '../slice/movieSlice';
import { setGenres } from '../slice/genreSlice';

// CRA exposes env vars only when prefixed with REACT_APP
const API_KEY = process.env.REACT_APP_API_KEY;
const url = 'https://api.themoviedb.org/3';

export const getMovies = () => async dispatch => {
    try{
        const {data} = await axios.get(`${url}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        dispatch(setMovies(data.results));
        return data;
    }catch(err){
        return err;
    }
}

export const getGenres = () => async dispatch => {
    try{
        const {data} = await axios.get(`${url}/genre/movie/list?api_key=${API_KEY}&language=en-US`);
        dispatch(setGenres(data.genres));
        return data;
    }catch(err){
        return err;
    }
}