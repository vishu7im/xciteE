import React from "react";
import Grid from "@mui/material/Grid";
import "./Post.css";

export default function Post() {
  return (
    <Grid item xs={4}>
      <div className="Card_container">
        <div className="Post_title">
          <div>logo</div>
          <div>title</div>
          <div>tag</div>
        </div>
        <div className="Post_Des">descreption</div>
        <div className="Post_tag">tag</div>
        <div className="Post_submit">submit</div>
      </div>
    </Grid>
  );
}
