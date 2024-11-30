import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import courseImage from "./../../../assets/course.png";

const CourseCard = ({ name, description }) => {
  const truncateText = (text, length) =>
    text.length > length ? text.substring(0, length) + "..." : text;

  return (
    <Card
      sx={{
        maxWidth: 345,
        "&:hover": { boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)" },
        transition: "0.3s",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={courseImage}
          alt={name}
        />
        <CardContent sx={{ textAlign: "center", p: 3 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: 600 }}
          >
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {truncateText(description, 80)}
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: "darkred",
              borderColor: "darkred",
              "&:hover": { backgroundColor: "darkred", color: "#fff" },
            }}
          >
            Learn More
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CourseCard;
