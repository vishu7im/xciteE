import React, { useState } from "react";
import "./profilelink.css";
import { FiLink } from "react-icons/fi";
import { FaBehanceSquare, FaLinkedin } from "react-icons/fa";
import axios from "axios";
import Arrow from "../../../Assets/previousicon.png";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";

const ProfileLinks = () => {
  const navigate = useNavigate();
  const { token } = AuthContext();
  const [data, setData] = useState({
    linkedin: "",
    binance: "",
    portfolio: "",
  });
  const handleData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const submit = async () => {
    const { portfolio, binance, linkedin } = data;
    if (!portfolio || !binance || !linkedin) {
      alert("fill data ");
      return;
    }
    const url = `${process.env.REACT_APP_API_KEY}/candidate/ProfileLink`;
    try {
      const { data } = await axios.post(
        url,
        {
          portfolio,
          binance,
          linkedin,
        },
        {
          headers: {
            token: token,
          },
        }
      );
      setData({
        linkedin: "",
        binance: "",
        portfolio: "",
      });
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container-fluid main_container">
      <div className="row">
        <div className="col-lg-3 certification-page-left">
          <Navbar status={"Link"} />
        </div>
        <div className="col-lg-9">
          <div className="row ">
            <div className="col-lg-2">
              <div className="prev_icon">
                <img
                  src={Arrow}
                  alt="arrow"
                  onClick={() => navigate("/skills")}
                />
              </div>
            </div>
            <div className="col-lg-6 ">
              <p className="profile_text1"> Add Links to your profiles</p>
              <div className="row">
                <div className="col-lg-12">
                  <div className="links_div">
                    <span className="in_icon">
                      <FaLinkedin />
                      <p className="link_text">Linkedin Profile</p>
                    </span>

                    <div>
                      <input
                        type="text"
                        className="input-control"
                        name="linkedin"
                        onChange={handleData}
                        value={data.linkedin}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="links_div">
                    <span className="in_icon">
                      <FaBehanceSquare />
                      <p className="link_text">Behance profile</p>
                    </span>

                    <div>
                      <input
                        type="text"
                        className="input-control"
                        name="binance"
                        onChange={handleData}
                        value={data.binance}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="links_div">
                    <span className="in_icon">
                      <FiLink />
                      <p className="link_text">portfolio link</p>
                    </span>

                    <div>
                      <input
                        type="text"
                        className="input-control"
                        name="portfolio"
                        onChange={handleData}
                        value={data.portfolio}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1">
              <div className="row">
                <div className="col-lg-12 btn_done">
                  <button
                    className="btn_text"
                    style={{ fontWeight: "bold" }}
                    onClick={submit}
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileLinks;
