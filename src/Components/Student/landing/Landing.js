import { Box, Container, Typography } from "@mui/material";
import React from "react";
import img from "./../../../assets/BgImageStudents.jpg";
import { motion } from "framer-motion";

// Motion variants for fade-in animation
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const Landing = () => {
  return (
    <Container sx={{ position: "relative", mt: 4, mb: 4 }}>
      {/* Parallax Image with overlay */}
      <Box
        component={motion.div}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 4,
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)", // Shadow for depth
        }}
      >
        {/* Parallax Background Image */}
        <Box
          component="img"
          src={img}
          width="100%"
          sx={{
            filter: "brightness(0.75)", // Darken the background for better text readability
            objectFit: "cover",
            height: { xs: "350px", md: "500px", lg: "600px" }, // Responsive height
            transition: "transform 0.5s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)", // Parallax hover effect
            },
          }}
        />

        {/* Overlay Content */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7))", // Gradient overlay for modern look
            zIndex: 1,
          }}
        >
          <Typography
            variant="h2"
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            sx={{
              color: "white",
              fontWeight: 700,
              fontSize: { xs: 28, sm: 36, md: 48, lg: 54 }, // Responsive font size
              textAlign: "center",
              textShadow: "2px 4px 6px rgba(0,0,0,0.6)", // Text shadow for clarity
              letterSpacing: "1px",
            }}
          >
            Welcome to the Student Success Center
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Landing;
