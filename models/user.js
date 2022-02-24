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
    street: { type: String, required: true },
    street2: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: Number, required: true, maxlength: 5 },
    // test
    // address: String,
    // address: [
    //   {
    //     street: { type: String, required: true },
    //     street2: { type: String },
    //     city: { type: String, required: true },
    //     state: { type: String, required: true },
    //     zip: { type: Number, required: true, maxlength: 5 },
    //   },
    // ],
    // wishlist: [{ type: objectId, ref: "Products" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
