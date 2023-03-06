import { React, useState } from "react";
import { useSetRecoilState } from "recoil";
import { tagSelect } from "../../atoms";

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
  Modal,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from '@mui/icons-material/Close';
import PDFpreview from "./PDFpreview";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardLiterature(props) {
  const [expanded, setExpanded] = useState(false);
  const [preview, setPreview] = useState(false);
  const setTag = useSetRecoilState(tagSelect);

  const handleClick = (tag) => {
    setTag(tag)
    setExpanded(false)
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleRedirect = () => {
    if (props.pdf) {
      setPreview(true)
    } else {
      window.open(props.link, '_blank')
    }
  }

  return (
    <div>
      <Modal
        open={preview}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <PDFpreview url={props.link}/>
          <Button
            style={{height:"49px", marginLeft:"5px"}}
            onClick={() => {
              setPreview(false);
            }}
            startIcon={<CloseIcon />}
          >
            Close
          </Button>
        </div>
      </Modal>
      <Grid container justifyContent="center">
        <Card sx={{ width: 300 }}>
          <CardActionArea

            onClick={handleRedirect}
          >
            <CardMedia
              sx={{ height: 300 }}
              image={`https://raw.githubusercontent.com/Jokerweek/database/main/image/00${props.id}.png`}
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
                  <Chip
                    key={element}
                    label={element}
                    clickable
                    variant="outlined"
                    sx={{ margin: "3px" }}
                    onClick={() => handleClick(element)}
                  />
                ) 
              })}
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    </div>
  );
}