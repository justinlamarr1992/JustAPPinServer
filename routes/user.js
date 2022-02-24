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
} = require("../controllers/user");

// routes
router.post("/user/cart", authCheck, userCart); //save cart
router.get("/user/cart", authCheck, getUserCart); //get Cart
router.delete("/user/cart", authCheck, emptyCart); //empty cart

router.post("/user/address", authCheck, saveAddress);

module.exports = router;
