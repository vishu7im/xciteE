import React, { useState } from "react";
import "./certification.css";
import Arrow from "../../../Assets/previousicon.png";
import Plus from "../../../Assets/plus.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";

const Certification = () => {
  const navigate = useNavigate();
  const { token } = AuthContext();
  const [data, setData] = useState({
    name: "",
    organization: "",
    start: "",
    end: "",
    link: "",
  });

  const handleCertificationData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submit = async () => {
    debugger;
    const { name, organization, start, end, link } = data;
    if (!name || !organization || !start || !end || !link) {
      alert("please fill data");
      return;
    }
    const url = `${process.env.REACT_APP_API_KEY}/candidate/certificate`;

    try {
      const { data } = await axios.post(
        url,
        {
          name,
          organization,
          start,
          end,
          link,
        },
        {
          headers: {
            token: token,
          },
        }
      );
      setData({
        name: "",
        organization: "",
        start: "",
        end: "",
        link: "",
      });
      navigate("/skills");
    } catch (error) {
      alert(error.message);
    }
  };
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
                  <div className="bottom_line"></div>
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
                onClick={() => navigate("/workexperience")}
              />
            </div>
            <div className="col-lg-7 add_ur_cert_text mb-5">
              Add your certifications/awards
            </div>
            <div className="col-lg-4"></div>
          </div>
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-5 mb-3">
              <div>
                <div className="text-cert">Name of course/accomplishments</div>
                <input
                  type="text"
                  className="input-control"
                  name="name"
                  value={data.name}
                  onChange={handleCertificationData}
                />
              </div>
              <div className="col-lg-4"></div>
            </div>

            <div className="row mb-3">
              <div className="col-lg-3"></div>
              <div className="col-lg-5">
                <div className="text-cert">Name of the organisation</div>
                <input
                  type="email"
                  className="input-control"
                  name="organization"
                  value={data.organization}
                  onChange={handleCertificationData}
                />
              </div>

              <div className="col-lg-4"></div>
            </div>

            <div className="row mb-3">
              <div className="col-lg-3"></div>
              <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-2">
                  <div className="text-cert">Start Date</div>
                  <input
                    type="date"
                    className="input-control"
                    name="start"
                    value={data.start}
                    onChange={handleCertificationData}
                  />
                </div>
                <div className="col-lg-2">
                  <div className="text-cert">End Date</div>
                  <input
                    type="date"
                    className="input-control"
                    name="end"
                    value={data.end}
                    onChange={handleCertificationData}
                  />
                </div>
              </div>

              <div className="col-lg-4"></div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-3"></div>
              <div className="col-lg-5">
                <div className="text-cert">Certificate link</div>
                <input
                  type="text"
                  className="input-control"
                  name="link"
                  value={data.link}
                  onChange={handleCertificationData}
                />
              </div>

              <div className="col-lg-4"></div>
            </div>

            <div className="row">
              <div className="col-lg-7"></div>
              <div className="col-lg-2">
                <button className="btn-edu-next" onClick={submit}>
                  Add
                </button>
              </div>
              <div className="col-lg-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Certification;
