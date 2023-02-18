import React from 'react'
import { Link } from 'react-router-dom';

// Material ui Imports
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';



export default function CardHome(props) {
  return (
    <Grid container justifyContent="center">
      <Card sx={{maxWidth: 300}}>
        <CardActionArea component={Link} to={props.link}>
          <CardMedia
            sx={{ height: 300 }}
            image='/logo-jokerweek.jpg'
            title="logo"
          />
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {props.title}
            </Typography>
            <Typography align="justify" color="text.secondary">
              {props.body}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
