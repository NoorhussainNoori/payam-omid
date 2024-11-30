import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Courses from "./Components/Courses/Courses";
import CourseDetails from "./Components/Courses/CourseDetails/CourseDetails";
import Student from "./Components/Student/Student";
import SignIn from "./Components/SignIn/SignIn";
import Dashboard from "./Components/Dashboard/Dashboard";
import {
  AuthProvider,
  useAuth,
} from "./Components/Contexts/authContext/authContext";
import ContactUs from "./Components/ContactUs/ContactUs";

const PrivateRoute = ({ children }) => {
  const { userLoggedIn } = useAuth();
  return userLoggedIn ? children : <Navigate to="/login" />;
};

const RouterList = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/coursedetails/:id" element={<CourseDetails />} />
          <Route path="/student" element={<Student />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </AuthProvider>
  );
};

export default RouterList;
