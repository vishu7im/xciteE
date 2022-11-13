import React, { useState } from "react";
import axios from "axios";

import "./education.css";
import Arrow from "../../../Assets/previousicon.png";
import Plus from "../../../Assets/plus.png";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import Navbar from "../../../components/navbar/Navbar";

const Education = () => {
  const location = useLocation();
  const { token } = AuthContext();
  const navigate = useNavigate();
  const [educationData, seteducationData] = useState({
    course: "",
    collage: "",
    year: "",
  });
  const handleEducationData = (e) => {
    const { name, value } = e.target;
    seteducationData({ ...educationData, [name]: value });
  };

  const submitEducationData = async () => {
    //debugger;
    const { course, collage, year } = educationData;
    if (!collage || !year || !course) {
      alert("fill data ");
      return;
    }
    const url = `${process.env.REACT_APP_API_KEY}/candidate/education`;
    try {
      const { data } = await axios.post(
        url,
        {
          course,
          year,
          collage,
        },
        {
          headers: {
            token: token,
          },
        }
      );
      seteducationData({
        course: "",
        year: "",
        collage: "",
      });

      alert("one school added");
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  const submitNext = () => {
    navigate("/workexperience");
  };
  return (
    <div className="container-fluid main_container">
      <div className="row">
        <div className="col-lg-3 education-page-left">
          <Navbar />
        </div>
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-1 prev_icon">
              <img
                src={Arrow}
                alt="arrow"
                onClick={() => navigate("/personal")}
              />
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
                <input
                  type="text"
                  name="course"
                  className="form-control"
                  onChange={handleEducationData}
                  value={educationData.course}
                />
              </div>
              <div className="col-lg-4"></div>
            </div>

            <div className="row mb-4">
              <div className="col-lg-3"></div>
              <div className="col-lg-4">
                <div className="text-edu">Name of school/college</div>
                <input
                  type="text"
                  name="collage"
                  className="form-control"
                  onChange={handleEducationData}
                  value={educationData.collage}
                />
              </div>

              <div className="col-lg-4"></div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-3"></div>
              <div className="col-lg-4">
                <div className="text-edu">Year Of Passing</div>
                <input
                  type="text"
                  name="year"
                  className="form-control"
                  onChange={handleEducationData}
                  value={educationData.year}
                />
              </div>

              <div className="col-lg-4"></div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-3"></div>
              <div className="col-lg-3" style={{ textAlign: "left" }}>
                <img src={Plus} alt="plus" />
                <button className="btn_school" onClick={submitEducationData}>
                  ADD SCHOOL
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-10"></div>
              <div className="col-lg-2">
                <button className="btn-edu-next" onClick={submitNext}>
                  next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
