import { React } from 'react'
import { useGetBib } from '../../hooks/useGetBib';

// Material ui Imports
import { Grid, Box } from '@mui/material';

// Components
import CardLiterature from "../../components/CardLiterature";

export default function Literature() {
  const { bib } = useGetBib('bib.json')

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", my: 3}}>
      <Grid container spacing={4}>
        {bib.map((element) => {
          return(
            <Grid item md={4} sm={6} xs={12} key={element.id}> 
              <CardLiterature title={element.title} link={element.url} authors={element.authors} tags={element.tags} />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
