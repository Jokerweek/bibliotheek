import { React } from 'react'
import { useGetBib } from '../../hooks/useGetBib';
import { useRecoilState } from "recoil";
import { tagSelect } from "../../atoms";

// Material ui Imports
import { Grid, Box, Button } from '@mui/material';

// Components
import CardLiterature from "../../components/CardLiterature";
import TagSelect from '../../components/TagSelect';

export default function Literature() {
  const { bib, tags } = useGetBib('bib.json')
  const [tag, setTag] = useRecoilState(tagSelect);

  const handleClear = () => {
    setTag("")
  }

  let bib2 = []  

  if (tag !== "") {
    bib.forEach(element => {
      if (element.tags.indexOf(tag) !== -1) {
        bib2.push(element)
      }
    });
  } else {
    bib2 = bib
  }

  console.log(tag)

  const renderButtons = () => {
    if (tag !== "") {
      return (
        <Grid container>
          <Grid item xs={12}>
            <TagSelect tags={tags.sort()} />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={handleClear}>Clear Tag</Button>
          </Grid>
        </Grid>
      )
    } else {
      return (
        <Grid container>
          <Grid item xs={12}>
            <TagSelect tags={tags.sort()} />
          </Grid>
        </Grid>
      )
    }
  }

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", my: 3}}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          {renderButtons()}
        </Grid>
        <Grid item xs={12} container spacing={4}>
          {bib2.map((element) => {
            return(
              <Grid item md={4} sm={6} xs={12} key={element.id}> 
                <CardLiterature title={element.title} link={element.url} authors={element.authors} tags={element.tags} image={element.image} />
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </Box>
  )
}