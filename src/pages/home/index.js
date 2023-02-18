import React from "react";

// Material ui Imports
import { Grid, Box } from "@mui/material";

// Components
import CardHome from "../../components/CardHome";

export default function Home() {
  return (
    <Box sx={{ maxWidth: 600, mx: "auto", pt: 3, px: 3}}>
      <Grid container spacing={4}>
        <Grid item sm={6} xs={12} border>
          <CardHome title={"Literatuur Bibliotheek"} body={"De literatuur bibliotheek bevat literatuur over de verscheidene onderwerpen die tijdens deze week aan bod komen."} link={'/literature'} />
        </Grid>
        <Grid item sm={6} xs={12}>
          <CardHome title={"Feiten Bibliotheek"} body={"De feiten bibliotheek bevat feitelijke informatie over de wijken in Gent waarop er in deze jokerweek wordt gewerkt."} link={'/facts'} />
        </Grid>
      </Grid>
    </Box>
  );
}
