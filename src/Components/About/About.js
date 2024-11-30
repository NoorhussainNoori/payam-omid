import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School"; // For Mission
import VisibilityIcon from "@mui/icons-material/Visibility"; // For Vision
import FlagIcon from "@mui/icons-material/Flag"; // For Objectives
import GroupWorkIcon from "@mui/icons-material/GroupWork"; // For Community

// Animation for sections
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <Container sx={{ mt: 8 }}>
      <Grid container spacing={12}>
        {/* About Us Section */}
        <Grid item xs={12}>
          <motion.div initial="hidden" whileInView="visible" variants={fadeIn}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "darkred",
                mb: 4,
                textAlign: "center",
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "rgba(0,0,0,0.7)",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              Payam Omid Online Academy was established to provide free
              education to the youth of Afghanistan who have been deprived of
              their fundamental right to education. Managed by progressive and
              benevolent individuals, we place great importance on education and
              youth development. Our mission is to create a brighter future for
              young people through free, high-quality education.
            </Typography>
          </motion.div>
        </Grid>

        {/* Mission Section */}
        <Grid item xs={12}>
          <Grid container spacing={6} alignItems="center">
            {/* Mission Icon */}
            <Grid item xs={12} md={2}>
              <motion.div whileHover={{ scale: 1.1 }}>
                <SchoolIcon
                  sx={{
                    fontSize: "5rem",
                    color: "darkred",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
              </motion.div>
            </Grid>

            {/* Mission Text */}
            <Grid item xs={12} md={10}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
              >
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "darkred", mb: 2 }}
                >
                  Mission
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                    color: "rgba(0,0,0,0.7)",
                  }}
                >
                  Our mission at Payam Omid Online Academy is to provide free,
                  high-quality education to the youth of Afghanistan, especially
                  girls who are deprived of their fundamental right to
                  education. We aim to equip our generation with the knowledge
                  and skills needed to build a brighter future, fostering
                  resilience, hope, and progress in their communities.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>

        {/* Vision Section */}
        <Grid item xs={12}>
          <Grid container spacing={6} alignItems="center">
            {/* Vision Icon */}
            <Grid item xs={12} md={2}>
              <motion.div whileHover={{ scale: 1.1 }}>
                <VisibilityIcon
                  sx={{
                    fontSize: "5rem",
                    color: "darkred",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
              </motion.div>
            </Grid>

            {/* Vision Text */}
            <Grid item xs={12} md={10}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
              >
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "darkred", mb: 2 }}
                >
                  Vision
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                    color: "rgba(0,0,0,0.7)",
                  }}
                >
                  Our vision is to empower every young person with access to
                  education, enabling them to realize their full potential and
                  drive positive change.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>

        {/* Objectives Section */}
        <Grid item xs={12}>
          <Grid container spacing={6} alignItems="center">
            {/* Objectives Icon */}
            <Grid item xs={12} md={2}>
              <motion.div whileHover={{ scale: 1.1 }}>
                <FlagIcon
                  sx={{
                    fontSize: "5rem",
                    color: "darkred",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
              </motion.div>
            </Grid>

            {/* Objectives Text */}
            <Grid item xs={12} md={10}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
              >
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "darkred", mb: 2 }}
                >
                  Objectives
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                    color: "rgba(0,0,0,0.7)",
                  }}
                >
                  <ul>
                    <li>
                      To provide free educational resources and support to young
                      people worldwide.
                    </li>
                    <li>
                      To create a safe and nurturing learning environment.
                    </li>
                    <li>
                      To advocate for youth education and raise awareness of its
                      importance.
                    </li>
                    <li>
                      To build partnerships with local and international
                      organizations to amplify our impact.
                    </li>
                    <li>
                      To continuously improve our educational programs through
                      feedback and research.
                    </li>
                  </ul>
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>

        {/* Community Focus Section */}
        <Grid item xs={12}>
          <Grid container spacing={6} alignItems="center">
            {/* Community Icon */}
            <Grid item xs={12} md={2}>
              <motion.div whileHover={{ scale: 1.1 }}>
                <GroupWorkIcon
                  sx={{
                    fontSize: "5rem",
                    color: "darkred",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
              </motion.div>
            </Grid>

            {/* Community Text */}
            <Grid item xs={12} md={10}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
              >
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "darkred", mb: 2 }}
                >
                  Community Focus
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                    color: "rgba(0,0,0,0.7)",
                  }}
                >
                  We also focus on community building and creating a safe and
                  supportive environment for youth to confidently and
                  enthusiastically pursue their academic and personal goals. We
                  invite everyone who is interested in supporting this mission
                  to join us and accompany us on this journey. Thank you for
                  your support and partnership.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
