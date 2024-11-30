import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const Information = () => {
  // Motion settings for subtle scale animation
  const numberVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <Box
      sx={{
        mt: { xs: "4rem", md: "6rem" },
        py: { xs: "2rem", md: "4rem" },
        backgroundColor: "darkred",
        color: "white",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <motion.div
              variants={numberVariants}
              initial="hidden"
              animate="visible"
            >
              <Typography
                variant="h3"
                fontWeight={700}
                sx={{ mb: 2, color: "white" }}
              >
                3800 +
              </Typography>
              <Typography variant="h6">Students</Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div
              variants={numberVariants}
              initial="hidden"
              animate="visible"
            >
              <Typography
                variant="h3"
                fontWeight={700}
                sx={{ mb: 2, color: "white" }}
              >
                80+
              </Typography>
              <Typography variant="h6">Courses</Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div
              variants={numberVariants}
              initial="hidden"
              animate="visible"
            >
              <Typography
                variant="h3"
                fontWeight={700}
                sx={{ mb: 2, color: "white" }}
              >
                60 +
              </Typography>
              <Typography variant="h6">Teachers</Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Information;
