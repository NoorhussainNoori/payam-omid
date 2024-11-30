import { Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CourseAddition from "./CourseAdditionComponent/CourseAddition";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import SweetAlert2 from "react-sweetalert2";

const AddCourse = () => {
  const [open, setOpen] = useState(false);
  const [row, setRow] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [swalProps, setSwalProps] = useState({});

  const courseCollectionRef = collection(db, "courses");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (id) => {
    setSwalProps({
      show: true,
      title: "Are you sure?",
      text: "Do you really want to delete this course?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      onConfirm: () => {
        // Perform the delete action here
        deleteDoc(doc(db,'courses', id))
        // Close the alert and reset the state
        resetSwal();
      },
      didClose: () => {
        // Ensure the state is reset when the alert is closed, even if canceled
        resetSwal();
      }
    });
  };
  
  const resetSwal = () => {
    setSwalProps({}); // Reset swalProps to an empty state
  };

  useEffect(() => {
    const loadCourse = async () => {
      try {
        const coursesData = await getDocs(courseCollectionRef);
        if (!coursesData.empty) {
          const coursesList = coursesData.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          });
          setRow(coursesList);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadCourse();
  }, [courseCollectionRef]);

  return (
    <Container>
      {!loading && error && <Typography color="error">{error}</Typography>}
      <Grid container spacing={2}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Button variant="contained" onClick={handleClickOpen}>
            Add New Course
          </Button>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Course Name</TableCell>
                  <TableCell>Subtitle</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Teacher</TableCell>
                  <TableCell>Platform</TableCell>
                  <TableCell>Duration</TableCell>
                  <TableCell>Students</TableCell>
                  <TableCell>Downloadable Files</TableCell>
                  <TableCell>Lesson</TableCell>
                  <TableCell>Certificate</TableCell>
                  <TableCell>Enroll Link</TableCell>
                  <TableCell colSpan={2} align="center">
                    <Typography variant="h4">Action</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {row.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.subtitle}</TableCell>
                    <TableCell align="left">
                      {row.description.slice(0, 60) + "..."}
                    </TableCell>
                    <TableCell align="left">{row.teacher}</TableCell>
                    <TableCell align="left">{row.platform}</TableCell>
                    <TableCell align="left">{row.duration}</TableCell>
                    <TableCell align="left">{row.students}</TableCell>
                    <TableCell align="left">{row.downloadFiles}</TableCell>
                    <TableCell align="left">{row.lesson}</TableCell>
                    <TableCell align="left">
                      {row.certificate ? "✔" : "X"}
                    </TableCell>
                    <TableCell align="left">{row.enroll}</TableCell>
                    <TableCell align="left">
                      <Button variant="contained">Edit</Button>
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        sx={{ bgcolor: "red", color: "white" }}
                        onClick={() => {
                          handleDelete(row.id);
                        }}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <CourseAddition open={open} handleClose={handleClose} />
      <SweetAlert2 {...swalProps} />
    </Container>
  );
};

export default AddCourse;
