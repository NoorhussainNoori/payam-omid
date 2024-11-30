import {
  Box,
  Button,
  Dialog,
  FormControl,
  FormLabel,
  Grid,
  RadioGroup,
  Radio,
  FormControlLabel,
  TextField,
  Typography,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import { db } from "../../../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const AddFeaturedStudent = ({ open, handleClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [alignment, setAlignment] = useState("left"); // "left" or "right"
  const [gender, setGender] = useState("girl"); // "boy" or "girl"
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const clearForm = () => {
    setAlignment("left");
    setGender("girl");
    setDescription("");
    setName("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "featuredstudents"), {
        name,
        description,
        right: alignment === "right", // true if alignment is right
        isBoy: gender === "boy", // true if gender is boy
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
                Add New Featured Student
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

                  {/* Alignment Radio Buttons */}
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Text Alignment</FormLabel>
                      <RadioGroup
                        row
                        value={alignment}
                        onChange={(e) => setAlignment(e.target.value)}
                      >
                        <FormControlLabel
                          value="left"
                          control={<Radio />}
                          label="Left"
                        />
                        <FormControlLabel
                          value="right"
                          control={<Radio />}
                          label="Right"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>

                  {/* Gender Radio Buttons */}
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">
                        Is the student a boy?
                      </FormLabel>
                      <RadioGroup
                        row
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <FormControlLabel
                          value="boy"
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="girl"
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
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

export default AddFeaturedStudent;
