import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import './Comp.css';

export default function ItemCard() {
  return (
    <>
    <h1 className='dailyDeals'>Daily Deals</h1>
    <div className='item'>
    <Card sx={{ maxWidth: 400}}>
      <CardMedia
        className='itemMedia'
        component="img"
        image={process.env.PUBLIC_URL + '/assets/toaster.jpeg'}
        alt="toaster"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Toaster <br/> $49
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="large">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    <div className='item'>
    <Card sx={{ maxWidth: 400}}>
      <CardMedia
        className='itemMedia'
        component="img"
        image={process.env.PUBLIC_URL + '/assets/toaster.jpeg'}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="large">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    <div className='item'>
    <Card sx={{ maxWidth: 400}}>
      <CardMedia
        className='itemMedia'
        component="img"
        image={process.env.PUBLIC_URL + '/assets/toaster.jpeg'}
        alt="green iguana"
      />
      <CardContent>
        <Typography className='itemTitle' gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="large">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    </>
  );
}
