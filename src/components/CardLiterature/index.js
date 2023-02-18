import React from "react";

// Material ui Imports
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Chip,
} from "@mui/material";

export default function CardLiterature(props) {
  return (
    <Grid container justifyContent="center">
      <Card sx={{ width: 300 }}>
        <CardActionArea href={props.link} target="_blank">
          <CardMedia
            sx={{ height: 300 }}
            image="/logo-jokerweek.jpg"
            title="logo"
          />
          <CardContent>
            <Typography
              gutterBottom
              sx={{
                minHeight: 48,
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
              }}
            >
              {props.title}
            </Typography>
            <Typography
              color="text.secondary"
              sx={{
                minHeight: 48,
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
              }}
            >
              {props.authors}
            </Typography>
            
          </CardContent>
        </CardActionArea>
        <CardContent>
          {props.tags.map((element) => {
            return(
              <Chip label={element} clickable variant="outlined" sx={{margin : '3px'}} />
            )
          })}
        </CardContent>
      </Card>
    </Grid>
  );
}
