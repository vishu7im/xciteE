const Mongoose = require("mongoose");
//step1 -create a model
const UserSchema = new Mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  pwd: {
    type: String,
  },
  Contact: {
    type: String,
  },
  PersonalDetail: {
    type: Object,
  },
  ProfileLink: {
    type: Object,
  },
  WorkExperience: {
    type: Array,
  },
  Skills: {
    type: Array,
  },
  Education: {
    type: Array,
  },
  Certificate: {
    type: Array,
  },
});

const User = new Mongoose.model("User", UserSchema);
//step2export
module.exports = User;
