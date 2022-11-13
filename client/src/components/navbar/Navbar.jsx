import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ status }) => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="personal_text">XcitEducation</div>
        <div className="btn-grp mt-5">
          <div>
            <Link
              to="/personal"
              className={`btn-1 ${status === "Persnoal" ? "active" : ""}`}
            >
              PERSONAL DETAILS
            </Link>
          </div>
          <div>
            <Link
              to="/education"
              className={`btn-1 ${status === "Education" ? "active" : ""}`}
            >
              EDUCATION
            </Link>
          </div>
          <div>
            <Link
              to="/workexperience"
              className={`btn-1 ${status === "Exp" ? "active" : ""}`}
            >
              WORK EXPERIENCE
            </Link>
          </div>
          <div>
            <Link
              to="/certification"
              className={`btn-1 ${status === "Certificate" ? "active" : ""}`}
            >
              CERTIFICATIONS
            </Link>
          </div>
          <div>
            <Link
              to="/skills"
              className={`btn-1 ${status === "Skill" ? "active" : ""}`}
            >
              SKILLS
            </Link>
          </div>
          <div>
            <Link
              to="/profilelink"
              className={`btn-1 ${status === "Link" ? "active" : ""}`}
            >
              PROFILE LINKS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
