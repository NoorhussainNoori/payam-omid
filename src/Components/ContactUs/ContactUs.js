import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  CircularProgress,
  Alert,
} from "@mui/material";
import { db } from "../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { motion } from "framer-motion";

// Framer Motion Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "contacts"), formData);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setLoading(false);
    } catch (err) {
      setError("There was an issue submitting the form. Please try again.");
      setLoading(false);
    }
  };

  return (
    <Container sx={{ mt: 8 }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        style={{ textAlign: "center", marginBottom: "40px" }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            color: "darkred",
            mb: 3,
            fontSize: { xs: "2rem", md: "3rem" },
          }}
        >
          Contact Us
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.2rem",
            color: "rgba(0,0,0,0.7)",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: 1.8,
          }}
        >
          We would love to hear from you! Please fill out the form below, and we
          will get in touch with you shortly.
        </Typography>
      </motion.div>

      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          {/* Form Submission */}
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                background: "rgba(255, 255, 255, 0.9)",
                p: 5,
                borderRadius: "20px",
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(10px)",
                mb: 5,
              }}
            >
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      backgroundColor: "#f9f9f9",
                      borderRadius: 2,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Your Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      backgroundColor: "#f9f9f9",
                      borderRadius: 2,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Your Message"
                    name="message"
                    multiline
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      backgroundColor: "#f9f9f9",
                      borderRadius: 2,
                    }}
                  />
                </Grid>
              </Grid>

              {/* Success or Error Messages */}
              {loading && (
                <Box sx={{ mt: 4, textAlign: "center" }}>
                  <CircularProgress color="primary" />
                </Box>
              )}
              {success && (
                <Alert sx={{ mt: 4 }} severity="success">
                  Your message has been successfully sent!
                </Alert>
              )}
              {error && (
                <Alert sx={{ mt: 4 }} severity="error">
                  {error}
                </Alert>
              )}

              {/* Submit Button */}
              <Box sx={{ mt: 4, textAlign: "center" }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "darkred",
                    color: "#fff",
                    px: 5,
                    py: 1.5,
                    fontSize: "1.1rem",
                    "&:hover": {
                      backgroundColor: "#a80000",
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
