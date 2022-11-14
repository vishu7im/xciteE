import { createContext, useContext } from "react";

const Context = createContext();

export const UserContext = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};

export const AuthContext = () => {
  return useContext(Context);
};
import React from "react";
import { useState } from "react";
import Girl from "../../../components/GirlLogo/Girl";
import "./Register.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
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
    <>
      <Girl />
      <div className="register_container">
        <div className="register_view"></div>
        <div className="register_func">
          <div className="register_form">
            <h2>Let's get started</h2>
            <div className="Register_input">
              <div className="">
                <p>
                  <label htmlFor="fname">first name</label>
                </p>
                <input
                  type="text"
                  name="firstname"
                  id="fname"
                  value={inputdata.firstname}
                  onChange={inputhandle}
                />
              </div>
              <div>
                <div className="lastname">
                  <div>
                    <p>
                      <label htmlFor="lname"> last name</label>
                    </p>
                    <input
                      type="text"
                      name="lastname"
                      id="lname"
                      value={inputdata.lastname}
                      onChange={inputhandle}
                    />
                  </div>
                  <p>OR</p>
                  <div>google</div>
                </div>
              </div>
              <div className="">
                <p>
                  <label htmlFor="email">email</label>
                </p>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={inputdata.email}
                  onChange={inputhandle}
                />
              </div>
              <div className="">
                <p>
                  <label htmlFor="pwd"> password</label>
                </p>
                <input
                  type="text"
                  name="pwd"
                  id="pwd"
                  value={inputdata.pwd}
                  onChange={inputhandle}
                />
              </div>
              <div>
                <button onClick={signup}>submit</button>
              </div>
              <div>
                <h6>
                  Already have an account ? <Link to="/loginprompt">login</Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
