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
  applyDiscountToUserCart,
  createOrder,
  orders,
  addToWishlist,
  wishlist,
  removeFromWishlist,
} = require("../controllers/user");

// routes

// cart
router.post("/user/cart", authCheck, userCart); //save cart
router.get("/user/cart", authCheck, getUserCart); //get Cart
router.delete("/user/cart", authCheck, emptyCart); //empty cart

// address
router.post("/user/address", authCheck, saveAddress);
router.put("/user/address", authCheck, updateAddress);

// discount
router.post("/user/cart/discount", authCheck, applyDiscountToUserCart);

// order
router.post("/user/order", authCheck, createOrder);
router.get("/user/orders", authCheck, orders);

// wishlist
router.post("/user/wishlist", authCheck, addToWishlist);
router.get("/user/wishlist", authCheck, wishlist);
router.put("/user/wishlist/:productId", authCheck, removeFromWishlist);

module.exports = router;
