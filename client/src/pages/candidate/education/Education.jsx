import React from "react";
import "./education.css";
import Arrow from "../../../Assets/previousicon.png";
import Plus from "../../../Assets/plus.png";

const Education = () => {
  return (
    <div className="container-fluid main_container">
      <div className="row">
        <div className="col-lg-3 education-page-left">
          <div className="row">
            <div className="col-lg-12">
              <div className="education_text">XcitEducation</div>
              <div className="btn-grp mt-5">
                <div>
                  <button className="btn-1">PERSONAL DETAILS</button>
                </div>
                <div>
                  <button className="btn-1">EDUCATION</button>
                  <div className="bottom_line"></div>
                </div>

                <div>
                  <button className="btn-1">WORK EXPERIENCE</button>
                </div>
                <div>
                  <button className="btn-1">CERTIFICATIONS</button>
                </div>
                <div>
                  <button className="btn-1">SKILLS</button>
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
              <img src={Arrow} alt="arrow" />
            </div>
            <div className="col-lg-7 edu_text">
              Add your educational details
            </div>
            <div className="col-lg-4"></div>
          </div>
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-5 mt-4">
              <div className="edu_div">
                <div className="text-edu">Course/Degree</div>
                <input type="text" className="form-control" />
              </div>
              <div className="col-lg-4"></div>
            </div>

            <div className="row mb-4">
              <div className="col-lg-3"></div>
              <div className="col-lg-4">
                <div className="text-edu">Name of school/college</div>
                <input type="email" className="form-control" />
              </div>

              <div className="col-lg-4"></div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-3"></div>
              <div className="col-lg-4">
                <div className="text-edu">Year Of Passing</div>
                <input type="email" className="form-control" />
              </div>

              <div className="col-lg-4"></div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-3"></div>
              <div className="col-lg-3" style={{ textAlign: "left" }}>
                <img src={Plus} alt="plus" />
                <button className="btn_school">ADD SCHOOL</button>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-10"></div>
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
export default Education;
