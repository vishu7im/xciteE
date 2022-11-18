import * as React from "react";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Dialog from "@mui/material/Dialog";

import { FcGoogle } from "react-icons/fc";
import "./loginprompt.css";

export default function LoginPrompt() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    pwd: "",
  });
  const handleData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const Login = async () => {
    const { email, pwd } = data;
    if (!pwd || !email) {
      alert("fill data ");
      return;
    }

    const url = `${process.env.REACT_APP_API_KEY}/candidate/login`;
    try {
      const { data } = await axios.post(url, {
        pwd,
        email,
      });
      setData({
        pwd: "",
        email: "",
      });
      localStorage.setItem("user", data.token);

      alert("login success");
      navigate("/landing");
    } catch (error) {
      console.log(error);
    }
  };
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setInterval(() => {
      setOpen(true);
    }, 1000);
  }, []);

  return (
    <div>
      <Dialog
        open={open}
        fullWidth={true}
        maxWidth={"xs"}
        borderRadius={"20px"}
        height={500}
      >
        <div
          className="mt-3"
          style={{
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          Login
        </div>
        <div className="d-flex justify-content-center">
          <div className="radio_div  mt-2 ">
            <FormControlLabel
              value="female"
              control={<Radio style={{ color: "orange" }} />}
              label="Student"
            />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Employer"
            />
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div className="p-4">
            <input
              type="text"
              placeholder="Email id"
              name="email"
              style={{ width: "300px", borderRadius: "6px", padding: "2px" }}
              onChange={handleData}
              value={data.email}
            />
          </div>
          <div className="p-2">
            <input
              type="password"
              name="pwd"
              placeholder="Password"
              style={{ width: "300px", borderRadius: "6px", padding: "2px" }}
              onChange={handleData}
              value={data.pwd}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className=" mt-5 radio_div">
            <div className="btndiv-grp">
              <div>
                <button
                  style={{
                    border: "none",
                    backgroundColor: "#fff",
                    textDecorationLine: "underline",
                    color: "#F97316",
                  }}
                >
                  Forgot Password
                </button>
              </div>
              <div>
                <button
                  style={{
                    backgroundColor: "#F97316",
                    color: "white",
                    border: "none",
                    borderRadius: "30px",
                    fontSize: "16px",
                    padding: "2px 17px",
                  }}
                  onClick={Login}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">OR</div>
        <div className="text-center mt-4">
          <button
            className="p-2"
            style={{
              width: "70%",
              borderRadius: "16px",
              backgroundColor: "white",
              fontSize: "15px",
            }}
          >
            <span
              style={{
                fontSize: "25px",
                paddingRight: "20px",
              }}
            >
              <FcGoogle />
            </span>
            Login with Google Account
          </button>
        </div>
        <div
          className="text-center mt-4 mb-5"
          style={{
            textDecoration: "underline",
            fontSize: "15px",
            color: "#F97316",
            fontWeight: "600",
          }}
        >
          Don't have an account?
          <Link style={{ color: "orange" }} to="/register">
            Register Now
          </Link>
        </div>
      </Dialog>
    </div>
  );
}
