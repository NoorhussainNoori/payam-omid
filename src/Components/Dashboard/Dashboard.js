import { TabContext, TabList, TabPanel } from "@mui/lab";
import { auth } from "../../firebaseConfig";
import { Box, Container, Tab } from "@mui/material";
import { useState } from "react";
import AddCourse from "./addCourse/AddCourse";
import AddStudent from "./addStudent/AddStudent";
import MeetOurStudents from "./meetOurStudents/MeetOurStudents";
import ContactDataTable from "./Contactus/ContactDataTable";

const Dashboard = () => {
  const signOut = () => {
    return auth.signOut();
  };
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Courses" value="1" />
              <Tab label="Featured Students" value="2" />
              <Tab label="Meet our Students" value="3" />
              <Tab label="Contact Us" value="4" />

              <Tab label="Log Out" onClick={signOut} />
            </TabList>
          </Box>
          <TabPanel value="1">
            <AddCourse />
          </TabPanel>
          <TabPanel value="2">
            <AddStudent />
          </TabPanel>
          <TabPanel value="3">
            <MeetOurStudents />
          </TabPanel>
          <TabPanel value="4">
            <ContactDataTable />
          </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
};

export default Dashboard;
