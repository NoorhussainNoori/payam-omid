import React, { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig"; // Import Firestore configuration

const ContactDataTable = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch contact form data from Firestore
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "contacts"));
        const contactList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContacts(contactList);
      } catch (err) {
        setError("Failed to fetch contacts.");
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

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

  if (error) {
    return (
      <Container>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 8 }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
        Contact Form Submissions
      </Typography>

      {/* Table to display contacts */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Name</strong>
              </TableCell>
              <TableCell>
                <strong>Email</strong>
              </TableCell>
              <TableCell>
                <strong>Message</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.length > 0 ? (
              contacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell>{contact.name}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>{contact.message}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  No contact form submissions found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ContactDataTable;
