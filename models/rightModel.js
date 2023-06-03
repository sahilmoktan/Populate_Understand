const mongoose = require("mongoose");

const RightsSchema = new mongoose.Schema(
  {
    staff_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Staff",
    },
    right: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Right", RightsSchema);
