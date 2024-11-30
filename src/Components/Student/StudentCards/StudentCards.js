import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
  Box,
} from "@mui/material";
import React from "react";
import studentImage from "../../../assets/student.png";
import studentImageBoy from "../../../assets/student girl.png"; // Assuming you have different images for genders
import { motion } from "framer-motion";

// Card hover animation
const cardVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
};

const StudentCards = ({ name, description, gender }) => {
  const truncateText = (text, length) => {
    if (text.length > length) {
      return text.substring(0, length) + "...";
    }
    return text;
  };

  // Dynamically assign image based on gender or any other condition
  const imageSrc = gender === "boy" ? studentImageBoy : studentImage;

  return (
    <Container>
      {/* Motion-enabled card for hover effect */}
      <motion.div variants={cardVariants} whileHover="hover">
        <Card
          sx={{
            maxWidth: 345,
            borderRadius: 3,
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
            overflow: "hidden",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              boxShadow: "0 6px 30px rgba(0, 0, 0, 0.15)", // Stronger shadow on hover
            },
          }}
        >
          <CardActionArea>
            {/* Card image */}
            <CardMedia
              component="img"
              height="160"
              image={imageSrc}
              alt={name}
              sx={{
                filter: "brightness(0.9)", // Slightly darken image for better text contrast
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)", // Zoom image slightly on hover
                },
              }}
            />

            {/* Card content */}
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                sx={{ fontWeight: 700, color: "darkred" }} // Strong header with dark red for consistency
              >
                {name}
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {truncateText(description, 80)}{" "}
                {/* Adjusted text length for better layout */}
              </Typography>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "darkred",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#a80000",
                  },
                }}
              >
                Learn More
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      </motion.div>
    </Container>
  );
};

export default StudentCards;
