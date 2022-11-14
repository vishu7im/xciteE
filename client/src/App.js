import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import PersonalDetails from "./pages/candidate/personaldetails/PersonalDetails";
import Register from "./pages/candidate/register/Register";
import ProtectedRoute from "./routes/ProtectedRoute";
import Education from "./pages/candidate/education/Education";
import WorkExperience from "./pages/candidate/workexperience/Workexperience";
import Skills from "./pages/candidate/skill/Skills";
import Certification from "./pages/candidate/certification/Certification";

import ProfileLinks from "./pages/candidate/profilelinks/Profilelinks";
import LoginPrompt from "./pages/candidate/loginprompt/Loginprompt";
import Mainpage from "./pages/candidate/mainpage/Mainpage";
import Navbar from "./components/navbar/Navbar";
import Autocomplete from "./components/test2";

export default function App() {
  const { user } = AuthContext();
  return (
    <Router>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/loginprompt" element={<LoginPrompt />} />
        <Route exact path="/" element={<Mainpage />} />
        <Route exact path="/navbar" element={<Navbar />} />

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
        <Route
          exact
          path="/skills"
          element={
            <ProtectedRoute user={user}>
              <Skills />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/certification"
          element={
            <ProtectedRoute user={user}>
              <Certification />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/profilelink"
          element={
            <ProtectedRoute user={user}>
              <ProfileLinks />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
