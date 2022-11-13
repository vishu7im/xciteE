import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="personal_text">XcitEducation</div>
        <div className="btn-grp mt-5">
          <div>
            <Link to="/personal" className="btn-1">
              PERSONAL DETAILS
            </Link>
            <div className="bottom_line"></div>
          </div>
          <div>
            <Link to="/education" className="btn-1">
              EDUCATION
            </Link>
          </div>
          <div>
            <Link to="/workexperience" className="btn-1">
              WORK EXPERIENCE
            </Link>
          </div>
          <div>
            <Link to="/certification" className="btn-1">
              CERTIFICATIONS
            </Link>
          </div>
          <div>
            <Link to="/skills" className="btn-1">
              SKILLS
            </Link>
          </div>
          <div>
            <Link to="/profilelink" className="btn-1">
              PROFILE LINKS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
