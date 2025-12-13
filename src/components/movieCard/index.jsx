import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';

export default function MovieCard({ movie }) {

    const { title, overview, poster_path, vote_average, genre_ids } = movie;
    const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

    const genres = useSelector(state => state.genres.list);
    const genreNames = genre_ids
        ?.map(id => genres.find(g => g.id === id)?.name)
        .filter(Boolean);

    return (
        <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 540 }}
                    image={imageUrl}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {overview}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        <Chip label={genreNames.join(', ')} />
                        
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <Typography gutterBottom variant="h6" component="div">
                        {vote_average}
                    </Typography>

                </CardActions>
            </Card>
        </Grid>
    );
}