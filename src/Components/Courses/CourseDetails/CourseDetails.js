import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import { useParams } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
  Paper,
} from "@mui/material";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import DownloadIcon from "@mui/icons-material/Download";
import BadgeIcon from "@mui/icons-material/Badge";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import { motion } from "framer-motion";
import Landing from "./Landing/Landing";

// Motion variants
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError("No course ID provided.");
      setLoading(false);
      return;
    }

    const fetchCourse = async () => {
      try {
        const courseDocRef = doc(db, "courses", id);
        const courseDoc = await getDoc(courseDocRef);

        if (!courseDoc.exists()) {
          setError("No course found with this ID.");
          setCourse(null);
        } else {
          setCourse(courseDoc.data());
          setError(null);
        }
      } catch (err) {
        setError("Failed to fetch course details.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) {
    return (
      <Box
        sx={{
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress sx={{ color: "darkred" }} />
      </Box>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container sx={{ mt: 10 }}>
      <Grid container spacing={6}>
        {/* Course Landing */}
        <Grid item xs={12}>
          <Landing
            courseName={course.name}
            Duration={course.duration}
            studentAttended={course.students}
          />
        </Grid>

        {/* Course Information Section */}
        <Grid item xs={12} md={7}>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.02 }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                padding: 5,
                borderRadius: 4,
                boxShadow: "0px 6px 20px rgba(0,0,0,0.1)",
                overflow: "hidden",
              }}
            >
              <Typography
                variant="h3"
                sx={{ fontWeight: 700, mb: 2, color: "darkred" }}
              >
                {course.name}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontStyle: "italic",
                  color: "rgba(0,0,0,0.7)",
                  mb: 3,
                }}
              >
                {course.subtitle}
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: 1.7, mb: 3, fontSize: "1.1rem" }}
              >
                {course.description}
              </Typography>

              <Box display="flex" gap={2} alignItems="center">
                <Avatar
                  sx={{
                    backgroundColor: "darkred",
                    color: "white",
                    width: 56,
                    height: 56,
                  }}
                >
                  {course.teacher[0]}
                </Avatar>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 500, fontSize: "1.2rem" }}
                  >
                    Instructor: {course.teacher}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </motion.div>
        </Grid>

        {/* Course Features and Enroll Section */}
        <Grid item xs={12} md={5}>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.02 }}
          >
            <Paper
              sx={{
                padding: 4,
                borderRadius: 4,
                boxShadow: "0px 8px 24px rgba(0,0,0,0.1)",
                backgroundColor: "darkred",
                color: "white",
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: 600, mb: 3, textAlign: "center" }}
              >
                What this course includes:
              </Typography>

              <Box display="flex" flexDirection="column" gap={2}>
                <Typography
                  variant="body1"
                  display="flex"
                  alignItems="center"
                  gap={2}
                >
                  <CastForEducationIcon />
                  {course.lesson} Lessons
                </Typography>

                <Typography
                  variant="body1"
                  display="flex"
                  alignItems="center"
                  gap={2}
                >
                  <DownloadIcon />
                  {course.downloadFiles} Files to Download
                </Typography>

                <Typography
                  variant="body1"
                  display="flex"
                  alignItems="center"
                  gap={2}
                >
                  <MobileFriendlyIcon />
                  Accessible on {course.platform}
                </Typography>

                <Typography
                  variant="body1"
                  display="flex"
                  alignItems="center"
                  gap={2}
                >
                  <BadgeIcon />
                  {course.certificate
                    ? "Certificate of Completion"
                    : "No Certificate"}
                </Typography>
              </Box>

              <Box mt={4} textAlign="center">
                <Button
                  href={course.enroll}
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "white",
                    color: "darkred",
                    fontWeight: 700,
                    px: 4,
                    py: 1.5,
                    "&:hover": {
                      backgroundColor: "darkred",
                      color: "white",
                    },
                  }}
                >
                  Enroll Now
                </Button>
              </Box>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CourseDetails;
