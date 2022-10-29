import React from "react";
import "./personaldetails.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useNavigate } from "react-router-dom";
import Arrow from "../../../Assets/previousicon.png";

const PersonalDetails = () => {
  const navigate = useNavigate();
  // const navigateFunc = (value) => {
  //   navigate(`/${value}`);
  // };

  return (
    <div className="container-fluid main_container">
      <div className="row">
        <div className="col-lg-3 personal-page-left">
          <div className="row">
            <div className="col-lg-12">
              <div className="personal_text">XcitEducation</div>
              <div className="btn-grp mt-5">
                <div>
                  <button className="btn-1">PERSONAL DETAILS</button>
                  <div className="bottom_line"></div>
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
                <input type="text" className="form-control form" />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="input_div">
                <div className="text">Last Name</div>
                <input type="text" className="form-control last-name" />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="profile_photo">
                <p className="pp_text">
                  Add A profile
                  <br /> Photo
                </p>
              </div>
            </div>
            <div className="clear"></div>
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-4">
                <div className="text">Email</div>
                <input type="email" className="form-control" />
              </div>
              <div className="col-lg-3">
                <div className="text">Contact</div>
                <input type="number" className="form-control" />
              </div>

              <div className="col-lg-4"></div>
            </div>
            <div className="row mt-2">
              <div className="col-lg-2"></div>
              <div className="col-lg-4">
                <div className="text">Date of birth</div>
                <input type="email" className="form-control" />
              </div>
              <div className="col-lg-4">
                <div className="text">Gender</div>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
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
                <input type="email" className="form-control" />
              </div>
              <div className="col-lg-3">
                <div className="text">Pincode</div>
                <input type="number" className="form-control" />
              </div>

              <div className="col-lg-4"></div>
            </div>

            <div className="row mt-4">
              <div className="col-lg-2"></div>
              <div className="col-lg-3">
                <div className="text">Country</div>
                <input type="text" className="form-control" />
              </div>
              <div className="col-lg-7"></div>
            </div>
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-10">
                <button className="btn-next">next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PersonalDetails;
