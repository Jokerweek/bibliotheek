import {React, useState } from "react";

// Material ui Imports
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Chip,
  CardActions,
  IconButton,
  Collapse,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardLiterature(props) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
        <CardActions>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {props.tags.map((element) => {
              return(
                <Chip label={element} clickable variant="outlined" sx={{margin : '3px'}} />
              )
            })}
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}

