import { Container, Grid } from "@mui/material";
import React from "react";
import Picture from "./LandingComponent/Picture";
import Services from "./Services/Services";
import Process from "./Process/Process";
import Information from "./Information/Information";

const Home = () => {
  return (
    <Container sx={{ padding: { xs: "16px", sm: "32px", md: "48px" } }}>
      <Grid container spacing={4} alignItems={"center"}>
        <Grid item xs={12}>
          <Picture />
        </Grid>
        <Grid item xs={12}>
          <Services />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Process />
      </Grid>
      <Grid item xs={12}>
        <Information />
      </Grid>
    </Container>
  );
};

export default Home;
