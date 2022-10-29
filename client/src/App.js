import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import PersonalDetails from "./pages/candidate/personaldetails/PersonalDetails";
import Register from "./pages/candidate/register/Register";
import Home from "./pages/Home/Home";
import ProtectedRoute from "./routes/ProtectedRoute";

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
      </Routes>
    </Router>
  );
}
