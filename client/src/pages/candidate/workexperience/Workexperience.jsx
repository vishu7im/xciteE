import React, { useState } from "react";
import "./workexperience.css";
import axios from "axios";
import Arrow from "../../../Assets/previousicon.png";
import Plus from "../../../Assets/plus.png";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const WorkExperience = () => {
  const navigate = useNavigate();
  const { token } = AuthContext();

  const [workData, setworkData] = useState({
    jobtitle: "",
    name: "",
    location: "",
    start: "",
    end: "",
  });

  const handleWorkData = (e) => {
    const { name, value } = e.target;
    setworkData({ ...workData, [name]: value });
  };
  const submit = async () => {
    //debugger;
    const { jobtitle, name, location, start, end } = workData;
    if (!jobtitle || !name || !location || !start || !end) {
      alert("fill data");
      return;
    }
    const url = `${process.env.REACT_APP_API_KEY}/candidate/workExperience`;

    try {
      const { data } = await axios.post(
        url,
        {
          jobtitle,
          name,
          location,
          start,
          end,
        },
        {
          headers: {
            token: token,
          },
        }
      );
      alert("data submitted!!");
    } catch (error) {
      alert(error.message);
    }
  };
  const goToNext = () => {
    navigate("/certification");
  };
  return (
    <div className="container-fluid main_container">
      <div className="row">
        <div className="col-lg-3 work-page-left">
          <div className="row">
            <div className="col-lg-12">
              <div className="work_text">XcitEducation</div>
              <div className="btn-grp mt-5">
                <div>
                  <button className="btn-1">PERSONAL DETAILS</button>
                </div>
                <div>
                  <button className="btn-1">EDUCATION</button>
                </div>
                <div>
                  <button className="btn-1">WORK EXPERIENCE</button>
                  <div className="bottom_line"></div>
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
              <img
                src={Arrow}
                alt="arrow"
                onClick={() => navigate("/education")}
              />
            </div>
            <div className="col-lg-7 add_ur_work_text">
              Add your work experience
            </div>
            <div className="col-lg-4"></div>
          </div>
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-3 mb-3">
              <div>
                <div className="text-work">Job Title</div>
                <input
                  type="text"
                  className="form-control"
                  name="jobtitle"
                  onChange={handleWorkData}
                  value={workData.jobtitle}
                />
              </div>
              <div className="col-lg-6"></div>
            </div>

            <div className="row mb-3">
              <div className="col-lg-3"></div>
              <div className="col-lg-5">
                <div className="text-work">Name of the organisation</div>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={handleWorkData}
                  value={workData.name}
                />{" "}
              </div>

              <div className="col-lg-4"></div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-3"></div>
              <div className="col-lg-3">
                <div className="text-work">Location</div>
                <input
                  type="text"
                  className="form-control"
                  name="location"
                  onChange={handleWorkData}
                  value={workData.location}
                />
              </div>

              <div className="col-lg-6"></div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-3"></div>
              <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-2">
                  <div className="text-work">Start Date</div>
                  <input
                    type="date"
                    className="form-control"
                    name="start"
                    onChange={handleWorkData}
                    value={workData.start}
                  />
                </div>
                <div className="col-lg-2">
                  <div className="text-work">End Date</div>
                  <input
                    type="date"
                    className="form-control"
                    name="end"
                    onChange={handleWorkData}
                    value={workData.end}
                  />
                </div>
              </div>

              <div className="col-lg-4"></div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-3"></div>
              <div className="col-lg-3" style={{ textAlign: "left" }}>
                <img src={Plus} alt="plus" />
                <button className="btn_school" onClick={() => submit()}>
                  ADD EXPERIENCE
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-7"></div>
              <div className="col-lg-2">
                <button className="btn-edu-next" onClick={goToNext}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkExperience;
