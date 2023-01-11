const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide the company name"],
      maxlength: [50, "Name cannot exceed 50 chars"],
    },
    position: {
      type: String,
      required: [true, "Please provide the position"],
      maxlength: [50, "Position cannot exceed 100 chars"],
    },
    status: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide an User"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
