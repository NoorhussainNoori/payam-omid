import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import bgImage from "../../../assets/student.png";
import React from "react";
import { Link } from "react-router-dom";

const Picture = () => {
  return (
    <Container>
      <Grid
        container
        columnSpacing={8}
        sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
      >
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              px: { xs: "16px", md: "0" },
              py: { xs: "20px", md: "50px" },
            }}
          >
            <Typography
              variant="h2"
              fontWeight="900"
              sx={{ mb: "1rem", fontSize: { xs: "2.5rem", md: "3.5rem" } }}
            >
              Welcome to{" "}
              <span style={{ color: "darkred" }}>Payam Omid Academy</span>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: "1.5rem",
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                lineHeight: 1.6,
              }}
            >
              Where hopes meet reality!
            </Typography>
            <Typography
              sx={{
                mb: "1.5rem",
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
              }}
            >
              At Payam Omid Academy, we believe in the power of education to
              transform lives. Our mission is to provide free, high-quality
              online education to students around the world, empowering them to
              realize their full potential and create a brighter future. Join us
              on a journey of learning, growth, and endless possibilities.
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "darkred",
                      "&:hover": { backgroundColor: "#a80000" },
                      padding: "10px 20px",
                      fontSize: "1.1rem",
                    }}
                  >
                    <Link
                      to={"/contact"}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Contact
                    </Link>
                  </Button>
                </motion.div>
              </Grid>
              <Grid item>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "gray",
                      "&:hover": { backgroundColor: "#595959" },
                      padding: "10px 20px",
                      fontSize: "1.1rem",
                    }}
                  >
                    Learn More
                  </Button>
                </motion.div>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Box
              sx={{
                position: "relative",
                backgroundImage:
                  "linear-gradient(98.3deg, rgb(0, 0, 0) 10.6%, rgb(255, 0, 0) 97.7%)",
                borderRadius: "30% 70% 70% 30% / 30% 34% 66% 70%",
                width: "100%",
                height: "400px",
                overflow: "hidden",
              }}
            >
              <Box component="img" src={bgImage} sx={{ width: "100%" }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Picture;
