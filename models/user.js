const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

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
    address: {
      street: { type: String, required: true },
      street2: { type: String, required: false },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zip: { type: Number, required: true, maxlength: 5 },
    },

    wishlist: [{ type: ObjectId, ref: "Product" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

// type: mongoose.SchemaTypes.ObjectId;
