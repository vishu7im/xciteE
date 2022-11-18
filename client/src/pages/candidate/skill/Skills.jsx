import React, { useState } from "react";
import "./skills.css";
import { useNavigate } from "react-router-dom";
import Arrow from "../../../Assets/previousicon.png";
import Orange from "../../../Assets/orange_search_bar.png";
import Navbar from "../../../components/navbar/Navbar";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { skill } from "./skill";
import { Stack } from "@mui/system";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";

const Skills = () => {
  const { token } = AuthContext();
  const [inputskill, setskillinput] = useState([]);
  const navigate = useNavigate();

  const handleInput = (e, value) => {
    setskillinput(value);
  };

  const submit = async () => {
    const url = `${process.env.REACT_APP_API_KEY}/candidate/skills`;
    try {
      await axios.post(
        url,
        { skills: inputskill },
        {
          headers: {
            token: token,
          },
        }
      );

      alert("add");
    } catch (error) {
      alert("err");
    }
  };
  return (
    <div className="container-fluid main_container">
      <div className="row">
        <div className="col-lg-3 certification-page-left">
          <Navbar status={"Skill"} />
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
              <Stack spacing={2} sx={{ width: 500 }}>
                <Autocomplete
                  multiple
                  id="size-small-outlined-multi"
                  size="small"
                  options={skill}
                  getOptionLabel={(option) => option}
                  onChange={handleInput}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Skills"
                      placeholder="Skills"
                    />
                  )}
                />
              </Stack>
            </div>

            <div className="row">
              <div className="col-lg-8 next_div"></div>
              <div className="col-lg-2">
                <button className="btn-edu-next" onClick={submit}>
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
export default Skills;
