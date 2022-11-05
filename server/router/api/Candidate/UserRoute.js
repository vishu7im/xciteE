const express = require("express");
const router = express.Router();
const {
  personalDetail,
  education,
  workExperience,
  certificate,
  skills,
  ProfileLink,
  signup,
  login,
  fetchUserData,
} = require("../../controllers/Candidate/User");
const { auth } = require("../../middleware/authorisation");

// api for get userData
router.get("/fetchuserdata", auth, fetchUserData);

// api for registering user
router.post("/signup", signup);

//api for login user
router.post("/login", login);

//api for persnoal details
router.post("/personalDetail", personalDetail);

//api for education
router.post("/education", auth, education);

//api for workExperience
router.post("/workExperience", auth, workExperience);

//api for certificate
router.post("/certificate", auth, certificate);

//api for skills
router.post("/skills", auth, skills);

//api for ProfileLink
router.post("/profileLink", auth, ProfileLink);

module.exports = router;
