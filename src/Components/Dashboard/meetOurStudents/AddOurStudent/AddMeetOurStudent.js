import {
  Box,
  Button,
  Dialog,
  Grid,
  TextField,
  Typography,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import { db } from "../../../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const AddMeetOurStudent = ({ open, handleClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const clearForm = () => {
    setDescription("");
    setName("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "student"), {
        name,
        description,
      });
      setLoading(false);
      setSuccess(true);
      clearForm();
    } catch (error) {
      setLoading(false);
      console.error("Error adding document: ", error);
    }
  };

  const handleCloseSuccess = () => {
    setSuccess(false);
  };

  return (
    <>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box
          height={"90vh"}
          display={"flex"}
          padding={4}
          sx={{
            width: {
              lg: "28vw",
              xl: "28vw",
              md: "40vw",
              sm: "40vw",
              xs: "40vw",
            },
          }}
        >
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography variant="h5" color={"darkred"}>
                Add New Student
              </Typography>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Box component={"form"} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  {/* Student Name */}
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Enter Student Name"
                      variant="outlined"
                      fullWidth
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>

                  {/* Student Description */}
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Student Comment"
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={4}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </Grid>

                  {/* Submit Button */}
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Button
                      variant="contained"
                      type="submit"
                      disabled={loading}
                      startIcon={loading && <CircularProgress size={24} />}
                    >
                      {loading ? "Saving..." : "Add Student"}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Dialog>

      {/* Success Snackbar */}
      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={handleCloseSuccess}
      >
        <Alert
          onClose={handleCloseSuccess}
          severity="success"
          sx={{ width: "100%" }}
          icon={<span>✔️</span>}
        >
          Student successfully added!
        </Alert>
      </Snackbar>
    </>
  );
};

export default AddMeetOurStudent;
