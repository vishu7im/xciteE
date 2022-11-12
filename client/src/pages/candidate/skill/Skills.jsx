import React from "react";
import "./skills.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Arrow from "../../../Assets/previousicon.png";
import Orange from "../../../Assets/orange_search_bar.png";

const Skills = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid main_container">
      <div className="row">
        <div className="col-lg-3 certification-page-left">
          <div className="row">
            <div className="col-lg-12">
              <div className="certificate_text">XcitEducation</div>
              <div className="btn-grp mt-5">
                <div>
                  <button className="btn-1">PERSONAL DETAILS</button>
                </div>
                <div>
                  <button className="btn-1">EDUCATION</button>
                </div>
                <div>
                  <button className="btn-1">WORK EXPERIENCE</button>
                </div>
                <div>
                  <button className="btn-1">CERTIFICATIONS</button>
                </div>
                <div>
                  <button className="btn-1">SKILLS</button>
                  <div className="bottom_line"></div>
                </div>
                <div>
                  <button className="btn-1">PROFILE LINKS</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-1 prev_icon">
              <img
                src={Arrow}
                alt="arrow"
                onClick={() => navigate("/certification")}
              />
            </div>
            <div className="col-lg-7 add_ur_cert_text mb-5">
              Add your skills and interests
            </div>
            <div className="col-lg-4"></div>
          </div>
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-7 mb-3">
              <div className="skills_input">
                <input
                  type="text"
                  placeholder="eg.python"
                  className="search_bar"
                />
                <div className="search2_img">
                  <img src={Orange} alt="orangebar" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 skills_div">
                <div className="div_skills mt-5">
                  <div className="skills_text">Web Development</div>
                  <div className="skills_text ">Javascript</div>
                  <div className="skills_text">Front-End</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 skills_div">
                <div className="div_skills mt-2">
                  <div className="skills_text">Html</div>
                  <div className="skills_text ">Css</div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-8 next_div"></div>
              <div className="col-lg-2">
                <button className="btn-edu-next">next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
