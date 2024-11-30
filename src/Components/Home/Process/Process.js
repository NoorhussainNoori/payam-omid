import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  LinearProgress,
  styled,
} from "@mui/material";
import { motion } from "framer-motion";

// Define your steps
const steps = [
  {
    label: "Browse Courses",
    description: "Explore a variety of courses on our website.",
  },
  {
    label: "Contact Us",
    description: "Get in touch via WhatsApp or the contact form.",
  },
  {
    label: "Join WhatsApp Group",
    description: "We'll add you to the relevant class WhatsApp group.",
  },
  {
    label: "Receive Class Links",
    description: "Class links will be shared for you to join.",
  },
];

// Styled progress bar
const ProgressBar = styled(LinearProgress)(({ theme }) => ({
  height: "10px",
  borderRadius: "5px",
  "& .MuiLinearProgress-bar": {
    backgroundColor: "darkred",
  },
}));

// Custom Button with dark red theme
const DarkRedButton = styled(Button)(({ theme }) => ({
  backgroundColor: "darkred",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#a80000",
  },
}));

const Process = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () =>
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  const handleBack = () => setActiveStep((prev) => Math.max(prev - 1, 0));
  const handleReset = () => setActiveStep(0);

  // Motion variants for slide animations
  const slideVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const progress = (activeStep / (steps.length - 1)) * 100;

  return (
    <Container sx={{ mt: "4rem", textAlign: "center" }}>
      {/* Header Section */}
      <Typography
        variant="h3"
        sx={{
          mb: "3rem",
          fontWeight: "bold",
          textDecoration: "underline",
          textDecorationColor: "darkred",
        }}
      >
        Process
      </Typography>

      {/* Progress Bar */}
      <ProgressBar variant="determinate" value={progress} sx={{ mb: 4 }} />

      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} md={8}>
          {/* Motion Wrapper for smooth transitions */}
          <motion.div
            key={activeStep}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                border: "1px solid darkred",
                borderRadius: "15px",
                p: 4,
                mb: 4,
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h4"
                sx={{ color: "darkred", fontWeight: "bold", mb: 2 }}
              >
                {steps[activeStep].label}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                {steps[activeStep].description}
              </Typography>
            </Box>
          </motion.div>

          {/* Buttons */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            {activeStep === steps.length - 1 ? (
              <DarkRedButton onClick={handleReset}>Reset</DarkRedButton>
            ) : (
              <DarkRedButton onClick={handleNext}>Next</DarkRedButton>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Process;
