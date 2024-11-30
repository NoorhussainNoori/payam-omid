import {
  Button,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import React from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { useEffect, useState } from "react";
import SweetAlert2 from "react-sweetalert2";
import AddMeetOurStudent from "./AddOurStudent/AddMeetOurStudent";

const MeetOurStudents = () => {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [error, setError] = useState([]);
  const [swalProps, setSwalProps] = useState({});

  const resetSwal = () => {
    setSwalProps({}); // Reset swalProps to an empty state
  };

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
      text: "Do you really want to delete this Student?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      onConfirm: () => {
        // Perform the delete action here
        deleteDoc(doc(db, "student", id));
        // Close the alert and reset the state
        resetSwal();
      },
      didClose: () => {
        // Ensure the state is reset when the alert is closed, even if canceled
        resetSwal();
      },
    });
  };
  //  students collection
  const students = collection(db, "student");

  useEffect(() => {
    const loadFeaturedStudent = async () => {
      try {
        const studentData = await getDocs(students);
        if (!studentData.empty) {
          const StudentDataList = studentData.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          });
          setRows(StudentDataList);
        }
      } catch (error) {
        setError(error);
      }
    };
    loadFeaturedStudent();
  }, []);

  return (
    <Container>
      <Grid container>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography variant="h3"> Students</Typography>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Button variant="contained" onClick={handleClickOpen}>
            Add New Student
          </Button>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Student Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell colSpan={2} align="center">
                    <Typography variant="h4">Action</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">
                      {row.description.slice(0, 60) + "..."}
                    </TableCell>
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
      <AddMeetOurStudent open={open} handleClose={handleClose} />
      <SweetAlert2 {...swalProps} />
    </Container>
  );
};

export default MeetOurStudents;
