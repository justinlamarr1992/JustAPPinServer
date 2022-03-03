const User = require("../models/user");
const Product = require("../models/product");
const Cart = require("../models/cart");
const Discount = require("../models/discount");
const Order = require("../models/order");

exports.userCart = async (req, res) => {
  console.log(req.body); //{cart:[]}
  const { cart } = req.body;
  let products = [];

  const user = await User.findOne({ email: req.user.email }).exec();

  //   check if cart with logged in user ID already exist
  let cartExistByThisUser = await Cart.findOne({ orderedBy: user._id }).exec();

  if (cartExistByThisUser) {
    cartExistByThisUser.remove();
    console.log("Removed Old Cart");
  }
  for (let i = 0; i < cart.length; i++) {
    let object = {};
    object.product = cart[i]._id;
    object.count = cart[i].count;
    object.color = cart[i].color;
    //get price for creating total
    let productFromDb = await Product.findById(cart[i]._id)
      .select("price")
      .exec();
    object.price = productFromDb.price;
    products.push(object);
  }
  console.log("Product", products);
  let cartTotal = 0;
  for (let i = 0; i < products.length; i++) {
    cartTotal = cartTotal + products[i].price * products[i].count;
  }
  console.log("Cart Total", cartTotal);

  let newCart = await new Cart({
    products,
    cartTotal,
    orderedBy: user._id,
  }).save();

  console.log("new cart", newCart);
  res.json({ ok: true });
};

exports.getUserCart = async (req, res) => {
  const user = await User.findOne({ email: req.user.email }).exec();
  let cart = await Cart.findOne({ orderedBy: user._id })
    .populate("products.product", "_id title price totalAfterDiscount")
    .exec();
  const { products, cartTotal, totalAfterDiscount } = cart;
  res.json({ products, cartTotal, totalAfterDiscount });
};

exports.emptyCart = async (req, res) => {
  const user = await User.findOne({ email: req.user.email }).exec();
  const cart = await Cart.findOneAndRemove({ orderedBy: user._id }).exec();
  console.log("Cart Emptyied");
  res.json(cart);
};

// exports.saveAddress = async (req, res) => {
//   const userAddress = await User.findOneAndUpdate(
//     { email: req.user.email },
//     { address: req.body.address }
//   ).exec();

//   res.json({ ok: true });
// };

exports.saveAddress = async (req, res) => {
  const userAddress = await User.findOneAndUpdate(
    { email: req.user.email },
    { address: req.body.address }
  ).exec();

  res.json({ ok: true });
};

exports.updateAddress = async (req, res) => {
  try {
    const updated = await User.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true }
    ).exec();
    res.json(updated);
  } catch (err) {
    console.log("USER UPDATE ERROR --->", err);
    res.status(400).json({ err: err.message });
  }
};

// see if the address can be change to this as well as the function
exports.applyDiscountToUserCart = async (req, res) => {
  const { discount } = req.body;
  console.log("DISCOUNT", discount);
  const validDiscount = await Discount.findOne({ name: discount }).exec();
  if (validDiscount === null) {
    return res.json({
      err: "Invalid Discount",
    });
  }
  console.log("Valid Discount", validDiscount);
  const user = await User.findOne({ email: req.user.email }).exec();
  let { products, cartTotal } = await Cart.findOne({ orderedBy: user._id })
    .populate("products.product", "_id title price")
    .exec();
  console.log("Cart Total", cartTotal, "rate", validDiscount.rate);
  // calculate total after discount
  let totalAfterDiscount = (
    cartTotal -
    (cartTotal * validDiscount.rate) / 100
  ).toFixed(2);
  Cart.findOneAndUpdate(
    { orderedBy: user._id },
    { totalAfterDiscount },
    { new: true }
  ).exec();
  res.json(totalAfterDiscount);
};

exports.createOrder = async (req, res) => {
  const { paymentIntent } = req.body.stripeResponse;
  const user = await User.findOne({ email: req.user.email }).exec();
  let { products } = await Cart.findOne({ orderedBy: user._id }).exec();
  let newOrder = await new Order({
    products,
    paymentIntent,
    orderedBy: user._id,
  }).save();
  console.log("New Order Saved", newOrder);
  res.json({ ok: true });
};
