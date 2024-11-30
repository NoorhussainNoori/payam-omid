import {
  Box,
  Button,
  Checkbox,
  Dialog,
  FormControlLabel,
  FormLabel,
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

const CourseAddition = ({ open, handleClose }) => {
  const [certificate, setCertificate] = useState(false);
  const [description, setDescription] = useState("");
  const [downloadFiles, setDownloadFiles] = useState("");
  const [duration, setDuration] = useState("");
  const [enroll, setEnroll] = useState("");
  const [lesson, setLesson] = useState("");
  const [name, setName] = useState("");
  const [platform, setPlatform] = useState("");
  const [students, setStudents] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [teacher, setTeacher] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const clearForm = () => {
    setCertificate(false);
    setDescription("");
    setDownloadFiles("");
    setDuration("");
    setEnroll("");
    setLesson("");
    setName("");
    setPlatform("");
    setStudents("");
    setSubtitle("");
    setTeacher("");
    setDate("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "courses"), {
        name,
        certificate,
        description,
        downloadFiles,
        duration,
        enroll,
        lesson,
        platform,
        students,
        subtitle,
        teacher,
        date,
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
                Add New Course
              </Typography>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Box component={"form"} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Enter Course Name"
                      variant="outlined"
                      fullWidth
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Course Subtitle"
                      variant="outlined"
                      fullWidth
                      value={subtitle}
                      onChange={(e) => setSubtitle(e.target.value)}
                    />
                  </Grid>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Course Description"
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={4}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </Grid>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Course Teacher"
                      variant="outlined"
                      fullWidth
                      value={teacher}
                      onChange={(e) => setTeacher(e.target.value)}
                    />
                  </Grid>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Course platform"
                      variant="outlined"
                      fullWidth
                      value={platform}
                      onChange={(e) => setPlatform(e.target.value)}
                    />
                  </Grid>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Course Duration"
                      variant="outlined"
                      fullWidth
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                    />
                  </Grid>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Course Attended Students"
                      variant="outlined"
                      fullWidth
                      value={students}
                      onChange={(e) => setStudents(e.target.value)}
                    />
                  </Grid>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Course Downloadable Files"
                      variant="outlined"
                      fullWidth
                      value={downloadFiles}
                      onChange={(e) => setDownloadFiles(e.target.value)}
                    />
                  </Grid>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Course Lessons"
                      variant="outlined"
                      fullWidth
                      value={lesson}
                      onChange={(e) => setLesson(e.target.value)}
                    />
                  </Grid>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Course Start Date"
                      variant="outlined"
                      fullWidth
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </Grid>
                  <Grid
                    item
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    display={"flex"}
                    flexDirection={"column"}
                  >
                    <FormLabel id="demo-radio-buttons-group-label">
                      Certificate
                    </FormLabel>
                    <FormControlLabel
                      required
                      control={
                        <Checkbox
                          checked={certificate}
                          onChange={(e) => setCertificate(e.target.checked)}
                        />
                      }
                      label="Check if Yes"
                    />
                  </Grid>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Course Application Link"
                      variant="outlined"
                      fullWidth
                      value={enroll}
                      onChange={(e) => setEnroll(e.target.value)}
                    />
                  </Grid>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Button
                      variant="contained"
                      type="submit"
                      disabled={loading}
                      startIcon={loading && <CircularProgress size={24} />}
                    >
                      {loading ? "Saving..." : "Add Course"}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Dialog>
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
          Course successfully added!
        </Alert>
      </Snackbar>
    </>
  );
};

export default CourseAddition;
