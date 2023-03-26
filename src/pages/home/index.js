import { React } from 'react'
import { useRecoilState } from "recoil";
import { useGetBib } from '../../hooks/useGetBib';
import { tagSelect, formatSelect } from "../../atoms";

// Material ui Imports
import { Grid, Box } from '@mui/material';

// Components
import CardLiterature from "../../components/CardLiterature";
import TextSelect from '../../components/TextSelect'

export default function Literature() {
  const { bib, tags, formats } = useGetBib('bib.json')
  const [tag, setTag] = useRecoilState(tagSelect)
  const [format, setFormat] = useRecoilState(formatSelect)

  tags.sort().forEach(element => {
    console.log(element)
  });

  let bib2 = []  

  if (tag && format) {
    bib.forEach(element => {
      if (element.tags.indexOf(tag) !== -1 && element.format === format) {
        bib2.push(element)
      }
    });
  } else if (tag && !format) {
    bib.forEach(element => {
      if (element.tags.indexOf(tag) !== -1) {
        bib2.push(element)
      }
    });
  } else if (!tag && format) {
    bib.forEach(element => {
      if (element.format === format) {
        bib2.push(element)
      }
    });
  } else {
    bib2 = bib
  }

  return (
    <Box
      sx={{
        width: {
          xs: 300,
          sm: 600,
          md: 900,
        },
        mx: 'auto',
        my: 3,
      }}
     >
      <Grid container spacing={4}>
        <Grid item sm={6} xs={12}>
          <TextSelect label="Kies je tag" data={tags.sort()} value={tag} callBack={e => setTag(e)}/>
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextSelect label="Kies je bestandstype" data={formats.sort()} value={format} callBack={e => setFormat(e)}/>
        </Grid>
        <Grid item xs={12} container spacing={4}>
          {bib2.map((element) => {
            return(
              <Grid item md={4} sm={6} xs={12} key={element.id}> 
                <CardLiterature id={element.id} title={element.title} link={element.url} authors={element.authors} tags={element.tags} image={element.image} format={element.format} />
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </Box>
  )
}