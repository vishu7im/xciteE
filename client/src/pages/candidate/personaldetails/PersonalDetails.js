import React, { useEffect, useState } from "react";
import axios from "axios";
import "./personaldetails.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useNavigate } from "react-router-dom";
import Arrow from "../../../Assets/previousicon.png";
import { AuthContext } from "../../../context/AuthContext";
import FileBase from "react-file-base64";
import Navbar from "../../../components/navbar/Navbar";

const PersonalDetails = () => {
  const navigate = useNavigate();

  const { user, token } = AuthContext();
  const [input, setinput] = useState({
    contact: "",
    DOB: "",
    gender: "",
    city: "",
    pincode: "",
    country: "",
    userProfile: "",
  });

  const handleInput = (e) => {
    const { value, name } = e.target;
    setinput({ ...input, [name]: value });
  };

  const submitData = async () => {
    const { contact, DOB, gender, city, pincode, country, userProfile } = input;
    if (!contact || !DOB || !gender || !city || !pincode || !country) {
      alert("fill data");
      return;
    }

    const url = `${process.env.REACT_APP_API_KEY}/candidate/personalDetail`;
    try {
      const { data } = await axios.post(
        url,
        {
          contact,
          DOB,
          gender,
          city,
          pincode,
          country,
          userProfile,
        },
        {
          headers: {
            token: token,
          },
        }
      );

      setinput({
        contact: "",
        DOB: "",
        gender: "",
        city: "",
        pincode: "",
        country: "",
        userProfile: "",
      });
      navigate("/education");
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  useEffect(() => {
    const { firstname, lastname, email } = user;
    setinput({
      firstname: firstname,
      lastname: lastname,
      email: email,
      contact: "",
      DOB: "",
      gender: "",
      city: "",
      pincode: "",
      country: "",
      userProfile: "",
    });
  }, [user]);

  // const navigateFunc = (value) => {
  //   navigate(`/${value}`);
  // };

  return (
    <div className="container-fluid main_container">
      <div className="row">
        <div className="col-lg-3 personal-page-left">
          <Navbar status={"Persnoal"} />
        </div>

        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-1 prev_icon">
              <img
                src={Arrow}
                alt="arrow"
                onClick={() => navigate("/register")}
              />
            </div>
            <div className="col-lg-5 details_text">
              Add your personal details
            </div>
            <div className="col-lg-5"></div>
          </div>
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-3">
              <div className="input_div">
                <div className="text">First Name</div>
                <input
                  type="text"
                  className="form-control form"
                  value={input.firstname}
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="input_div">
                <div className="text">Last Name</div>
                <input
                  type="text"
                  className="form-control last-name"
                  value={input.lastname}
                />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="profile_photo">
                <p className="pp_text">
                  <FileBase
                    className={"filebase"}
                    multiple={false}
                    onDone={({ base64 }) => {
                      setinput({ ...input, userProfile: base64 });
                    }}
                  />
                  <br /> Photo
                </p>
              </div>
            </div>
            <div className="clear"></div>
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-4">
                <div className="text">Email</div>
                <input
                  type="email"
                  className="form-control"
                  value={input.email}
                />
              </div>
              <div className="col-lg-3">
                <div className="text">Contact</div>
                <input
                  type="number"
                  name="contact"
                  className="form-control"
                  onChange={handleInput}
                  value={input.contact}
                />
              </div>

              <div className="col-lg-4"></div>
            </div>
            <div className="row mt-2">
              <div className="col-lg-2"></div>
              <div className="col-lg-4">
                <div className="text">Date of birth</div>
                <input
                  type="date"
                  className="form-control"
                  name="DOB"
                  value={input.DOB}
                  onChange={handleInput}
                />
              </div>
              <div className="col-lg-4">
                <div className="text">Gender</div>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="gender"
                  onChange={handleInput}
                >
                  <FormControlLabel
                    value="Male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="Female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="Transgender"
                    control={<Radio />}
                    label="Transgender"
                  />
                </RadioGroup>
              </div>

              <div className="col-lg-4"></div>
            </div>
            <div className="row mt-2">
              <div className="col-lg-2"></div>
              <div className="col-lg-3">
                <div className="text">City</div>
                <input
                  type="email"
                  className="form-control"
                  name="city"
                  value={input.city}
                  onChange={handleInput}
                />
              </div>
              <div className="col-lg-3">
                <div className="text">Pincode</div>
                <input
                  type="number"
                  className="form-control"
                  name="pincode"
                  value={input.pincode}
                  onChange={handleInput}
                />
              </div>

              <div className="col-lg-4"></div>
            </div>

            <div className="row mt-4">
              <div className="col-lg-2"></div>
              <div className="col-lg-3">
                <div className="text">Country</div>
                <input
                  type="text"
                  className="form-control"
                  name="country"
                  value={input.country}
                  onChange={handleInput}
                />
              </div>
              <div className="col-lg-7"></div>
            </div>
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-10">
                <button className="btn-next" onClick={submitData}>
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
export default PersonalDetails;
