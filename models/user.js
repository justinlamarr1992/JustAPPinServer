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
    address: String,
    // wishlist: [{ type: objectId, ref: "Products" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
