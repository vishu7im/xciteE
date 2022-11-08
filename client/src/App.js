import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import PersonalDetails from "./pages/candidate/personaldetails/PersonalDetails";
import Register from "./pages/candidate/register/Register";
import Home from "./pages/Home/Home";
import ProtectedRoute from "./routes/ProtectedRoute";
import Education from "./pages/candidate/education/Education";
import WorkExperience from "./pages/candidate/workexperience/Workexperience";

export default function App() {
  const { user } = AuthContext();
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />

        <Route
          exact
          path="/personal"
          element={
            <ProtectedRoute user={user}>
              <PersonalDetails />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/education"
          element={
            <ProtectedRoute user={user}>
              <Education />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/workexperience"
          element={
            <ProtectedRoute user={user}>
              <WorkExperience />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
