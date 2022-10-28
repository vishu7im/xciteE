import React from "react";

import girl from "../../Assets/mainpage.png";

import "./Girl.css";
export default function Girl() {
  return (
    <div className="Girl_container">
      <div className="Girl_Logo">
        <img className="Girl" src={girl} alt="" />
      </div>
    </div>
  );
}
