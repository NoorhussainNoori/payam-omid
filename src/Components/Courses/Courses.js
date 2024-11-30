import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import {
  Container,
  Grid,
  Typography,
  Button,
  Divider,
  Card,
  CardContent,
} from "@mui/material";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard/CourseCard";
import CourseDetails from "./CourseDetails/Course/CourseDetails";

// Icons for each subject
import ScienceIcon from "@mui/icons-material/Science"; // For Mathematics, Physics, Chemistry
import LanguageIcon from "@mui/icons-material/Language"; // For Foreign Languages
import ComputerIcon from "@mui/icons-material/Computer"; // For Engineering, Software, Programming
import BookIcon from "@mui/icons-material/Book"; // For Qur'an Studies
import BrushIcon from "@mui/icons-material/Brush"; // For Calligraphy, Arts, Illustration, Photography
import PeopleIcon from "@mui/icons-material/People"; // For Leadership, Public Speaking
import TrendingUpIcon from "@mui/icons-material/TrendingUp"; // For Marketing, Entrepreneurship
import PieChartIcon from "@mui/icons-material/PieChart"; // For Data Analysis

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 12;

  const courseCollectionRef = collection(db, "courses");

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const coursesData = await getDocs(courseCollectionRef);
        const coursesList = coursesData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setCourses(coursesList);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadCourses();
  }, []);

  // Pagination logic
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  const handlePageChange = (newPage) => setCurrentPage(newPage);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  const subjects = [
    { title: "Mathematics", icon: <ScienceIcon />, id: 1 },
    { title: "Physics", icon: <ScienceIcon />, id: 2 },
    { title: "Chemistry", icon: <ScienceIcon />, id: 3 },
    { title: "Economics and Management", icon: <TrendingUpIcon />, id: 4 },
    { title: "Foreign Languages", icon: <LanguageIcon />, id: 5 },
    { title: "Engineering & Software", icon: <ComputerIcon />, id: 6 },
    { title: "Teachings of the Qur’an", icon: <BookIcon />, id: 7 },
    { title: "Art of Calligraphy", icon: <BrushIcon />, id: 8 },
    { title: "Graphic Design", icon: <BrushIcon />, id: 9 },
    { title: "Programming", icon: <ComputerIcon />, id: 10 },
    { title: "Psychology and Counseling", icon: <PeopleIcon />, id: 11 },
    { title: "Managerial Skills", icon: <PeopleIcon />, id: 12 },
    { title: "Public Speaking & Oratory", icon: <PeopleIcon />, id: 13 },
    { title: "Fine Arts & Drawing", icon: <BrushIcon />, id: 14 },
    { title: "Photography", icon: <BrushIcon />, id: 15 },
    { title: "Digital Illustration", icon: <BrushIcon />, id: 16 },
    { title: "Communication Skills", icon: <PeopleIcon />, id: 17 },
    { title: "Leadership Development", icon: <PeopleIcon />, id: 18 },
    { title: "Entrepreneurship", icon: <TrendingUpIcon />, id: 19 },
    { title: "Digital Marketing", icon: <TrendingUpIcon />, id: 20 },
    { title: "Data Analysis", icon: <PieChartIcon />, id: 21 },
    { title: "Mastery of Office Software", icon: <ComputerIcon />, id: 22 },
  ];

  return (
    <Container sx={{ mt: 8 }}>
      <Grid container>
        {/* Title and Intro */}
        <Grid item xs={12} mb={4}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, mb: 2, color: "darkred" }}
          >
            Choose one of our Courses
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 4 }}>
            Embark on a Journey with Our Courses
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "1.2rem", lineHeight: 1.7 }}
          >
            At Payam Omid Online Academy, we offer an extensive array of
            courses, meticulously designed to expand your knowledge and hone
            your skills. Guided by experienced volunteer instructors, our
            courses span a broad spectrum of disciplines, including:
          </Typography>
        </Grid>

        {/* Subjects Section */}
        <Grid item xs={12} mt={8}>
          <Grid container spacing={4}>
            {subjects.map((subject) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={subject.id}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 3,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    borderRadius: 3,
                    height: "180px",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      color: "darkred",
                      boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
                    },
                    "&:hover .MuiSvgIcon-root": {
                      color: "darkred",
                    },
                  }}
                >
                  <Box>{subject.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mt: 2 }}>
                    {subject.title}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Courses Section */}
        <Grid item xs={12} mt={8}>
          <Typography variant="h4" sx={{ mb: 5, fontWeight: 600 }}>
            Our Courses
          </Typography>

          <Grid container spacing={4}>
            {error && <Typography color="error">Error: {error}</Typography>}
            {currentCourses.length > 0 ? (
              currentCourses.map((course) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
                  <Link
                    to={`/coursedetails/${course.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <CourseCard
                      name={course.name}
                      description={course.description}
                    />
                  </Link>
                </Grid>
              ))
            ) : (
              <Typography variant="h6">No courses found</Typography>
            )}
          </Grid>
        </Grid>

        {/* Pagination */}
        <Grid item xs={12} mt={4}>
          <Box display="flex" justifyContent="center">
            {[...Array(Math.ceil(courses.length / coursesPerPage)).keys()].map(
              (page) => (
                <Button
                  key={page + 1}
                  onClick={() => handlePageChange(page + 1)}
                  variant={page + 1 === currentPage ? "contained" : "outlined"}
                  sx={{ mx: 1, fontWeight: 600 }}
                >
                  {page + 1}
                </Button>
              )
            )}
          </Box>
        </Grid>

        {/* Divider */}
        <Grid item xs={12} mt={6}>
          <Divider />
        </Grid>

        {/* Why Choose Our Courses Section */}
        <Grid item xs={12} mt={6}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
            Why Choose Our Courses?
          </Typography>
          <CourseDetails />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Courses;
