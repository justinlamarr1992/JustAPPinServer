const mongoose = require("mongoose");
const { objectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      index: true,
    },
    role: {
      type: String,
      default: "lead",
      // client, consumer, lead, admin
    },
    cart: {
      type: Array,
      default: [],
    },
    website: {
      type: String,
      default: "marketing",
      // marketing, appointment, ecomm
    },
    // test
    // street: { type: String, required: true },
    // street2: { type: String },
    // city: { type: String, required: true },
    // state: { type: String, required: true },
    // zip: { type: Number, required: true, maxlength: 5 },
    // test

    // test 2
    address: [
      {
        street: String,
        street2: String,
        city: String,
        state: String,
        zip: Number,
      },
    ],
    // {
    //   street: { type: String, required: true }},
    //   {street2: { type: String }},
    //   {city: { type: String, required: true }},
    //   {state: { type: String, required: true }},
    //   {zip: { type: Number, required: true, maxlength: 5 }},
    // }

    // test 2

    // wishlist: [{ type: objectId, ref: "Products" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

// address: String,

// address:
//   {[street: { type: String, required: true },
//     street2: { type: String },
//     city: { type: String, required: true },
//     state: { type: String, required: true },
//     zip: { type: Number, required: true, maxlength: 5 },]},
