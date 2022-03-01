const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const profileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      text: true,
    },
    // slug: {
    //   type: String,
    //   unique: true,
    //   lowercase: true,
    //   index: true,
    // },
    // companyName: {
    //   type: String,
    //   trim: true,
    //   required: true,
    //   text: true,
    // },
    // address: { type: String, trim: true, required: true, text: true },
    // email: { type: String, trim: true, required: true, text: true },
    // domain: { type: String, trim: true, required: true, text: true },
    // payment: {
    //   type: String,
    //   enum: ["In Full", "Weekly", "Bi-Weekly", "Monthly", "Yearly"],
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", profileSchema);
