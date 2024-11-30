import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School"; // For Experienced Teachers
import AccessTimeIcon from "@mui/icons-material/AccessTime"; // For Flexible Learning
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"; // For Practical Skills

// Animations for each reason box
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const CourseDetails = () => {
  const whyCourse = [
    {
      id: 1,
      title: "High-Quality Education",
      reason:
        "Our courses are developed and taught by experienced educators who are dedicated to delivering a transformative learning experience. Each course is meticulously designed to ensure deep understanding and practical application.",
      icon: <SchoolIcon sx={{ color: "darkred", fontSize: "2rem" }} />,
    },
    {
      id: 2,
      title: "Flexible and Accessible",
      reason:
        "We offer courses that are available 24/7, allowing you to study at your own pace. Whether you're working full-time or managing other commitments, our platform adapts to your schedule, enabling you to learn whenever and wherever you choose.",
      icon: <AccessTimeIcon sx={{ color: "darkred", fontSize: "2rem" }} />,
    },
    {
      id: 3,
      title: "Empowerment Through Knowledge",
      reason:
        "Our mission is to empower you with the skills and knowledge necessary to achieve your goals. We focus on real-world skills and personal growth, giving you the tools to make a meaningful impact on your future.",
      icon: <EmojiEventsIcon sx={{ color: "darkred", fontSize: "2rem" }} />,
    },
  ];

  return (
    <Container sx={{ mt: 6 }}>
      <Grid container spacing={6}>
        {/* Left Side: Course Explanation */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 3,
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
              borderRight: { md: "4px solid darkred" },
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, mb: 3, color: "darkred" }}
            >
              Why Choose Our Courses?
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              At Payam Omid Online Academy, we are committed to providing
              high-quality, inclusive education that empowers our students to
              achieve their full potential. Our courses are not only designed by
              experienced educators but are also completely free, ensuring
              education is accessible to everyone, regardless of their
              background or location.
              <br />
              <br />
              With a flexible learning platform, available 24/7, we provide an
              opportunity for you to study at your own pace and access courses
              that are relevant to your personal and professional goals. Our
              supportive community ensures you are never alone in your learning
              journey, and you become part of a global network of learners.
            </Typography>
          </Paper>
        </Grid>

        {/* Right Side: Reasons for Choosing the Course */}
        <Grid item xs={12} md={6}>
          {whyCourse.map((reason) => (
            <motion.div
              key={reason.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <Paper
                elevation={3}
                sx={{
                  mb: 4,
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  borderRadius: 3,
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  background:
                    "linear-gradient(135deg, rgba(255, 0, 0, 0.05), rgba(255, 0, 0, 0.1))",
                }}
              >
                <Box display="flex" alignItems="center" gap={2}>
                  {reason.icon} {/* Use the dynamic icon */}
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 600, color: "darkred" }}
                  >
                    {reason.title}
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={{ color: "rgba(0, 0, 0, 0.7)", lineHeight: 1.7 }}
                >
                  {reason.reason}
                </Typography>
              </Paper>
            </motion.div>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default CourseDetails;
