import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { WhatsApp } from "@mui/icons-material";
import { motion } from "framer-motion";

const Footer = () => {
  // Animation variants for Framer Motion
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "darkred",
        color: "white",
        padding: "3rem 0",
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Column 1: Logo and Description */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                Payam Omid Online Academy
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mt: 2,
                  lineHeight: 1.8,
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              >
                Empowering students with knowledge to realize their potential.
                We offer a wide range of courses taught by the best educators
                worldwide.
              </Typography>
            </motion.div>
          </Grid>

          {/* Column 2: Navigation Links */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontWeight: "bold",
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                Quick Links
              </Typography>
              <Box
                component="ul"
                sx={{
                  listStyleType: "none",
                  padding: 0,
                  fontSize: "1rem",
                }}
              >
                {["Home", "Courses", "Student", "About Us", "Contact Us"].map(
                  (link, index) => (
                    <li key={index} style={{ marginBottom: "0.5rem" }}>
                      <Link
                        to={`/${link.toLowerCase().replace(" ", "")}`}
                        style={{
                          color: "white",
                          textDecoration: "none",
                          transition: "color 0.3s",
                        }}
                      >
                        {link}
                      </Link>
                    </li>
                  )
                )}
              </Box>
            </motion.div>
          </Grid>

          {/* Column 3: Contact Info and Social Media */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontWeight: "bold",
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                Get in Touch
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: "0.9rem",
                }}
              >
                Email: info@payam-omid.com
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mt: 1,
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: "0.9rem",
                }}
              >
                Phone: +93779846767
              </Typography>

              {/* Social Media Icons */}
              <Box sx={{ mt: 3, display: "flex", gap: "15px" }}>
                <IconButton
                  href="https://www.facebook.com/profile.php?id=100094839379769&mibextid=ZbWKwL"
                  target="_blank"
                  sx={{
                    color: "white",
                    "&:hover": { color: "#4267B2" },
                  }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  href="https://wa.me/93779846767"
                  target="_blank"
                  sx={{
                    color: "white",
                    "&:hover": { color: "#25D366" },
                  }}
                >
                  <WhatsApp />
                </IconButton>
                <IconButton
                  href="https://www.instagram.com/payamomid_academy?igsh=N3R5aW9zMTN1bmIx"
                  target="_blank"
                  sx={{
                    color: "white",
                    "&:hover": { color: "#E1306C" },
                  }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  href="https://linkedin.com"
                  target="_blank"
                  sx={{
                    color: "white",
                    "&:hover": { color: "#2867B2" },
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Footer Bottom Section */}
        <Box
          sx={{
            textAlign: "center",
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            pt: 3,
            mt: 4,
          }}
        >
          <Typography variant="body2" sx={{ mb: 2 }}>
            © {new Date().getFullYear()} Payam Omid Online Academy. All Rights
            Reserved.
          </Typography>

          {/* Login Button */}
          <Button
            variant="contained"
            component={Link}
            to="/login"
            sx={{
              backgroundColor: "white",
              color: "darkred",
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: "20px",
              padding: "10px 30px",
              transition: "all 0.3s",
              ":hover": {
                backgroundColor: "#ffcccc",
              },
            }}
          >
            Login
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
