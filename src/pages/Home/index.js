
import { useDispatch ,useSelector } from 'react-redux';
import NavBar from '../../components/navbar';
import { useEffect } from 'react';
import { getMovies, getGenres } from './../../api/movies';
import MovieCard from '../../components/movieCard';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const Home =() => {

    const dispatch = useDispatch();

    const movies = useSelector((state) => state.movies.movies);
    console.log("Movies Data: ", movies);

    useEffect(() => {
        dispatch(getMovies());
        dispatch(getGenres());
    }
    , []);
    return(
        <>
            <NavBar />
            <Box sx={{ px: 2, py: 3 }}>
                <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
                    Popular Movies
                </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                {
                    movies?.length > 0 && movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
                }
                </Grid>
            </Box>
            </Box>
        </>
    )
}

export default Home;