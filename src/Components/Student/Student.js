import {
  Avatar,
  Box,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Typography,
  Paper,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Landing from "./landing/Landing";
import StudentInfo from "./studentInfo/StudentInfo";
import StudentCards from "./StudentCards/StudentCards";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { motion } from "framer-motion";

// Animation for scroll and hover effects
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Student = () => {
  const [featuredStudents, setFeaturedStudents] = useState([]);
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const featuredStudentsCollectionRef = collection(db, "featuredstudents");
  const studentsCollectionRef = collection(db, "student");

  useEffect(() => {
    const loadFeaturedStudents = async () => {
      try {
        const featuredStudentsData = await getDocs(
          featuredStudentsCollectionRef
        );
        if (!featuredStudentsData.empty) {
          const featuredStudentsList = featuredStudentsData.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setFeaturedStudents(featuredStudentsList);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchStudents = async () => {
      try {
        const studentsData = await getDocs(studentsCollectionRef);
        if (!studentsData.empty) {
          const studentList = studentsData.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setStudents(studentList);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadFeaturedStudents();
    fetchStudents();
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress sx={{ color: "darkred" }} />
      </Box>
    );
  }

  const testimonials = [
    {
      id: 1,
      name: "Fatima Karimi",
      text: "Being part of the Payam Omid community has been a wonderful experience. The sense of belonging and support from both instructors and fellow students has made my learning journey enjoyable and motivating. I highly recommend it to anyone looking to learn!",
      designation: "Student",
    },
    {
      id: 2,
      name: "Ali Najafi",
      text: "As a student, I was initially skeptical about online learning. However, the interactive format and engaging content of the courses at Payam Omid Academy exceeded my expectations. I've gained valuable skills that have helped me in my career!",
    },
    {
      id: 3,
      name: "Sara Ahmadzai",
      text: "The Payam Omid Academy has changed my life. I never thought I could access quality education for free. The courses are well-structured, and the instructors are incredibly supportive. I feel empowered to pursue my dreams!",
    },
  ];

  return (
    <Container>
      <Grid container spacing={6}>
        {/* Animated Landing Section */}
        <Grid item xs={12}>
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Landing />
          </motion.div>
        </Grid>

        {/* Introduction Section */}
        <Grid item xs={12}>
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold" }}>
              Meet Our Students
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              The Student Success Center at Academy Payam Omid empowers students
              to reach their full potential through key achievements, including
              improved academic excellence via personalized tutoring, career
              advancement with secured internships and job placements through
              workshops, and skill enhancement in areas such as time management,
              communication, and leadership. Additionally, the center offers
              networking opportunities by connecting students with industry
              professionals through mentorship, fostering personal growth,
              resilience, and confidence. We celebrate these successes and
              remain committed to supporting our students. The Academy provides
              a diverse range of classes designed to equip students with
              valuable skills, including foreign language courses in English,
              Turkish, Russian, Arabic, and German, as well as arts classes
              covering visual arts, music, and performing arts. Students can
              also study Islamic sciences such as Islamic theology, Quranic
              studies, and history, along with practical arts like sewing,
              weaving, and photography. Additional offerings include classes in
              computer skills, business, mathematics, health education, and
              personal development.
            </Typography>
          </motion.div>
        </Grid>

        {/* Featured Students Section */}
        <Grid item xs={12}>
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Typography variant="h3" sx={{ mb: 4 }}>
              Hear from our Featured Students
            </Typography>
            <Divider sx={{ mb: 6 }} />
            {featuredStudents.map((student) => (
              <StudentInfo
                key={student.id}
                name={student.name}
                description={student.description}
                reverse={student.right}
                gender={student.isBoy}
              />
            ))}
          </motion.div>
        </Grid>

        {/* Student Cards Section */}
        <Grid item xs={12}>
          <Typography variant="h3" sx={{ mb: 4 }}>
            Meet More Students
          </Typography>
          <Divider sx={{ mb: 6 }} />
          <Grid container spacing={3}>
            {students.map((student) => (
              <Grid item xs={12} sm={6} md={4} key={student.id}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <StudentCards
                    name={student.name}
                    description={student.description}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Testimonials Section */}
        <Grid item xs={12}>
          <Typography variant="h3" sx={{ mt: 8 }}>
            What do our People say about us?
          </Typography>
          <Divider sx={{ mb: 4 }} />
          <Grid container spacing={4}>
            {testimonials.map((testimonial) => (
              <Grid item xs={12} md={4} key={testimonial.id}>
                <Paper
                  elevation={4}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    backgroundColor: "#f5f5f5",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ lineHeight: 1.8, mb: 3, color: "#333" }}
                  >
                    {testimonial.text}
                  </Typography>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start"
                    gap={2}
                  >
                    <Avatar sx={{ bgcolor: "darkred" }}>
                      {testimonial.name[0]}
                    </Avatar>
                    <Typography variant="h6">{testimonial.name}</Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Student;
