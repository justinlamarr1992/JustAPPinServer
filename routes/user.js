const express = require("express");
const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controllers
const {
  userCart,
  getUserCart,
  emptyCart,
  saveAddress,
  updateAddress,
} = require("../controllers/user");

// routes

// cart
router.post("/user/cart", authCheck, userCart); //save cart
router.get("/user/cart", authCheck, getUserCart); //get Cart
router.delete("/user/cart", authCheck, emptyCart); //empty cart

// address
router.post("/user/address", authCheck, saveAddress);
router.put("/user/address", authCheck, updateAddress);

module.exports = router;
