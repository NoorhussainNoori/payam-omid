import React from "react";
import { Box, Container, Grid, Typography, styled, Paper } from "@mui/material";
import {
  School,
  SupervisorAccount,
  FitnessCenter,
  Work,
  Book,
  MenuBook,
} from "@mui/icons-material";

const services = [
  { id: 1, name: "Courses", icon: <School fontSize="large" /> },
  { id: 2, name: "Mentorship", icon: <SupervisorAccount fontSize="large" /> },
  { id: 3, name: "Coaching", icon: <FitnessCenter fontSize="large" /> },
  { id: 4, name: "Career Development", icon: <Work fontSize="large" /> },
  { id: 5, name: "School Subjects", icon: <Book fontSize="large" /> },
  { id: 6, name: "University Subjects", icon: <MenuBook fontSize="large" /> },
];

// Styled components for the card hover effect
const ServiceCard = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",
  height: "200px",
  borderRadius: "15px",
  transition: "transform 0.3s, background-color 0.3s",
  "&:hover": {
    transform: "translateY(-10px)",
    backgroundColor: "darkred",
    color: theme.palette.common.white,
    "& .MuiSvgIcon-root": {
      color: theme.palette.common.white,
    },
  },
}));

const Services = () => {
  return (
    <Container sx={{ mt: "4rem", textAlign: "center" }}>
      <Typography
        variant="h3"
        sx={{
          mb: "3rem",
          fontWeight: "bold",
          textDecoration: "underline",
          textDecorationColor: "darkred",
        }}
      >
        Our Services
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <ServiceCard elevation={6}>
              {service.icon}
              <Typography variant="h6" sx={{ mt: "1rem", fontWeight: "bold" }}>
                {service.name}
              </Typography>
            </ServiceCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
