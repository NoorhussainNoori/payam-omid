import {
  AppBar,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import logo from "./../../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const menu = [
    { to: "/", text: "Home" },
    { to: "/course", text: "Courses" },
    { to: "/student", text: "Student" },
    { to: "/about", text: "About" },
    { to: "/contact", text: "Contact Us" },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {menu.map((item) => (
          <NavLink
            key={item.text}
            to={item.to}
            style={{ color: "black", textDecoration: "none" }}
          >
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={item.text.toUpperCase()} />
            </ListItemButton>
          </NavLink>
        ))}
      </List>
    </Box>
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [value, setValue] = React.useState(0);

  const handleDonateClick = () => {
    window.open(`https://wa.me/+93779846767`, "_blank");
  };

  return (
    <AppBar
      sx={{
        backgroundColor: "darkred",
        padding: "10px 20px",
      }}
      position="static"
    >
      <Toolbar>
        <Grid container alignItems={"center"}>
          {/* Logo Section */}
          <Grid
            item
            xs={6}
            sm={4}
            md={2}
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Box
              component={"img"}
              src={logo}
              alt="Logo"
              sx={{
                width: { sm: 50, xs: 40 },
                filter: "brightness(0) invert(1)",
                mr: 1,
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontSize: { sm: 18, xs: 14 },
                color: "white",
                fontWeight: "bold",
              }}
            >
              Payam Omid Academy
            </Typography>
          </Grid>

          {/* Center Menu */}
          <Grid
            item
            xs={12}
            sm={8}
            md={8}
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
              justifyContent: "center",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="navbar tabs"
              textColor="inherit"
              indicatorColor="primary"
            >
              {menu.map((item) => (
                <Tab
                  key={item.text}
                  sx={{ color: "white", fontWeight: 600 }}
                  label={
                    <Link
                      to={item.to}
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      {item.text}
                    </Link>
                  }
                />
              ))}
            </Tabs>
          </Grid>

          {/* Donate Button */}
          <Grid
            item
            xs={6}
            sm={4}
            md={2}
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "darkred",
                fontWeight: "bold",
                borderRadius: "20px",
                padding: "5px 15px",
                textTransform: "none",
                ":hover": {
                  backgroundColor: "#ffe6e6",
                },
              }}
              onClick={handleDonateClick}
            >
              Donate
            </Button>
          </Grid>

          {/* Drawer Menu for Mobile */}
          <Grid
            item
            sx={{
              display: {
                xs: "block",
                sm: "none",
              },
              ml: "auto",
            }}
          >
            <IconButton color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              <Box
                sx={{
                  padding: "20px",
                  backgroundColor: "darkred",
                  height: "100%",
                  color: "white",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}
                >
                  Menu
                </Typography>
                <List>
                  {menu.map((item) => (
                    <NavLink
                      key={item.text}
                      to={item.to}
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      <ListItemButton>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary={item.text} />
                      </ListItemButton>
                    </NavLink>
                  ))}
                </List>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "white",
                    color: "darkred",
                    mt: 2,
                    fontWeight: "bold",
                  }}
                  onClick={handleDonateClick}
                >
                  Donate
                </Button>
              </Box>
            </Drawer>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
