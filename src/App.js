import React from "react";
import Nav from "./Components/Layout/Nav/Nav";
import { Outlet } from "react-router-dom";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import Footer from "./Components/Layout/Footer/Footer";
import '@fontsource/poppins';
const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: 'Poppins',
      h3: {
        color:'darkred'
      }
    }
  })
  return (
    
    <ThemeProvider theme={theme}>
      <Nav />
     
      <Box marginTop={15} marginBottom={15}>
        <Outlet />
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
