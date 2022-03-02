const Discount = require("../models/discount");

//create, remove, list
exports.create = async (req, res) => {
  try {
    const { name, expiry, rate } = req.body.discount;
    res.json(await new Discount({ name, expiry, rate }).save());
  } catch (err) {
    console.log(err);
  }
};
exports.remove = async (req, res) => {
  try {
    res.json(await Discount.findByIdAndDelete(req.params.discountId).exec());
  } catch (err) {
    console.log(err);
  }
};
exports.list = async (req, res) => {
  try {
    res.json(await Discount.find({}).sort({ createdAt: -1 }).exec());
  } catch (err) {
    console.log(err);
  }
};
