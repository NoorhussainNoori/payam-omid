import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../Contexts/authContext/authContext";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © Payam Omid "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const authContext = useAuth();

  if (!authContext) {
    return <div>Loading...</div>;
  }

  const { userLoggedIn, loading } = authContext;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      setErrorMessage(""); // Reset error message
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        // Extract data from userCredential
        const { user } = userCredential;
        const idToken = await user.getIdToken();
        const data = {
          localId: user.uid,
          email: user.email,
          displayName: user.displayName || "",
          idToken: idToken,
          refreshToken: user.refreshToken,
        };

        // Save the response data to local storage
        localStorage.setItem("user", JSON.stringify(data));
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsSigningIn(false);
      }
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  if (loading) {
    return <div>Signing in...</div>;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      {userLoggedIn && <Navigate to="/dashboard" replace={true} />}
      <Grid
        container
        component="main"
        sx={{ height: "100vh", backgroundColor: "lightgray" }}
      >
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            sx={{
              display: "flex",
              padding: 10,
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 5,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={isSigningIn}
              >
                {isSigningIn ? (
                  <>
                    <CircularProgress
                      size={24}
                      sx={{ color: "white", mr: 2 }}
                    />
                    Loading...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
              {errorMessage && (
                <Typography color="error">{errorMessage}</Typography>
              )}
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
