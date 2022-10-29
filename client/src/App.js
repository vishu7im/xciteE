import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonalDetails from "./pages/candidate/personaldetails/PersonalDetails";
import Register from "./pages/candidate/register/Register";

import Home from "./pages/Home/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/personal" element={<PersonalDetails />} />
      </Routes>
    </Router>
  );
}
