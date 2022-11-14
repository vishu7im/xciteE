import React, { useState } from "react";
import "./Register.css";
import Girl from "../../../Assets/mainpage.png";
import "./Register.css";
import { FcGoogle } from "react-icons/fc";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const navigate = useNavigate();
  const [inputdata, setinputdata] = useState({
    pwd: "",
    firstname: "",
    lastname: "",
    email: "",
  });

  const inputhandle = (e) => {
    const { value, name } = e.target;
    setinputdata({ ...inputdata, [name]: value });
  };

  const signup = async () => {
    const { pwd, firstname, lastname, email } = inputdata;
    if (!pwd || !firstname || !lastname || !email) {
      alert("fill data ");
      return;
    }

    const url = `${process.env.REACT_APP_API_KEY}/candidate/signup`;
    try {
      const { data } = await axios.post(url, {
        pwd,
        firstname,
        lastname,
        email,
      });

      setinputdata({
        pwd: "",
        firstname: "",
        lastname: "",
        email: "",
      });
      localStorage.setItem("user", data.token);
      alert("user signup");
      navigate("/personal");
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  return (
    <div className="container-fluid main_container">
      <div className="row">
        <div className="col-lg-4 register-page-left">
          <div className="row">
            <div className="col-lg-8">
              <div className="main_text">XcitEducation</div>
            </div>
            <div className="col-lg-4"></div>
          </div>
          <div className="row">
            <div className="col-lg-12 registerpage_img">
              <img src={Girl} style={{ width: "450px" }} />
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-6 text_started">Let’s get started.</div>
            <div className="col-lg-5"></div>
          </div>

          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-4 input_first">
              <div className="first_name"> First Name</div>

              <input
                className="form-control"
                type="text"
                name="firstname"
                id="fname"
                value={inputdata.firstname}
                onChange={inputhandle}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="last_name"> Last Name</div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-4 lastname_text_input">
              <input
                className="form-control"
                type="text"
                name="lastname"
                id="lname"
                value={inputdata.lastname}
                onChange={inputhandle}
              />
            </div>
            <div className="col-lg-1 div_or">OR</div>
            <div className="col-lg-3">
              <button className="google_btn">
                Sign Up with Google
                <span className="google_icon">
                  <FcGoogle />
                </span>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-4 input_first">
              <div className="Email_name"> Email</div>

              <input
                className="form-control"
                type="text"
                name="email"
                id="email"
                value={inputdata.email}
                onChange={inputhandle}
              />
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-2"></div>
          </div>
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-4 input_first">
              <div className="first_name"> Password</div>
              <input
                className="form-control"
                type="text"
                name="pwd"
                id="pwd"
                value={inputdata.pwd}
                onChange={inputhandle}
              />
            </div>

            <div className="col-lg-1"></div>
            <div className="col-lg-2"></div>
          </div>
          <div className="row btn_row">
            <button
              className="signup_btn mt-5"
              style={{ width: "100px" }}
              onClick={signup}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
