import { useState } from 'react';
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
    const [expanded, setExpanded] = useState(false);
    const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

    const genres = useSelector(state => state.genres.list);
    const genreNames = (genre_ids
        ?.map(id => genres.find(g => g.id === id)?.name)
        .filter(Boolean)) || [];

    const descriptionSx = expanded
        ? { color: 'text.secondary' }
        : {
            color: 'text.secondary',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
        };

    return (
        <Grid item xs={3}>
            <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column', fontFamily: 'inherit' }}>
                <CardMedia
                    component="img"
                    sx={{ aspectRatio: '2 / 3', objectFit: 'cover' }}
                    image={imageUrl}
                    alt={title}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontFamily: 'inherit' }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{ ...descriptionSx, fontFamily: 'inherit' }}>
                        {overview}
                    </Typography>
                    <Chip label={genreNames.join(', ')} sx={{ fontFamily: 'inherit' }} />
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between' }}>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <Button size="small" onClick={() => setExpanded(prev => !prev)} sx={{ fontFamily: 'inherit' }}>
                        {expanded ? 'Show less' : 'Read more'}
                    </Button>
                    <Typography gutterBottom variant="subtitle2" component="div" sx={{ fontFamily: 'inherit' }}>
                        {vote_average}
                    </Typography>

                </CardActions>
            </Card>
        </Grid>
    );
}