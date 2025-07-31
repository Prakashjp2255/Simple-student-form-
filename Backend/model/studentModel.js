const mongoose = require("mongoose");

const studentform = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile_no: {
    type: Number,
    required: true,
  },
  college_name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Student", studentform);
