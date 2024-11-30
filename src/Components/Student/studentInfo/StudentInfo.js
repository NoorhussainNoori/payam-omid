import { Box, Grid, Typography, Paper } from "@mui/material";
import React from "react";
import bgImage from "./../../../assets/student girl.png";
import image from "../../../assets/student.png";
import { motion } from "framer-motion";

// Animation for section and image hover effects
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const imageHover = {
  hover: { scale: 1.05, transition: { duration: 0.5 } },
};

const StudentInfo = ({ reverse, name, description, gender }) => {
  return (
    <motion.div initial="hidden" whileInView="visible" variants={fadeIn}>
      <Grid
        container
        spacing={4}
        direction={reverse ? "row-reverse" : "row"}
        alignItems="center"
        justifyContent="center"
        sx={{
          position: "relative",
          py: 5,
          px: { xs: 2, md: 4 },
        }}
      >
        {/* Left or Right Image Section */}
        <Grid item xs={12} md={6}>
          <motion.div whileHover="hover" variants={imageHover}>
            <Box
              component="img"
              src={gender ? image : bgImage}
              alt={name}
              sx={{
                width: "100%",
                height: "350px",
                borderRadius: "20px",
                objectFit: "cover",
                boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
                filter: "brightness(0.9)",
              }}
            />
          </motion.div>
        </Grid>

        {/* Content Section */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={4}
            sx={{
              padding: 4,
              borderRadius: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
              backdropFilter: "blur(10px)", // Frosted glass effect
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: "80px",
                height: "80px",
                backgroundColor: "darkred",
                borderRadius: "50%",
                position: "absolute",
                top: "-40px", // Positioned slightly outside the card
                left: reverse ? "auto" : "-40px",
                right: reverse ? "-40px" : "auto",
                zIndex: 0,
              }}
            />

            <Box
              sx={{
                zIndex: 1,
                position: "relative",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: "darkred",
                  fontSize: { xs: "1.8rem", md: "2.4rem" },
                }}
              >
                {name}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: "rgba(0,0,0,0.7)",
                }}
              >
                {description}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default StudentInfo;
