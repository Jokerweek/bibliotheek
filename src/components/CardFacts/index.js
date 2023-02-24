import { React } from "react";

// Material ui Imports
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

export default function CardFacts(props) {
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
                minHeight: 24,
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 1,
              }}
            >
              {props.title}
            </Typography>
            <Typography
              color="text.secondary"
              sx={{
                minHeight: 24,
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 1,
              }}
            >
              {props.authors}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
