const User = require("../../../schemas/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const secret_key = "xciteEuduction";

//controller for sign up
const signup = async (req, res) => {
  let { pwd, firstname, lastname, email } = req.body;

  const hashedPwd = await bcrypt.hash(pwd, saltRounds);

  const user = new User({
    firstname: firstname,
    lastname: lastname,
    email: email,
    pwd: hashedPwd,
  });
  try {
    const result = await user.save();
    let token = jwt.sign({ id: result._id }, secret_key);
    res.status(200).json({ msg: "user register successfully", token: token });
  } catch (error) {
    res.status(402).json({ data: error.message, msg: "duplicate" });
  }
};

// controller for login
const login = async (req, res) => {
  const { email, pwd } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      const compare = await bcrypt.compare(pwd, user.pwd);
      if (compare) {
        let token = jwt.sign({ id: user._id }, secret_key);

        res.status(200).json({ data: "User login successfully", token: token });
      } else {
        res.status(404).json({ data: "Email and password do not match" });
      }
    } else {
      res.status(404).json({ data: "Email and password do not match" });
    }
  } catch (error) {
    res.status(404).json({ data: error.message });
  }
};

//controller for fetch user data
const fetchUserData = async (req, res) => {
  //code for fetch user data
  try {
    const user = await User.findOne({ _id: req.userid });

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ data: error.message });
  }
};

//controller for persnoalDetail
const personalDetail = async (req, res) => {
  // code for persnoal detail

  const { contact, DOB, gender, city, pincode, country, userProfile } =
    req.body;

  try {
    const data = await User.findByIdAndUpdate(req.userid, {
      PersonalDetail: {
        Contact: contact,
        DOB: DOB,
        Gender: gender,
        City: city,
        Pincode: pincode,
        Country: country,
        UserProfile: userProfile,
      },
    });
    console.log(req.userid);
    res.status(200).json({ msg: "data added!" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//controller for education
const education = async (req, res) => {
  // code for education
  const { course, collage, year } = req.body;
  try {
    const data = await User.findByIdAndUpdate(req.userid, {
      $addToSet: {
        Education: {
          Course: course,
          Collage: collage,
          YearOfPassing: year,
        },
      },
    });
    res.status(200).json({ msg: "data added!" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//controller for workExperience
const workExperience = async (req, res) => {
  // code for workExperience
  const { jobtitle, name, location, start, end } = req.body;
  try {
    const data = await User.findByIdAndUpdate(req.userid, {
      $addToSet: {
        WorkExperience: {
          JobTitle: jobtitle,
          Name: name,
          Location: location,
          StartDate: start,
          EndDate: end,
        },
      },
    });
    res.status(200).json({ msg: "data added!" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
//controller for certificate
const certificate = async (req, res) => {
  // code for certificate
  const { name, organization, start, end, link } = req.body;
  try {
    const data = await User.findByIdAndUpdate(req.userid, {
      $addToSet: {
        Certificate: {
          NameofCertificate: name,
          Organization: organization,
          StartDate: start,
          EndDate: end,
          CertificateLink: link,
        },
      },
    });
    res.status(200).json({ msg: "data added!" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//controller for skills
const skills = async (req, res) => {
  // code for skills
  const { skills } = req.body;
  try {
    const data = await User.findByIdAndUpdate(req.userid, {
      $addToSet: {
        Skills: skills,
      },
    });
    res.status(200).json({ msg: "data added!" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//controller for ProfileLink
const ProfileLink = async (req, res) => {
  // code for ProfileLink
  const { linkedin, binance, protfolio } = req.body;
  try {
    const data = await User.findByIdAndUpdate(req.userid, {
      ProfileLink: {
        Linkdin: linkedin,
        Binance: binance,
        Protfolio: protfolio,
      },
    });
    res.status(200).json({ msg: "data added!" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = {
  personalDetail,
  education,
  certificate,
  skills,
  workExperience,
  ProfileLink,
  signup,
  login,
  fetchUserData,
};
