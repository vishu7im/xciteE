const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./router/api/Candidate/UserRoute");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 7000;
const DB = process.env.DATABASE_KEY;
app.use(cors());
app.use(express.json());

app.use("/candidate", router);

mongoose
  .connect(DB, {
    useNewUrlParser: "true",
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Application running on http://localhost/${PORT}`);
    });
  });
