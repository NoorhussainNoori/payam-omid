import { Box, Container, Typography } from "@mui/material";
import React from "react";
import CourseBgImage from "./../../../../assets/courseBgImage.jpg";

const Landing = ({ courseName, studentAttended, Duration }) => {
  return (
    <Container>
      <Box position="relative">
        <Box
          component={"img"}
          src={CourseBgImage}
          width={"100%"}
          borderRadius={4}
          sx={{
            filter: "sepia(0.5) saturate(1.2) contrast(1.2)",
            zIndex: 0,
          }}
        />
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: 4,
            p: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontWeight: 600, fontSize: { xs: 16, lg: 24 } }}
          >
            {courseName}
          </Typography>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontWeight: 600, fontSize: { xs: 16, lg: 24 } }}
          >
            {studentAttended} Students Attended
          </Typography>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontWeight: 600, fontSize: { xs: 16, lg: 24 } }}
          >
            {Duration} Months Course
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Landing;
