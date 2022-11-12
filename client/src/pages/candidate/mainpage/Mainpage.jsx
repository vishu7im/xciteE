import React, { useEffect, useState } from "react";
import "./mainpage.css";
import KickingGirl from "../../../Assets/mainpage.png";
import Maps from "../../../Assets/location.png";
import Searchbar from "../../../Assets/search (2).png";
import { useNavigate } from "react-router-dom";

const Mainpage = () => {
  const navigate = useNavigate();
  const [searchdata, setSearchData] = useState(posts);
  const [location, setLocation] = useState({
    inputValue: "",
    message: "please fill the field",
    display: false,
  });
  const [filterData, setFilterData] = useState([]);
  const [value, setValue] = useState({
    inputValue: "",
    message: "please fill the field",
    display: false,
  });

  const searchInternships = () => {
    const newdata = [...searchdata];
    console.log(!value.display && !location.display, "hello");
    if (!value.display && !location.display) {
      const filteredData = newdata.filter((obj) => {
        return (
          obj.title.toLowerCase().indexOf(value) >= 0 &&
          obj.location.toLowerCase().indexOf(location) >= 0
        );
      });
      setFilterData(filteredData); //updating the data to the state
    }
  };
  const validateSearchData = () => {
    const userdata = { ...value };
    const locationdata = { ...location };

    if (userdata.inputValue === "") {
      userdata.display = true;
      setValue(userdata);
    }
    if (locationdata.inputValue === "") {
      locationdata.display = true;
      setLocation(locationdata);
    }
    searchInternships();
  };
  return (
    <div className="container-fluid main_container">
      <div className="row">
        <div className="col-lg-4 main-page-left">
          <div className="row">
            <div className="col-lg-8">
              <div className="main_text">XcitEducation</div>
            </div>
            <div className="col-lg-4"></div>
          </div>
          <div className="row">
            <div className="col-lg-12 mainpage_img">
              <img src={KickingGirl} style={{ width: "450px" }} />
            </div>
          </div>
        </div>
        <div className="col-lg-8 main-page-right">
          <div className="row mt-5">
            <div className="col-lg-3"></div>
            <div className="col-lg-2">
              <button
                className="register_btn"
                onClick={() => navigate("/register")}
              >
                Register now
              </button>
            </div>
            <div
              className="col-lg-3 login_btn"
              onClick={() => navigate("/loginprompt")}
            >
              Login
            </div>
            <div className="col-lg-1 line_btn"></div>
            <div className="col-lg-2 employers_btn">For employers</div>
          </div>
          <div className="row center_div">
            <div className="col-lg-2"></div>

            <div className="col-lg-8 text_div">
              <p className="text1">Looking for internships?</p>
            </div>
            <div className="col-lg-2"></div>
          </div>
          <div className="row">
            <div className="col-lg-3"></div>

            <div className="col-lg-4">
              <p className="text2">
                We are here to help you find the best internship.
              </p>
            </div>
            <div className="col-lg-6"></div>
          </div>

          <div className="row mb-4 mt-5">
            <div className="col-lg-3"></div>

            <div className="col-lg-6">
              <div className="location_main_input mb-3">
                <input
                  type="text"
                  placeholder="search jobs by title or skills"
                  className="location_input"
                  onChange={(e) => setValue(e.target.value)}
                  value={value.inputValue}
                />
                <img src={Searchbar} className="location_img" />
              </div>
              {value.display ? value.message : null}
            </div>
            <div className="col-lg-3"></div>
          </div>

          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
              <div className="location_main_input">
                <input
                  type="text"
                  placeholder="city, state or pin code"
                  className="location_input"
                  onChange={(e) => setLocation(e.target.value)}
                  value={location.location}
                />

                <img src={Maps} className="location_img" />
              </div>
              {location.display ? location.message : null}
            </div>
            <div className="col-lg-3"></div>
          </div>
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-3">
              <div className="searchbtn">
                <button
                  className="search_btn"
                  onClick={() => validateSearchData()}
                >
                  Search
                </button>
              </div>
            </div>

            <div>
              {filterData.length >= 0 &&
                filterData.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className="selecttext">{item.name}</div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mainpage;

const posts = [
  {
    name: "ABC",
    title: "career",
    location: "chennai",
  },
  { name: "ABC", title: "want Justice", location: "Hyderabad" },
  { name: "ABC", title: "Politics", location: "Mumbai" },
  { name: "pqr", title: "Politics", location: "Mumbai" },
  { name: "ABC", title: "Mental Health", location: "Bangalore" },
  { name: "ABC", title: "Fun Life", location: "Nagpur" },
  { name: "ABC", title: "Path to success", location: "Kolkota" },
  { name: "ABC", title: "Travel and health", location: "chennai" },
  { name: "ABC", title: "Heal Your Heart", location: "kolkota" },
];
