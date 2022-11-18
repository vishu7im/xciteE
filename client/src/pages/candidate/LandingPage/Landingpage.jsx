import React from "react";
import Grid from "@mui/material/Grid";
import "./Landingpage.css";
import Post from "../../../components/Post/Post";

export default function Landingpage() {
  return (
    <div>
      <div className="landing_container">
        <Grid container spacing={2} columns={12}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </Grid>
      </div>
    </div>
  );
}
