const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
  {
    address: String,
    email: {
      required: true,
      type: String
    },
    firstName: {
      required: true,
      type: String
    },
    headline: String,
    lastName: {
      required: true,
      type: String
    },
    phone: {
      required: true,
      type: String
    },
    summary: String
  },
  {
    timestamps: true
  }
);

const Resume = mongoose.model("Resume", resumeSchema);

module.exports = Resume;
